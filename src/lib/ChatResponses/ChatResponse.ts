/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ChatResponse {
  message: string;
  options?: string[];
  isTerminal?: boolean;
  state?: string;
    url?: string; // Nueva propiedad para URLs
  metadata?: { // O usando metadata para más flexibilidad
    url?: string;
    phone?: string;
    email?: string;
    appointmentUrl?: string;
  };
}

// Interface para el contexto de conversación
export interface ConversationContext {
  currentState?: string;
  previousState?: string;
  userSelections: string[];
  lastUserMessage: string;
}

// Estados del sistema
export const ConversationStates = {
  MAIN_MENU: 'main_menu',
  SERVICES_MENU: 'services_menu',
  TECHNICAL_SUPPORT: 'technical_support',
  BILLING: 'billing',
  CUSTOMER_SERVICE: 'customer_service',
  SPECIFIC_SERVICE: 'specific_service'
} as const;

export const getChatResponse = (userMessage: string, messages?: unknown[]): ChatResponse => {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Crear contexto basado en el historial de mensajes
  const context = createContextFromHistory(lowerMessage, messages || []);
  
  console.log('🔍 Contexto actual:', context);

  // --- DETECCIÓN DE ESTADO ACTUAL ---
  
  // Si el usuario quiere volver atrás
  if (lowerMessage.includes('volver') || lowerMessage.includes('atrás') || lowerMessage.includes('menú anterior')) {
    return handleBackNavigation(context);
  }

  // Si el usuario quiere ir al menú principal
  if (lowerMessage.includes('menú principal') || lowerMessage === '12' || lowerMessage === '5') {
    return getMainMenu();
  }

  // --- NAVEGACIÓN POR ESTADOS ---
  
  // Si estamos en el menú de servicios y el usuario selecciona una opción
  if (context.currentState === ConversationStates.SERVICES_MENU) {
    return handleServicesMenuSelection(lowerMessage, context);
  }

  // Si estamos en un servicio específico
  if (context.currentState === ConversationStates.SPECIFIC_SERVICE) {
    return handleSpecificService(lowerMessage, context);
  }

  // --- SALUDOS INICIALES ---
  if (
    (lowerMessage.includes("hola") || lowerMessage.includes("hello") || lowerMessage.includes("hi")) &&
    context.currentState !== ConversationStates.SERVICES_MENU
  ) {
    return getMainMenu();
  }

  // --- MENÚ PRINCIPAL ---
  if (
    lowerMessage === "1" ||
    (lowerMessage.includes("servicios") && !context.currentState)
  ) {
    return {
      message: "📋 **Nuestros Servicios:**",
      options: [
        "1. 🔧 Más info sobre Alineación y Balanceo",
        "2. 🛞 Más info sobre Cambio de neumáticos",
        "3. 🖥️ Más info sobre Diagnóstico electrónico",
        "4. ⚙️ Más info sobre Mantenimiento preventivo",
        "5. 🛑 Más info sobre Reparación de frenos",
        "6. 🚗 Más info sobre Reparación de motor",
        "7. 🔄 Más info sobre Reparación de transmisión",
        "8. ❄️ Más info sobre Aire acondicionado",
        "9. 🔊 Más info sobre Sistema de escape",
        "10. 🔋 Más info sobre Servicio de baterías",
        "11. ⛓️ Más info sobre Correa de Distribución",
        "12. ↩️ Volver al menú principal",
      ],
      state: ConversationStates.SERVICES_MENU
    };
  }

  // --- MENÚ PRINCIPAL → SOPORTE TÉCNICO ---
  if (lowerMessage === "2" || lowerMessage.includes("soporte")) {
    return {
      message: "🛠️ **Soporte Técnico:**\n\nEstamos aquí para resolver tus problemas técnicos. ¿Cuál es el inconveniente?",
      options: [
        "1. 📶 Problemas de conexión",
        "2. 📺 TV sin señal",
        "3. 📞 Problemas telefónicos",
        "4. 🔄 Reinstalación de servicio",
        "5. ↩️ Volver al menú principal",
      ],
      state: ConversationStates.TECHNICAL_SUPPORT
    };
  }

  // --- DESPEDIDA ---
  if (
    lowerMessage.includes("adiós") ||
    lowerMessage.includes("chau") ||
    lowerMessage.includes("bye") ||
    lowerMessage.includes("gracias")
  ) {
    return {
      message: "¡Hasta luego! 👋 Fue un gusto ayudarte.",
      isTerminal: true,
    };
  }

  // --- FALLBACK CON CONTEXTO ---
  return getContextualFallback(context);
};

