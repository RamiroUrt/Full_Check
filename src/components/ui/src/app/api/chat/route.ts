// app/api/chat/route.ts
import { getChatResponse, formatMessageWithOptions } from '@/lib/ChatResponses/ChatResponse';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "hola";

    // Obtener respuesta con contexto completo
    const response = getChatResponse(lastMessage, messages);
    const responseText = formatMessageWithOptions(response);

    // Crear stream de respuesta
    const stream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        
        const words = responseText.split(' ');
        let index = 0;
        
        const sendNextWord = () => {
          if (index < words.length) {
            const word = words[index] + (index < words.length - 1 ? ' ' : '');
            const data = {
              type: 'text-delta',
              textDelta: word
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
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    
    // Fallback con memoria básica
    const fallbackStream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        const fallbackMessage = "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte? 😊\n\n1. 📋 Información sobre servicios\n2. 🛠️ Soporte técnico\n3. 💳 Consultas de facturación\n4. 👤 Atención al cliente\n\n*Escribe el número de tu selección*";
        
        const words = fallbackMessage.split(' ');
        let index = 0;
        
        const sendNextWord = () => {
          if (index < words.length) {
            const word = words[index] + (index < words.length - 1 ? ' ' : '');
            const data = {
              type: 'text-delta',
              textDelta: word
            };
            
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
            index++;
            setTimeout(sendNextWord, 30);
          } else {
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          }
        };
        
        sendNextWord();
      }
    });

    return new Response(fallbackStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
}