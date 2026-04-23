const exportConversationDataTxt = ({suggestionBatches:suggestionBatches,transcripts:transcripts,chatMessages:chatMessages}) => {
    // 1. Initialize the text string with a header
    let exportText = `=================================================================\n`;
    exportText += `                  TWINMIND COPILOT EXPORT\n`;
    exportText += `                  Date: ${new Date().toLocaleString()}\n`;
    exportText += `=================================================================\n\n\n`;

    // 2. COLUMN 1: MIC & TRANSCRIPT
    exportText += `=================================================================\n`;
    exportText += ` [ 1. MIC & TRANSCRIPT ]\n`;
    exportText += `=================================================================\n`;
    if (transcripts.length === 0) exportText += `(No transcripts recorded)\n`;
    
    transcripts.forEach(t => {
      exportText += `[${t.time}] ${t.text}\n`;
    });
    exportText += `\n\n`;

    // 3. COLUMN 2: LIVE SUGGESTIONS
    exportText += `=================================================================\n`;
    exportText += ` [ 2. LIVE SUGGESTIONS ]\n`;
    exportText += `=================================================================\n`;
    if (suggestionBatches.length === 0) exportText += `(No suggestions generated)\n`;
    
    suggestionBatches.forEach(batch => {
      exportText += `--- Batch ${batch.batchNum} (${batch.time}) ---\n`;
      batch.suggestions.forEach(sug => {
        exportText += `[${sug.type}]\n${sug.text}\n\n`;
      });
    });
    exportText += `\n`;

    // 4. COLUMN 3: CHAT DETAILS
    exportText += `=================================================================\n`;
    exportText += ` [ 3. CHAT DETAILS ]\n`;
    exportText += `=================================================================\n`;
    if (chatMessages.length === 0) exportText += `(No chat messages)\n`;
    
    chatMessages.forEach(chat => {
      // Use rawTime if available from our previous state updates, otherwise skip time
      const timeStr = chat.rawTime ? `[${new Date(chat.rawTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] ` : '';
      exportText += `${timeStr}${chat.role}:\n${chat.text}\n\n`;
    });

    // 5. Trigger the .txt file download
    const blob = new Blob([exportText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `twinmind-export-${new Date().getTime()}.txt`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };




  const exportConversationDataJson = ({transcripts,suggestionBatches,chatMessages}) => {
    // 1. Tag and format all data types
    const formattedTranscripts = transcripts.map(t => ({
      type: 'TRANSCRIPT',
      timestamp: t.rawTime,
      displayTime: t.time,
      content: t.text
    }));

    const formattedSuggestions = suggestionBatches.flatMap(batch => 
      batch.suggestions.map(sug => ({
        type: `SUGGESTION (${sug.type})`,
        timestamp: sug.time,
        batchId: batch.id,
        suggestionId: sug.id,
        content: sug.text
      }))
    );

    const formattedChats = chatMessages.map(chat => ({
      type: `CHAT (${chat.role})`,
      timestamp: chat.rawTime,
      relatedSuggestionId: chat.relatedSuggestionId || null,
      content: chat.text
    }));

    // 2. Combine and sort chronologically
    const combinedTimeline = [
      ...formattedTranscripts, 
      ...formattedSuggestions, 
      ...formattedChats
    ].sort((a, b) => a.timestamp - b.timestamp);

    // 3. Create the final structured payload
    const exportPayload = {
      exportDate: new Date().toISOString(),
      summary: {
        totalTranscripts: transcripts.length,
        totalSuggestionBatches: suggestionBatches.length,
        totalChatMessages: chatMessages.length
      },
      timeline: combinedTimeline,
      // Optional: keep raw state for debugging or importing later
      rawState: { transcripts, suggestionBatches, chatMessages }
    };

    // 4. Trigger file download
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `meeting-export-${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  export {exportConversationDataJson,exportConversationDataTxt}