// ==================== FUNCIONES AUXILIARES ====================

function createContextFromHistory(userMessage: string, messages: unknown[]): ConversationContext {
  const context: ConversationContext = {
    userSelections: [],
    lastUserMessage: userMessage
  };

  if (messages.length > 1) {
    // Analizar los últimos mensajes para determinar el estado actual
    const lastAssistantMessage = messages[messages.length - 2]?.content || ''; 
    
    if (lastAssistantMessage.includes('Nuestros Servicios') || lastAssistantMessage.includes('services_menu')) {
      context.currentState = ConversationStates.SERVICES_MENU;
    } else if (lastAssistantMessage.includes('Soporte Técnico')) {
      context.currentState = ConversationStates.TECHNICAL_SUPPORT;
    } else if (lastAssistantMessage.includes('Facturación')) {
      context.currentState = ConversationStates.BILLING;
    } else if (lastAssistantMessage.includes('Atención al Cliente')) {
      context.currentState = ConversationStates.CUSTOMER_SERVICE;
    } else if (
      lastAssistantMessage.includes('Alineación') ||
      lastAssistantMessage.includes('neumáticos') ||
      lastAssistantMessage.includes('Diagnóstico') ||
      lastAssistantMessage.includes('Mantenimiento') ||
      lastAssistantMessage.includes('frenos') ||
      lastAssistantMessage.includes('motor') ||
      lastAssistantMessage.includes('transmisión') ||
      lastAssistantMessage.includes('aire acondicionado') ||
      lastAssistantMessage.includes('escape') ||
      lastAssistantMessage.includes('baterías') ||
      lastAssistantMessage.includes('Correa de Distribución')
    ) {
      context.currentState = ConversationStates.SPECIFIC_SERVICE;
    } else {
      context.currentState = ConversationStates.MAIN_MENU;
    }

    // Extraer selecciones anteriores del usuario
    messages.forEach((msg, index) => {
      if (msg.role === 'user' && index < messages.length - 1) {
        const msgContent = msg.content.toLowerCase();
        if (msgContent === '1' || msgContent === '2' || msgContent === '3' || msgContent === '4') {
          context.userSelections.push(msgContent);
        }
      }
    });
  }

  return context;
}

function handleServicesMenuSelection(lowerMessage: string, context: ConversationContext): ChatResponse {
  const serviceMap: { [key: string]: { title: string, description: string } } = {
    '1': { title: '🔧 Alineación y Balanceo', description: 'Servicio completo de alineación y balanceo para tu vehículo. Garantizamos precisión y calidad.' },
    '2': { title: '🛞 Cambio de neumáticos', description: 'Cambio y montaje de neumáticos con las mejores marcas y garantía.' },
    '3': { title: '🖥️ Diagnóstico electrónico', description: 'Diagnóstico computarizado para identificar problemas en sistemas electrónicos.' },
    '4': { title: '⚙️ Mantenimiento preventivo', description: 'Mantenimiento programado para evitar futuros problemas y alargar la vida útil.' },
    '5': { title: '🛑 Reparación de frenos', description: 'Reparación y mantenimiento completo del sistema de frenos.' },
    '6': { title: '🚗 Reparación de motor', description: 'Especialistas en reparación de motores de todas las marcas.' },
    '7': { title: '🔄 Reparación de transmisión', description: 'Reparación de transmisiones automáticas y manuales.' },
    '8': { title: '❄️ Aire acondicionado', description: 'Recarga y reparación de sistemas de aire acondicionado.' },
    '9': { title: '🔊 Sistema de escape', description: 'Reparación y reemplazo de sistemas de escape.' },
    '10': { title: '🔋 Servicio de baterías', description: 'Prueba, carga y reemplazo de baterías.' },
    '11': { title: '⛓️ Correa de Distribución', description: 'Cambio y ajuste de correas de distribución.' }
  };

  const service = serviceMap[lowerMessage];
  if (service) {
    return {
      message: `**${service.title}**\n\n${service.description}\n\n¿Te interesa este servicio?`,
      options: [
        "1. ✅ Sí, quiero más información",
        "2. 📅 Agendar cita",
        "3. 💰 Consultar precios",
        "4. ↩️ Volver a servicios",
        "5. 🏠 Menú principal"
      ],
      state: ConversationStates.SPECIFIC_SERVICE
    };
  }

  return getServicesMenu();
}

