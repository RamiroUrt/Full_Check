"use client";

import { useState, useEffect } from "react";
import "./chatwidget.css";
import Image from "next/image";
import Saludar from "../../../assets/img/Pets/Saludar.png";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
   const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<
    { text: string; from: "bot" | "user" }[]
  >([]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { text: "¡Hola! 👋 ¿En qué puedo ayudarte hoy?", from: "bot" },
      ]);
    }
  }, [open]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, from: "user" }]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Recibido ✔️", from: "bot" },
      ]);
    }, 500);
  };
  
  const handleClose = () => {
    setClosing(true); 
    setTimeout(() => {
      setOpen(false); 
      setClosing(false);
    }, 350);
  };
  return (
    <>
      {/* Botón flotante */}
      <button className="chat" onClick={() => setOpen(!open)}>
      <div className="background"></div>
      <svg viewBox="0 0 100 100" height="100" width="100" className="chat-bubble">
        <g className="bubble">
          <path d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744" className="line line1"></path>
          <path d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884" className="line line2"></path>
        </g>
        <circle cx="42.5" cy="50.7" r="1.9" className="circle circle1"></circle>
        <circle r="1.9" cy="50.7" cx="49.9" className="circle circle2"></circle>
        <circle cx="57.3" cy="50.7" r="1.9" className="circle circle3"></circle>
      </svg>
      </button>

      {/* Caja del chat */}
      {open && (
        <div className={`chat-container ${closing ? "closing" : "opening"}`}>
          <div className="chat-header">
            <span>Chat</span>
            <span className="close-buble" onClick={handleClose}>➤</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-row ${
                  msg.from === "bot" ? "bot" : "user"
                }`}
              >
                {msg.from === "bot" && (
                    <Image
                    src={Saludar}
                    alt="bot avatar"
                    className="chat-avatar"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                )}

                <div className="chat-message">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="chat-input-box">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send-btn">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
