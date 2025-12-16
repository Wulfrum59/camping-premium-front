import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Je suis votre assistant du camping. Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer VOTRE_CLE_OPENAI`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [...messages, { role: "user", content: input }].map(m => ({
            role: m.sender === "bot" ? "assistant" : "user",
            content: m.text
          }))
        })
      });

      const data = await response.json();
      const botText = data.choices[0].message.content;
      setMessages(prev => [...prev, { sender: "bot", text: botText }]);
    } catch (error) {
      console.error("Erreur API :", error);
      setMessages(prev => [...prev, { sender: "bot", text: "Désolé, je ne peux pas répondre pour le moment." }]);
    }
  };
  

  return (
    <>
      {/* Bouton pour ouvrir/fermer le chat */}
      {!isOpen && (
        <div className="chatbot-toggle-button" onClick={() => setIsOpen(true)}>
          💬
        </div>
      )}

      {/* Chatbot flottant */}
      <div className={`chatbot-floating ${isOpen ? "" : "chatbot-hidden"}`}>
        <div className="chatbot-header">
          Chat Camping
          <span style={{ float: "right", cursor: "pointer" }} onClick={() => setIsOpen(false)}>✖</span>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            placeholder="Écrire un message..."
          />
          <button onClick={handleSend}>Envoyer</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