function handleSpecificService(lowerMessage: string, context: ConversationContext): ChatResponse {
  // Mapeo de servicios con sus URLs específicas
  const serviceUrls: { [key: string]: string } = {
    '1': 'https://www.tutaller.com/servicios/alineacion-balanceo',
    '2': 'https://www.tutaller.com/servicios/cambio-neumaticos',
    '3': 'https://www.tutaller.com/servicios/diagnostico-electronico',
    '4': 'https://www.tutaller.com/servicios/mantenimiento-preventivo',
    '5': 'https://www.tutaller.com/servicios/reparacion-frenos',
    '6': 'https://www.tutaller.com/servicios/reparacion-motor',
    '7': 'https://www.tutaller.com/servicios/reparacion-transmision',
    '8': 'https://www.tutaller.com/servicios/aire-acondicionado',
    '9': 'https://www.tutaller.com/servicios/sistema-escape',
    '10': 'https://www.tutaller.com/servicios/servicio-baterias',
    '11': 'https://www.tutaller.com/servicios/correa-distribucion'
  };

  // Determinar qué servicio se seleccionó anteriormente
  const lastSelection = context.userSelections[context.userSelections.length - 1];
  const serviceUrl = serviceUrls[lastSelection] || 'https://www.tutaller.com/servicios';

  if (lowerMessage === '1') {
    return {
      message: `📋 **Más Información Detallada**\n\nPara obtener información completa sobre este servicio, visita:\n🔗 ${serviceUrl}\n\n¿Qué más te gustaría hacer?`,
      options: [
        "1. 📅 Agendar cita/turno",
        "2. 📞 Contacto telefónico directo",
        "3. 📧 Enviar consulta por email",
        "4. ↩️ Ver otros servicios",
        "5. 🏠 Menú principal"
      ],
      state: ConversationStates.SPECIFIC_SERVICE,
      url: serviceUrl,
      metadata: {
        url: serviceUrl,
        phone: '+5491122334455',
        email: 'info@tutaller.com',
        appointmentUrl: 'https://www.tutaller.com/agendar-cita'
      }
    };
  }

  if (lowerMessage === '1.1' || lowerMessage === 'agendar' || lowerMessage === 'cita') {
    return {
      message: `📅 **Agendar Cita/Turno**\n\nPara reservar tu turno, puedes:\n\n1. **Agendar online:** https://www.tutaller.com/agendar-cita\n2. **Llamarnos:** +5491122334455\n3. **WhatsApp:** https://wa.me/5491122334455\n\n¿Prefieres agendar ahora o necesitas más información?`,
      options: [
        "1. ✅ Agendar turno online",
        "2. 📋 Ver horarios disponibles",
        "3. 📞 Hablar con agente para agendar",
        "4. ↩️ Volver al servicio",
        "5. 🏠 Menú principal"
      ],
      metadata: {
        appointmentUrl: 'https://www.tutaller.com/agendar-cita',
        phone: '+5491122334455',
        whatsapp: 'https://wa.me/5491122334455'
      }
    };
  }

  if (lowerMessage === '2' || lowerMessage.includes('contacto') || lowerMessage.includes('teléfono')) {
    return {
      message: `📞 **Contacto Telefónico**\n\nPuedes contactarnos en:\n\n• **Teléfono:** +5491122334455\n• **Horarios:** Lunes a Viernes 8:00-20:00\n• **WhatsApp:** https://wa.me/5491122334455\n\n¿Necesitas que te llamemos?`,
      options: [
        "1. 📲 Llamar ahora",
        "2. 💬 Contactar por WhatsApp",
        "3. ⏰ Solicitar llamada de vuelta",
        "4. ↩️ Volver al servicio",
        "5. 🏠 Menú principal"
      ],
      metadata: {
        phone: '+5491122334455',
        whatsapp: 'https://wa.me/5491122334455'
      }
    };
  }

  if (lowerMessage === '3' || lowerMessage.includes('email') || lowerMessage.includes('correo')) {
    return {
      message: `📧 **Contacto por Email**\n\nPuedes escribirnos a:\n\n• **Email general:** info@tutaller.com\n• **Soporte técnico:** soporte@tutaller.com\n• **Consultas comerciales:** ventas@tutaller.com\n\n¿Sobre qué tema te gustaría escribirnos?`,
      options: [
        "1. 📝 Enviar consulta general",
        "2. 🔧 Consulta técnica específica",
        "3. 💰 Consulta de precios",
        "4. ↩️ Volver al servicio",
        "5. 🏠 Menú principal"
      ],
      metadata: {
        emailGeneral: 'info@tutaller.com',
        emailSupport: 'soporte@tutaller.com',
        emailSales: 'ventas@tutaller.com'
      }
    };
  }
    return getServicesMenu();
}

