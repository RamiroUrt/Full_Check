"use client";

import { useState, useEffect, useRef } from "react";
import FloatingButton from "../FloatingButton";
import ChatBox from "./ChatBox";
import { Message } from "@/types/Message.Types";
import './ChatWidget.css'

export default function ChatWidgetWrapper() {
  
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "¡Hola! 👋 ¿En qué puedo ayudarte hoy?"
        }
      ]);
    }
  }, [open]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Error en el servidor");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      const assistantMessageId = (Date.now() + 1).toString();
      let assistantContent = "";

      setMessages(prev => [
        ...prev, 
        {
          id: assistantMessageId,
          role: "assistant",
          content: ""
        }
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);

              if (parsed.type === 'text-delta') {
                assistantContent += parsed.textDelta;
                
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === assistantMessageId
                      ? { ...msg, content: assistantContent }
                      : msg
                  )
                );
              }
            } catch {}
          }
        }
      }

    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: `Error: ${String(error)}`
        }
      ]);
    }
  };

  return (
    <>
      <FloatingButton open={open} toggleOpen={toggleOpen} />

      {open && (
        <ChatBox
          messages={messages}
          input={input}
          chatBodyRef={chatBodyRef}
          handleInputChange={e => setInput(e.target.value)}
          handleSubmit={handleSubmit}
          handleClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
