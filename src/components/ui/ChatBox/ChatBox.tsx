"use client";
import Image from "next/image";
import { Message } from "@/types/Message.Types";
import Saludar from "../../../assets/img/Pets/Saludar.png";

type ChatBoxProps = {
  messages: Message[];
  input: string;
  isLoading: boolean;
chatBodyRef: React.RefObject<HTMLDivElement | null>
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleClose: () => void;
};

// Función para convertir URLs en enlaces clickeables
const renderLinks = (text: string, key?: number) => {
  // Procesar enlaces Markdown [texto](url) y saltos de línea
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\n)/g);

  return (
    <span key={key}>
      {parts.map((part, index) => {
        if (part === '\n') return <br key={index} />;
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
    </span>
  );
};

// Renderiza bloques {{GRID}}Label | Valor{{END}} como grilla
const renderMessageWithLinks = (text: string) => {
  // Si el texto ya tiene HTML (de dangerouslySetInnerHTML), no lo procesamos de nuevo
  if (text.includes('<')) {
    return <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} />;
  }

  const gridRegex = /\{\{GRID\}\}([\s\S]*?)\{\{END\}\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = gridRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderLinks(text.slice(lastIndex, match.index), key++));
    }

    const rows = match[1]
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.includes('|'))
      .map((line) => line.split('|').map((cell) => cell.trim()));

    parts.push(
      <div className="chat-contact-grid" key={key++}>
        {rows.map(([label, value], i) => (
          <div className="chat-contact-item" key={i}>
            <span className="chat-contact-label">{label}</span>
            <span className="chat-contact-value">{renderLinks(value)}</span>
          </div>
        ))}
      </div>
    );

    lastIndex = gridRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(renderLinks(text.slice(lastIndex), key++));
  }

  return parts;
};

export default function ChatBox({
  messages,
  input,
  isLoading,
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
        {messages.map((msg) => {
          if (msg.role === "assistant" && !msg.content) return null;
          return (
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
          );
        })}

        {isLoading && (
          <div className="chat-row bot">
            <Image
              src={Saludar}
              alt="avatar"
              className="chat-avatar"
              width={40}
              height={40}
            />
            <div className="chat-message typing-indicator">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="chat-input-box">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={handleInputChange}
          className="chat-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="chat-send-btn"
          disabled={!input.trim() || isLoading}
        >
          ➤
        </button>
      </form>
    </div>
  );
}