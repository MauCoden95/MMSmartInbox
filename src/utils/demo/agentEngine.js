// src/utils/demo/agentEngine.js
import { DEMO_INDUSTRIES } from '../../data/demo/demoIndustries.js';

export function getIndustryConfig(industryId) {
  return DEMO_INDUSTRIES.find(i => i.id === industryId) || DEMO_INDUSTRIES[0];
}

/**
 * Simulates intelligent agent processing.
 * First checks if the message matches a preset prompt — returns its specific response.
 * Falls back to keyword-based generic logic otherwise.
 * Architecture: swap simulateAgentResponse() for a real AI API call in the future.
 */
export function simulateAgentResponse(industryId, userMessage, conversationHistory = []) {
  const industry = getIndustryConfig(industryId);

  // 1. Check if message matches a preset prompt (exact or close match)
  const presetIndex = industry.presetPrompts.findIndex(p =>
    userMessage.trim().toLowerCase() === p.trim().toLowerCase()
  );

  if (presetIndex !== -1 && industry.presetResponses && industry.presetResponses[presetIndex]) {
    return industry.presetResponses[presetIndex];
  }

  // 2. Also check if the starterPrompt was sent and return starter-specific response
  const text = userMessage.toLowerCase();

  // 3. Fallback: keyword-based generic logic per industry
  switch (industryId) {
    case 'inmobiliaria':
      if (text.includes('balcón') || text.includes('balcon')) {
        return {
          responseText: 'Excelente. Encontré 3 propiedades que coinciden perfectamente con tus preferencias en Palermo y Belgrano, todas con balcón y dentro de tu presupuesto de USD 120.000.\n\n¿Querés que coordinemos una visita presencial para esta semana?',
          steps: [
            { type: 'done', text: 'Preferencia: Balcón' },
            { type: 'done', text: 'Filtrando propiedades con balcón' },
            { type: 'done', text: '3 propiedades encontradas' },
            { type: 'done', text: 'Lead calificado' },
            { type: 'active', text: 'Registrando en CRM' },
            { type: 'active', text: 'Preparando agenda de visita' }
          ],
          crmRecord: {
            name: 'Martín González',
            phone: '+54 9 11 4589-2231',
            interest: 'Depto 2 amb con balcón (Palermo/Belgrano)',
            details: 'Presupuesto USD 120.000 • 3 opciones coincidentes',
            status: 'Lead Calificado',
            nextStep: 'Coordinar visita presencial',
            source: 'Agente IA Inmobiliario'
          }
        };
      }
      return {
        responseText: '¡Perfecto! Puedo ayudarte. Encontré propiedades compatibles en Palermo y Belgrano dentro de tu presupuesto. ¿Tenés alguna preferencia adicional como balcón, planta baja o amenities?',
        steps: [
          { type: 'done', text: 'Solicitud recibida' },
          { type: 'done', text: 'Presupuesto y zona identificados' },
          { type: 'done', text: 'Propiedades compatibles encontradas' },
          { type: 'active', text: 'Evaluando filtros adicionales' },
          { type: 'active', text: 'Registrando prospecto en CRM' }
        ],
        crmRecord: {
          name: 'Prospecto Inmobiliario',
          phone: '+54 9 11 0000-0000',
          interest: 'Depto 2 amb en Palermo/Belgrano',
          details: 'Pendiente preferencias adicionales',
          status: 'En Calificación',
          nextStep: 'Confirmar preferencias de la propiedad',
          source: 'Agente IA Inmobiliario'
        }
      };

    case 'restaurante':
      if (text.includes('sí') || text.includes('si') || text.includes('confirmo') || text.includes('perfecto')) {
        return {
          responseText: 'Tu reserva quedó confirmada. ¡Nos vemos pronto en Casa Norte!',
          steps: [
            { type: 'done', text: 'Reserva confirmada' },
            { type: 'active', text: 'Registrando cliente en CRM' },
            { type: 'active', text: 'Programando recordatorio' }
          ],
          crmRecord: {
            name: 'Cliente Confirmado',
            phone: '+54 9 11 5543-8890',
            interest: 'Reserva confirmada',
            details: 'Casa Norte',
            status: 'Reserva Confirmada',
            nextStep: 'Recordatorio automático',
            source: 'Agente IA Restaurante'
          }
        };
      }
      return {
        responseText: 'Claro, podemos ayudarte con eso. ¿Querés reservar una mesa o tenés alguna otra consulta?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'active', text: 'Procesando solicitud' }
        ],
        crmRecord: null
      };

    case 'clinica':
      return {
        responseText: 'Encontré disponibilidad según tu consulta. ¿Podés darme más detalles para ayudarte mejor?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'done', text: 'Consultando agenda médica' },
          { type: 'active', text: 'Procesando solicitud' }
        ],
        crmRecord: null
      };

    case 'hotel':
      return {
        responseText: 'Con gusto te ayudo. ¿Tenés alguna fecha específica en mente o necesitás más información sobre nuestros servicios?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'active', text: 'Procesando solicitud hotelera' }
        ],
        crmRecord: null
      };

    case 'ecommerce':
      return {
        responseText: 'Para recomendarte la mejor opción, ¿podés contarme un poco más sobre cómo vas a usar el producto?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'active', text: 'Analizando necesidades del cliente' }
        ],
        crmRecord: null
      };

    default: // otro
      return {
        responseText: '¡Entendido! Podemos analizar tu proceso y diseñar una automatización a medida. ¿Querés que agendemos una reunión de diagnóstico sin costo?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'done', text: 'Categoría de negocio identificada' },
          { type: 'active', text: 'Registrando lead corporativo' }
        ],
        crmRecord: {
          name: 'Prospecto B2B',
          phone: 'Sin datos',
          interest: 'Automatización B2B',
          details: 'Pendiente diagnóstico',
          status: 'Consulta Activa',
          nextStep: 'Agendar reunión de diagnóstico',
          source: 'Agente IA Corporativo'
        }
      };
  }
}
