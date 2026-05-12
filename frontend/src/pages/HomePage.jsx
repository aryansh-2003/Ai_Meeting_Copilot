import React, { useEffect, useRef, useState, memo, useContext } from 'react';
import { motion } from 'framer-motion';
import TranscriptPanel from '../components/panels/TranscriptPanel';
import SuggestionsPanel from '../components/panels/SuggestionsPanel';
import ChatPanel from '../components/panels/ChatPanel';
import { socket } from '../../service/socket.service';
import Navbar from '../Navbar/Navbar';
import userContext from '../context/userContext'


  alert("Please insert your Groq-Api key first in setting to enjoy the features!!")




const AmbientBackground = memo(({ isRecording }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#0B0F14]">
    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#4ade80] rounded-full blur-[150px] opacity-20" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#4ade80] rounded-full blur-[150px] opacity-20" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_80%,transparent_100%)] mix-blend-overlay" />
  </div>
));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState([]);
  const [suggestionBatches, setSuggestionBatches] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [countdown, setCountdown] = useState(30);
  const {groqKey} = useContext(userContext)
  

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);
  const transcriptsRef = useRef(transcripts);
  
  useEffect(() => {
    transcriptsRef.current = transcripts;
  }, [transcripts]);

  useEffect(() => {
    if (!isRecording) {
      setCountdown(30); 
      return;
    }

    const handleNewTranscription = (data) => {
      if(Object.keys(data).length === 0){
         alert("Something went wrong Reload the page")
         return
        }
      setTranscripts(current => [
        ...current,
        {
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          rawTime: Date.now(),
          text: data
        }
      ]);
    };

    const handleNewSuggestion = (data) => {
        if(Object.keys(data).length === 0){
         alert("Something went wrong Reload the page")
         return
        }

      const newSuggestionBatch = [
        { type: 'TALKING POINT', text: data.Response[1] || "No point generated" ,time: Date.now()},
        { type: 'FACT-CHECK', text: data.Response[2] || "No fact generated" ,time:Date.now()},
        { type: 'QUESTION TO ASK', text: data?.Response[0] || "No question generated" ,time:Date.now()}
      ];
      
      setSuggestionBatches(prev => {
        const newBatch = {
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          batchNum: prev.length + 1,
          rawTime: Date.now(),
          suggestions: [...newSuggestionBatch].sort(() => 0.5 - Math.random()).slice(0, 3).map((s, i) => ({ ...s, id: `ns-${Date.now()}-${i}` }))
        };
        return [newBatch, ...prev];
      });
    };

    socket.on("newTranscription", handleNewTranscription);
    socket.on("newSuggestion", handleNewSuggestion);

    const tickInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => {
      socket.off("newTranscription", handleNewTranscription);
      socket.off("newSuggestion", handleNewSuggestion);
      clearInterval(tickInterval);
    };
  }, [isRecording]);

  useEffect(() => {
    if (countdown === 0) {
      generateSuggestions();
      setCountdown(30); 
    }
  }, [countdown]);


  useEffect(() => {
  
    const handleMessageReply = (data) => {
            if(Object.keys(data).length === 0){
         alert("Something went wrong Reload the page")
         return
        }
      const newBotMsg = {
        id: crypto.randomUUID(),
        role: 'ASSISTANT',
        text: `Elaborating on: "${data}"...`,
        rawTime: Date.now()
      };
      setChatMessages(prev => [...prev, newBotMsg]);
    };

    socket.on("messageReply", handleMessageReply);
    return () => {
      socket.off("messageReply", handleMessageReply);
    };
  }, []);
 
  const generateSuggestions = () => {
    const now = Date.now();
    const recentTranscripts = transcriptsRef.current.filter(t => (now - t.rawTime) <= 30000);
    const contextText = recentTranscripts.map(t => t.text).join(" ");
    socket.emit("NewConvo", {contextText:contextText, apiKey:groqKey});
  };

  const handleManualReload = () => {
    generateSuggestions();
    setCountdown(30); 
  };

  const handleToggleRecording = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const againRecording = () => {
      const mediarecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediarecorder;

      mediarecorder.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          socket.emit("GetTranscription", {audio:event.data,apiKey:groqKey});
        }
      };

      mediarecorder.start();

      setTimeout(() => {
        if (mediarecorder.state === "recording") {
          mediarecorder.stop();
        }
      }, 10000);
    };

    againRecording();
    intervalRef.current = setInterval(againRecording, 10000);
    setIsRecording(true);
  }

  const stopRecording = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  const handleSendMessage = (sug) => {
    const text = sug.text;
    const recentTranscripts = transcriptsRef.current.filter(t => (t.rawTime <= sug.time && t.rawTime >= sug.time - 30000));
    const contextText = recentTranscripts.map(t => t.text).join(" ");

    socket.emit("answerTheQues", { context: contextText, query: sug.text , apiKey:groqKey});
    const newUserMsg = { id: Date.now().toString(), role: 'YOU', text };
    setChatMessages(prev => [...prev, newUserMsg]);
  };






  return (
    <div className="relative h-screen text-slate-200 font-sans flex flex-col overflow-hidden bg-[#0B0F14] selection:bg-[#4ade80]/30 selection:text-white antialiased">
      <AmbientBackground isRecording={isRecording} />

 

      <Navbar isRecording={isRecording} transcripts={transcripts} suggestionBatches={suggestionBatches} chatMessages={chatMessages} />
      {groqKey ?
            <main className="relative z-10 flex-1 min-h-0 p-6 pt-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full max-w-[1600px] mx-auto"
        >

          <motion.div variants={itemVariants} className="h-full rounded-3xl bg-[#1D242B]/90 border border-[#5eead4]/30 shadow-[inset_0_0_20px_rgba(94,234,212,0.08),0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl overflow-hidden flex flex-col transition-colors duration-300">
            <TranscriptPanel
              isRecording={isRecording}
              onToggleRecording={handleToggleRecording}
              transcripts={transcripts}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full rounded-3xl bg-[#1D242B]/90 border border-[#5eead4]/30 shadow-[inset_0_0_20px_rgba(94,234,212,0.08),0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl overflow-hidden flex flex-col transition-colors duration-300">
            <SuggestionsPanel
              batches={suggestionBatches}
              onSuggestionClick={(sug) => handleSendMessage(sug)}
              onReload={handleManualReload} 
              countdown={countdown} 
              isRecording={isRecording}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full rounded-3xl bg-[#1D242B]/90 border border-[#5eead4]/30 shadow-[inset_0_0_20px_rgba(94,234,212,0.08),0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl overflow-hidden flex flex-col transition-colors duration-300">
            <ChatPanel
              messages={chatMessages}
              onSendMessage={handleSendMessage}
            />
          </motion.div>
        </motion.div>
      </main> : 
      ""
      }

    </div>
  );
}