function handleBackNavigation(context: ConversationContext): ChatResponse {
  if (context.currentState === ConversationStates.SERVICES_MENU || 
      context.currentState === ConversationStates.SPECIFIC_SERVICE) {
    return getMainMenu();
  }
  
  if (context.currentState === ConversationStates.TECHNICAL_SUPPORT ||
      context.currentState === ConversationStates.BILLING ||
      context.currentState === ConversationStates.CUSTOMER_SERVICE) {
    return getMainMenu();
  }

  return getMainMenu();
}

function getMainMenu(): ChatResponse {
  return {
    message: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
    options: [
      "1. 📋 Información sobre servicios.",
      "2. 🛠️ Soporte técnico.",
      "3. 💳 Consultas de facturación.",
      "4. 👤 Atención al cliente.",
    ],
    state: ConversationStates.MAIN_MENU
  };
}

function getServicesMenu(): ChatResponse {
  return {
    message: "📋 **Nuestros Servicios:**",
    options: [
      "1. 🔧 Más info sobre Alineación y Balanceo",
      "2. 🛞 Más info sobre Cambio de neumáticos",
      "3. 🖥️ Más info sobre Diagnóstico electrónico",
      "4. ⚙️ Más info sobre Mantenimiento preventivo",
      "5. 🛑 Más info sobre Reparación de frenos",
      "6. 🚗 Más info sobre Reparación de motor",
      "7. 🔄 Más info sobre Reparación de transmisión",
      "8. ❄️ Más info sobre Aire acondicionado",
      "9. 🔊 Más info sobre Sistema de escape",
      "10. 🔋 Más info sobre Servicio de baterías",
      "11. ⛓️ Más info sobre Correa de Distribución",
      "12. ↩️ Volver al menú principal",
    ],
    state: ConversationStates.SERVICES_MENU
  };
}

function getContextualFallback(context: ConversationContext): ChatResponse {
  if (context.currentState === ConversationStates.SERVICES_MENU) {
    return {
      message: "No entendí tu selección. Por favor elige un número del 1 al 12:",
      options: [
        "1. 🔧 Alineación y Balanceo",
        "2. 🛞 Cambio de neumáticos",
        "3. 🖥️ Diagnóstico electrónico",
        "12. ↩️ Volver al menú principal",
      ],
      state: ConversationStates.SERVICES_MENU
    };
  }

  return {
    message: "No entendí tu mensaje. ¿Qué deseas hacer?",
    options: [
      "1. 📋 Información sobre servicios.",
      "2. 🛠️ Soporte técnico.",
      "3. 💳 Consultas de facturación.",
      "4. 👤 Atención al cliente.",
    ],
    state: ConversationStates.MAIN_MENU
  };
}

// ----------------------------------------
// FORMATEADOR
// ----------------------------------------

export const formatMessageWithOptions = (response: ChatResponse): string => {
  let formattedMessage = response.message;

  if (response.options) {
    formattedMessage += `<br/><br/><strong>Opciones disponibles:</strong><br/>`;
    formattedMessage += response.options.map((opt) => opt.trim()).join("<br/>");
  }
  // Si hay URL, formatearla como enlace Markdown
  if (response.url) {
    const urlText = response.url.replace('https://', '').replace('http://', '');
    formattedMessage = formattedMessage.replace(
      response.url, 
      `[${urlText}](${response.url})`
    );
  }

  // Buscar y formatear todas las URLs en el texto
  formattedMessage = formattedMessage.replace(
    /(https?:\/\/[^\s]+)/g, 
    (url) => {
      const urlText = url.replace('https://', '').replace('http://', '');
      return `[${urlText}](${url})`;
    }
  );

  // También formatear URLs sin protocolo (www.ejemplo.com)
  formattedMessage = formattedMessage.replace(
    /(www\.[^\s]+)/g, 
    (url) => `[${url}](https://${url})`
  );
  
  return formattedMessage;
};