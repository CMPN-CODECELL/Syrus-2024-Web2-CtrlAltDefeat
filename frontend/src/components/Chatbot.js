import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Add your API key here (not recommended for production)
  const apiKey = 'AIzaSyCASIzwcjH3TIHUTwHhCuYJpyd9n3XLPjw';

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleSendMessage = async () => {
    // Add user message to the chat
    const userMessage = { text: input, user: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    // Generate AI response
    const result = await model.generateContent(input);
    const response = await result.response;
    const aiText = response.text();

    // Add AI response to the chat
    setMessages((prevMessages) => [...prevMessages, { text: aiText, user: 'ai' }]);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isChatbotOpen ? (
        <div className="w-100 border p-4 bg-white shadow-md rounded-lg">
          <div className="chatbox bg-gray-100 p-2 rounded-md">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.user}`}>
                {message.user === 'ai' ? (
                  <div className="whatsapp-message ai-message bg-lightBlue-100 p-2 rounded-md">
                    {message.text}
                  </div>
                ) : (
                  <div className="whatsapp-message user-message bg-green-100 p-2 rounded-md">
                    {message.text}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="input-box mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border p-2 mr-2 w-60 rounded-md"
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className="bg-green-500 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
          <button onClick={closeChatbot} className="mt-2 text-blue-500">
            Close Chatbot
          </button>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Open Chatbot
        </button>
      )}
    </div>
  );
};

export default Chatbot;
