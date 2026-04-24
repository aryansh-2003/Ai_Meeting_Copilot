# TwinMind - Live Suggestions

**Live Demo:** https://ai-meeting-copilot-dafk.vercel.app

## Tech Stack
* **Frontend:** React,Tailwind, Context-Api
* **Backend:** Node.js, Express.js, Web Sockets
* **AI & APIs:** Groq (Whisper-large-v3-turbo, Llama3-70b-8192)

## Quick Start
1. Clone the repo: `git clone ...`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. **API Key:** The user can paste their api key in settings and after that click on save button and can enjoy thier meeting assistant.

##  Prompt Engineering Strategy
* **Context Window:** So currently i am sending 10 seconds of audio chunk to the ai to transcript it.And
for suggestions i am sending 30 second context to backed so ai have context of that conversation. I am also made a buffer which stores last 10 messages of alternate user and ai messages for further questioning.
* **Prompt Structure:** I have prompted the ai to understand the context of user and according to it return 3 suggestions in array + json format [question to ask,suggestion,fact-check].
* **Handling Silence/Noise:** It ask for further evaluation of context.

##  Architecture & Flow
* **Audio Capture:** So i have used 10 second audio chunk which i am sending to ai in future we can optimse it in UI by user. Also i needed to restart audio as it was producing audio chunk without buffer and it was useless for AI.
* **Data Flow:** The audi is recorded and send to backend using Web Socket and thorugh groq Api we transcript it and further sent back to frontend.

## Trade-offs & Decisions
* **Decision 1:** The decision o using web sockets instead of generic api response was its speed and time to connect as generic api needs time to send and receive response as well as displaying it. It was not worth the time we needed fast response for meeting so i used web socket to reduce message receiving latency.
* **Decision 2:** The Trade-Off i need to do was the functionality as i could have added login + authentication + jWT tokens + buisness model as the requirment suggested not to overengineer it i have done what assingment said me to do.