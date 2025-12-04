"use client";
import Image from "next/image";
import { Message } from "@/types/Message.Types";
import Saludar from "../../../assets/img/Pets/Saludar.png";

type ChatBoxProps = {
  messages: Message[];
  input: string;
chatBodyRef: React.RefObject<HTMLDivElement | null>
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleClose: () => void;
};

// Función para convertir URLs en enlaces clickeables
const renderMessageWithLinks = (text: string) => {
  // Si el texto ya tiene HTML (de dangerouslySetInnerHTML), no lo procesamos de nuevo
  if (text.includes('<')) {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }

  // Procesar enlaces Markdown [texto](url)
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          const [, linkText, url] = match;
          return (
            <a
              key={index}
              href={url.startsWith('http') ? url : `https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {linkText}
            </a>
          );
        }
        return part;
      })}
    </>
  );
};

export default function ChatBox({
  messages,
  input,
  chatBodyRef,
  handleInputChange,
  handleSubmit,
  handleClose,  
}: ChatBoxProps) {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>Chat</span>
        <span className="close-buble" onClick={handleClose}>➤</span>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-row ${msg.role === "assistant" ? "bot" : "user"}`}
          >
            {msg.role === "assistant" && (
              <Image
                src={Saludar}
                alt="avatar"
                className="chat-avatar"
                width={40}
                height={40}
              />
            )}
            <div className="chat-message">
              {renderMessageWithLinks(msg.content)}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input-box">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={handleInputChange}
          className="chat-input"
        />
        <button
          type="submit"
          className="chat-send-btn"
          disabled={!input.trim()}
        >
          ➤
        </button>
      </form>
    </div>
  );
}