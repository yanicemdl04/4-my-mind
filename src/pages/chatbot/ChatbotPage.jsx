import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';
import './ChatbotPage.css';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Je suis là pour vous écouter et vous aider. Comment vous sentez-vous aujourd'hui ?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simuler une réponse du chatbot après 1 seconde
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Je comprends ce que vous ressentez. Pouvez-vous m'en dire plus sur ce qui vous préoccupe ?",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="chatbot-page">
      <Navbar />
      <div className="chat-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="chat-header"
        >
          <h1>Votre espace d'écoute</h1>
          <p>Un dialogue bienveillant pour vous accompagner</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="chat-messages"
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`message ${message.isBot ? 'bot' : 'user'}`}
            >
              {message.text}
            </motion.div>
          ))}
        </motion.div>

        <form onSubmit={handleSendMessage} className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            className="message-input"
          />
          <button type="submit" className="send-button">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ChatbotPage;