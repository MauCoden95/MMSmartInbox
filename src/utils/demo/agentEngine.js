// src/utils/demo/agentEngine.js
import { DEMO_INDUSTRIES } from '../../data/demo/demoIndustries.js';

export function getIndustryConfig(industryId) {
  return DEMO_INDUSTRIES.find(i => i.id === industryId) || DEMO_INDUSTRIES[0];
}

/**
 * Simulates intelligent agent processing and generates agent text response, 
 * detailed activity timeline, and updated CRM record.
 */
export function simulateAgentResponse(industryId, userMessage, conversationHistory = []) {
  const text = userMessage.toLowerCase();
  const industry = getIndustryConfig(industryId);

  let responseText = '';
  let steps = [];
  let crmRecord = null;

  switch (industryId) {
    case 'inmobiliaria':
      if (text.includes('balcón') || text.includes('balcon') || text.includes('sí') || text.includes('si')) {
        responseText = 'Excelente. Encontré 3 propiedades que coinciden perfectamente con tus preferencias. La mejor opción es un departamento de 2 ambientes en Palermo Soho, con balcón corrido, 52 m² por USD 115.000.\n\n¿Querés que coordinemos una visita presencial para esta semana?';
        steps = [
          { type: 'done', text: 'Preferencia identificada: Balcón' },
          { type: 'done', text: 'Filtrando base de datos inmobiliaria' },
          { type: 'done', text: 'Coincidencia principal: Depto 2 amb Palermo Soho (USD 115.000)' },
          { type: 'done', text: 'Lead calificado: Alta intención de compra' },
          { type: 'active', text: 'Registrando lead calificado en CRM' },
          { type: 'active', text: 'Preparando propuesta de agenda de visita' }
        ];
        crmRecord = {
          name: 'Martín González',
          phone: '+54 9 11 4589-2231',
          interest: 'Depto 2 amb (Palermo Soho)',
          details: 'Presupuesto USD 120.000 • Requiere Balcón',
          status: 'Lead Calificado',
          nextStep: 'Coordinar visita presencial',
          source: 'Agente IA Inmobiliario'
        };
      } else {
        responseText = '¡Perfecto! Puedo ayudarte a encontrar opciones dentro de ese presupuesto. Encontré 3 propiedades compatibles en Palermo y Belgrano entre USD 115.000 y USD 120.000.\n\n¿Preferís que tenga balcón o amenities?';
        steps = [
          { type: 'done', text: 'Solicitud recibida' },
          { type: 'done', text: 'Presupuesto identificado: USD 120.000' },
          { type: 'done', text: 'Ubicación detectada: Palermo / Belgrano' },
          { type: 'done', text: 'Tipo de propiedad: 2 ambientes' },
          { type: 'done', text: 'Consultando base de datos inmobiliaria' },
          { type: 'done', text: 'Encontradas 3 propiedades compatibles' },
          { type: 'active', text: 'Evaluando filtros adicionales' },
          { type: 'active', text: 'Registrando prospecto en CRM' }
        ];
        crmRecord = {
          name: 'Martín González',
          phone: '+54 9 11 4589-2231',
          interest: 'Depto 2 amb en Palermo/Belgrano',
          details: 'Presupuesto USD 120.000',
          status: 'En Calificación',
          nextStep: 'Confirmar preferencia de balcón/amenities',
          source: 'Agente IA Inmobiliario'
        };
      }
      break;

    case 'restaurante':
      if (text.includes('nombre') || text.includes('martín') || text.includes('martin') || text.includes('confirmar')) {
        responseText = '¡Perfecto, Martín! Tu reserva para 4 personas el Sábado a las 21:00 hs en Restaurante Casa Norte quedó confirmada.\n\nTe enviamos los detalles por WhatsApp y agregamos el recordatorio automático.';
        steps = [
          { type: 'done', text: 'Datos de cliente validados: Martín' },
          { type: 'done', text: 'Verificando cupo en sistema de reservas' },
          { type: 'done', text: 'Reserva confirmada en Salón Principal' },
          { type: 'done', text: 'Generando código de reserva #CN-8842' },
          { type: 'active', text: 'Registrando cliente en CRM Restaurante' },
          { type: 'active', text: 'Programando mensaje de recordatorio' }
        ];
        crmRecord = {
          name: 'Martín (Cliente)',
          phone: '+54 9 11 5543-8890',
          interest: 'Reserva 4 comensales',
          details: 'Sábado 21:00 hs • Salón Principal',
          status: 'Reserva Confirmada',
          nextStep: 'Recordatorio automático 2hs antes',
          source: 'Agente IA Restaurante'
        };
      } else {
        responseText = 'Claro. Tengo disponibilidad para 4 personas este Sábado a las 21:00 hs en Salón Principal.\n\n¿A nombre de quién hacemos la reserva para guardarte la mesa?';
        steps = [
          { type: 'done', text: 'Intención detectada: Reserva de mesa' },
          { type: 'done', text: 'Fecha: Sábado | Hora: 21:00 hs' },
          { type: 'done', text: 'Comensales: 4 personas' },
          { type: 'done', text: 'Consultando disponibilidad en tiempo real' },
          { type: 'done', text: 'Mesa disponible en Salón Principal' },
          { type: 'active', text: 'Reservando cupo temporalmente' },
          { type: 'active', text: 'Solicitando nombre de contacto' }
        ];
        crmRecord = {
          name: 'Prospecto Comensal',
          phone: '+54 9 11 5543-8890',
          interest: 'Reserva 4 personas (Sábado 21:00)',
          details: 'Disponibilidad confirmada en Salón',
          status: 'Pendiente Confirmación',
          nextStep: 'Registrar nombre del titular',
          source: 'Agente IA Restaurante'
        };
      }
      break;

    case 'clinica':
      responseText = 'Encontré 2 profesionales con agenda disponible la semana que viene compatibles con OSDE:\n\n1. Dra. Elena Silva - Martes 10:30 hs\n2. Dr. Roberto Paz - Jueves 15:00 hs\n\n¿Cuál de esos dos horarios te conviene más?';
      steps = [
        { type: 'done', text: 'Especialidad detectada: Dermatología' },
        { type: 'done', text: 'Prepaga/Cobertura validada: OSDE' },
        { type: 'done', text: 'Consultando agenda de turnos médicos' },
        { type: 'done', text: 'Detectados 2 turnos disponibles la semana próxima' },
        { type: 'active', text: 'Registrando paciente en sistema de salud' },
        { type: 'active', text: 'Esperando selección de turno' }
      ];
      crmRecord = {
        name: 'Carolina M.',
        phone: '+54 9 11 3321-9988',
        interest: 'Turno Dermatología',
        details: 'Cobertura OSDE 310',
        status: 'Turno Pre-Reservado',
        nextStep: 'Confirmación de horario seleccionado',
        source: 'Agente IA Salud'
      };
      break;

    case 'hotel':
      responseText = 'Contamos con disponibilidad para 2 personas del 15 al 18 en nuestra Habitación Suite Executive (USD 140/noche) o Deluxe Matrimonial (USD 110/noche). Ambas incluyen desayuno buffet y Wi-Fi de alta velocidad.\n\n¿Te gustaría que reservemos la Suite Executive?';
      steps = [
        { type: 'done', text: 'Fechas detectadas: 15 al 18 (3 noches)' },
        { type: 'done', text: 'Huéspedes: 2 adultos' },
        { type: 'done', text: 'Consultando inventario de habitaciones' },
        { type: 'done', text: 'Habitaciones disponibles: Suite Executive y Deluxe' },
        { type: 'active', text: 'Calculando tarifas y promociones aplicables' },
        { type: 'active', text: 'Registrando oportunidad de reserva en CRM' }
      ];
      crmRecord = {
        name: 'Roberto Gómez',
        phone: '+54 9 11 6722-1144',
        interest: 'Reserva Hotel (3 Noches)',
        details: '2 Adultos • Suite / Deluxe',
        status: 'Cotización Enviada',
        nextStep: 'Confirmar categoría de habitación',
        source: 'Agente IA Hotel'
      };
      break;

    case 'ecommerce':
      responseText = 'Para diseño y edición de video te recomiendo la **ProBook Creator 15"** (Ryzen 7 / 16GB RAM / RTX 4050) por $1.420.000. Está dentro de tu presupuesto de $1.500.000 y tenemos stock con envío gratis.\n\n¿Te gustaría que te prepare la orden de compra o querés ver otra opción?';
      steps = [
        { type: 'done', text: 'Requisito detectado: Diseño y Edición de Video' },
        { type: 'done', text: 'Presupuesto máximo: $1.500.000' },
        { type: 'done', text: 'Consultando catálogo de productos y stock' },
        { type: 'done', text: 'Coincidencia óptima: ProBook Creator 15"' },
        { type: 'active', text: 'Generando cupón de envío gratis' },
        { type: 'active', text: 'Registrando cliente e intención de compra' }
      ];
      crmRecord = {
        name: 'Lucas V.',
        phone: '+54 9 11 9988-3322',
        interest: 'ProBook Creator 15"',
        details: 'Monto: $1.420.000 • Envío Gratis',
        status: 'Carrito Iniciado',
        nextStep: 'Enviar link de pago seguro',
        source: 'Agente IA E-commerce'
      };
      break;

    default: // otro
      responseText = '¡Entendido! Para empresas de 25 empleados, nuestros agentes automatizan el 80% de las consultas repetitivas e integran los datos directamente en su CRM actual.\n\n¿Querés que agendemos una demo personalizada de 20 minutos con uno de nuestros consultores B2B?';
      steps = [
        { type: 'done', text: 'Intención detectada: Automatización Comercial B2B' },
        { type: 'done', text: 'Tamaño de empresa identificado: ~25 empleados' },
        { type: 'done', text: 'Consultando agenda de consultores senior' },
        { type: 'done', text: 'Generando propuesta de valor personalizada' },
        { type: 'active', text: 'Registrando lead corporativo en CRM' },
        { type: 'active', text: 'Preparando invitación a reunión comercial' }
      ];
      crmRecord = {
        name: 'Diego Rossi (Gerente Operaciones)',
        phone: '+54 9 11 2233-4455',
        interest: 'Automatización B2B Integrada',
        details: 'Empresa 25 empleados',
        status: 'Lead B2B Calificado',
        nextStep: 'Agendar reunión comercial 20 min',
        source: 'Agente IA Corporativo'
      };
      break;
  }

  return {
    responseText,
    steps,
    crmRecord
  };
}
