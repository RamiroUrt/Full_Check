// app/api/chat/route.ts
import { streamText } from 'ai';
import { gemini } from '@/lib/ai';
import { getChatResponse, formatMessageWithOptions } from '@/lib/ChatResponses/ChatResponse';
import { SYSTEM_PROMPT } from '@/lib/prompts';

export async function POST(req: Request) {
  let messages: { role: string; content: string }[] = [];

  try {
    const body = await req.json();
    messages = body.messages ?? [];
  } catch {
    // body inválido, seguimos con mensajes vacíos
  }

  // Si no hay API key de Gemini, caemos al sistema de reglas actual
  if (!process.env.GEMINI_API_KEY) {
    return streamRuleBasedResponse(messages);
  }

  try {
    return await streamGeminiResponse(messages);
  } catch (error) {
    console.error('Error con Gemini, usando fallback por reglas:', error);
    return streamRuleBasedResponse(messages);
  }
}

async function streamGeminiResponse(messages: { role: string; content: string }[]): Promise<Response> {
  const apiMessages = messages
    .filter((m) => m && typeof m.content === 'string' && m.content.trim() !== '')
    .map((m) => ({
      role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
      content: m.content,
    }));

  const result = streamText({
    model: gemini,
    system: SYSTEM_PROMPT,
    messages: apiMessages,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      try {
        for await (const chunk of result.textStream) {
          const data = {
            type: 'text-delta',
            textDelta: chunk,
          };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      } catch (error) {
        console.error('Error en el stream de Gemini:', error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

function streamRuleBasedResponse(messages: { role: string; content: string }[]): Response {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || 'hola';

  let responseText: string;
  try {
    const response = getChatResponse(lastMessage, messages);
    responseText = formatMessageWithOptions(response);
  } catch {
    responseText =
      "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte? 😊\n\n1. 📋 Información sobre servicios\n2. 🛠️ Soporte técnico\n3. 💳 Consultas de facturación\n4. 👤 Atención al cliente\n\n*Escribe el número de tu selección*";
  }

  return streamTextByWords(responseText);
}

function streamTextByWords(text: string): Response {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      const words = text.split(' ');
      let index = 0;

      const sendNextWord = () => {
        if (index < words.length) {
          const word = words[index] + (index < words.length - 1 ? ' ' : '');
          const data = {
            type: 'text-delta',
            textDelta: word,
          };

          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
          index++;
          setTimeout(sendNextWord, 30 + Math.random() * 40);
        } else {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        }
      };

      sendNextWord();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
