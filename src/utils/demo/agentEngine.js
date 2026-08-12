// src/utils/demo/agentEngine.js
import { DEMO_INDUSTRIES } from '../../data/demo/demoIndustries.js';

export function getIndustryConfig(industryId) {
  return DEMO_INDUSTRIES.find(i => i.id === industryId) || DEMO_INDUSTRIES[0];
}

/**
 * Simulates intelligent agent processing.
 * First checks if the message matches a preset prompt — returns its specific response.
 * Falls back to keyword-based intelligent logic per industry.
 * Architecture: swap simulateAgentResponse() for a real AI API call in the future.
 */
export function simulateAgentResponse(industryId, userMessage, conversationHistory = []) {
  const industry = getIndustryConfig(industryId);

  // 1. Check if message matches a preset prompt (exact or close match)
  const inputClean = userMessage.trim().toLowerCase();
  const presetIndex = industry.presetPrompts.findIndex(p => {
    const pClean = p.trim().toLowerCase();
    return inputClean === pClean ||
           (pClean.length > 10 && inputClean.includes(pClean.substring(0, 15))) ||
           (inputClean.length > 10 && pClean.includes(inputClean.substring(0, 15)));
  });

  if (presetIndex !== -1 && industry.presetResponses && industry.presetResponses[presetIndex]) {
    const res = industry.presetResponses[presetIndex];
    return {
      responseText: res.responseText || res.text || 'Procesamiento completado con éxito.',
      steps: res.steps || [],
      crmRecord: res.crmRecord || null
    };
  }

  // 2. Greeting detection — responds warmly before routing to industry logic
  const text = userMessage.toLowerCase();

  const isGreeting = /^(hola|buenas|buen[ao]s?\s*(días|tardes|noches|dia|tarde|noche)?|hey|hi|hello|saludos|buenas!\s*|qué tal|que tal|como están|como estan|buen día|buen dia|good morning|good afternoon|good evening|cómo están|como van)[\s!¡?¿.]*$/.test(text.trim());

  if (isGreeting) {
    const greetingsByIndustry = {
      inmobiliaria: {
        responseText: '¡Hola! Bienvenido a Inmobiliaria Premier 🏠\n\nSoy tu Agente Inmobiliario Inteligente. Estoy acá para ayudarte a encontrar la propiedad ideal o asesorarte en la venta de la tuya.\n\n¿Con qué puedo ayudarte hoy?\n\n🔍 Buscar departamento, casa o PH para comprar\n🏷️ Tasar o vender tu propiedad\n🏖️ Alquileres temporarios para vacaciones\n📋 Consultar opciones de financiamiento\n\nSolo contame qué estás buscando y te muestro las mejores opciones disponibles.',
        steps: [
          { type: 'done', text: 'Saludo recibido del cliente' },
          { type: 'done', text: 'Canal de atención: Agente Inmobiliario IA' },
          { type: 'active', text: 'Registrando nuevo visitante' }
        ],
        crmRecord: null
      },
      restaurante: {
        responseText: '¡Hola! Bienvenido a Casa Norte 🍽️\n\nSoy el Agente de Atención de Casa Norte. Estoy disponible las 24hs para ayudarte con todo lo que necesités.\n\n¿En qué te puedo ayudar hoy?\n\n📅 Hacer una reserva de mesa\n🥗 Consultar el menú y opciones especiales (vegetariano, sin TACC)\n⏰ Ver horarios de atención\n📍 Información de ubicación y estacionamiento\n\n¡Es un placer recibirte en Casa Norte!',
        steps: [
          { type: 'done', text: 'Saludo recibido del cliente' },
          { type: 'done', text: 'Canal de atención: Agente de Reservas IA' },
          { type: 'active', text: 'Iniciando asistencia al cliente' }
        ],
        crmRecord: null
      },
      clinica: {
        responseText: '¡Hola! Bienvenido a Centro Salud Integral 🏥\n\nSoy el Agente de Admisión del centro. Estoy disponible para ayudarte con turnos, consultas y toda la información que necesités.\n\n¿Cómo puedo asistirte hoy?\n\n📅 Sacar turno con cualquier especialidad\n✅ Verificar cobertura de tu obra social o prepaga\n🔬 Horarios de laboratorio y diagnóstico\n🔄 Reprogramar o cancelar un turno existente\n\n¡Tu salud es nuestra prioridad! ¿Con qué empezamos?',
        steps: [
          { type: 'done', text: 'Saludo recibido del paciente' },
          { type: 'done', text: 'Canal de atención: Admisión y Agenda Médica IA' },
          { type: 'active', text: 'Iniciando atención al paciente' }
        ],
        crmRecord: null
      },
      hotel: {
        responseText: '¡Hola! Bienvenido al Hotel Central Plaza 🏨\n\nSoy tu Agente Concierge virtual, disponible las 24 horas para que tu estadía sea perfecta.\n\n¿En qué puedo ayudarte?\n\n🗓️ Verificar disponibilidad y hacer una reserva\n💰 Consultar tarifas y categorías de habitación\n🛎️ Información sobre Spa, Gimnasio y Desayuno Buffet\n🚗 Coordinar traslado al aeropuerto\n🔄 Modificar o cancelar una reserva existente\n\n¡Es un placer recibirte. Estamos para lo que necesités!',
        steps: [
          { type: 'done', text: 'Saludo recibido del huésped' },
          { type: 'done', text: 'Canal de atención: Concierge Virtual IA' },
          { type: 'active', text: 'Iniciando asistencia al huésped' }
        ],
        crmRecord: null
      },
      ecommerce: {
        responseText: '¡Hola! Bienvenido a Nova Store Tech 💻\n\nSoy tu Asistente de Compras personal. Estoy acá para ayudarte a encontrar el producto ideal al mejor precio.\n\n¿Qué estás buscando hoy?\n\n🔍 Recomendación de productos según tu uso y presupuesto\n📦 Consulta de stock disponible en tiempo real\n🚚 Información de envíos y tiempos de entrega\n💳 Opciones de financiación en cuotas sin interés\n🛡️ Garantía y soporte técnico post-venta\n\n¡Contame qué necesitás y te ayudo a elegir la mejor opción!',
        steps: [
          { type: 'done', text: 'Saludo recibido del cliente' },
          { type: 'done', text: 'Canal de atención: Asistente de Compras IA' },
          { type: 'active', text: 'Cargando catálogo y precios actualizados' }
        ],
        crmRecord: null
      },
      otro: {
        responseText: '¡Hola! Bienvenido a MM SmartInbox 🤖\n\nSoy un Agente Comercial especializado en automatización empresarial. Estoy acá para ayudarte a entender cómo la IA puede transformar tu negocio.\n\n¿Qué te gustaría explorar?\n\n💡 Conocer cómo funciona la automatización con IA\n💰 Ver planes y precios para tu empresa\n🔗 Integraciones disponibles con tus sistemas actuales\n📅 Agendar una reunión de diagnóstico gratuita\n⚡ Ver casos de éxito según tu rubro\n\n¡Contame sobre tu empresa y te muestro el potencial de automatización!',
        steps: [
          { type: 'done', text: 'Saludo recibido del prospecto' },
          { type: 'done', text: 'Canal de atención: Agente Comercial B2B IA' },
          { type: 'active', text: 'Registrando nuevo contacto comercial' }
        ],
        crmRecord: null
      }
    };

    const greetingResponse = greetingsByIndustry[industryId] || greetingsByIndustry['otro'];
    return greetingResponse;
  }

  // 3. Fallback: rich keyword-based intelligent logic per industry
  switch (industryId) {

    // ═══════════════════════════════════════════
    // INMOBILIARIA
    // ═══════════════════════════════════════════
    case 'inmobiliaria': {


      if (text.includes('planta baja')) {
        return {
          responseText: 'Perfecto, filtrando propiedades en planta baja. Tengo estas opciones disponibles:\n\n1. Depto 2 amb en planta baja — Palermo, 50 m² — USD 112.000 (con patio)\n2. Depto 2 amb PB sin escaleras — Belgrano, 47 m² — USD 116.000\n3. PH planta baja con jardín — Villa Crespo, 68 m² — USD 118.000\n\nLas tres están dentro de tu presupuesto. ¿Alguna te genera interés para coordinar una visita?',
          steps: [
            { type: 'done', text: 'Preferencia: Planta baja detectada' },
            { type: 'done', text: 'Filtrando propiedades PB en zona solicitada' },
            { type: 'done', text: '3 propiedades encontradas en planta baja' },
            { type: 'done', text: 'Verificando disponibilidad de cada unidad' },
            { type: 'active', text: 'Lead calificado: Alta intención de compra' },
            { type: 'active', text: 'Registrando preferencia en CRM' }
          ],
          crmRecord: {
            name: 'Martín González',
            phone: '+54 9 11 4589-2231',
            interest: 'Depto 2 amb planta baja (Palermo/Belgrano)',
            details: 'Presupuesto USD 120.000 • Prefiere planta baja',
            status: 'Lead Calificado',
            nextStep: 'Coordinar visita presencial',
            source: 'Agente IA Inmobiliario'
          }
        };
      }

      if (text.includes('balcón') || text.includes('balcon')) {
        return {
          responseText: 'Excelente elección. Encontré 3 propiedades con balcón en Palermo y Belgrano, todas dentro de tu presupuesto:\n\n1. Depto 2 amb con balcón corrido — Palermo Soho, 52 m² — USD 115.000\n2. Depto 2 amb con balcón — Belgrano, 48 m² — USD 118.000\n3. Depto 2 amb con terraza privada — Palermo Hollywood, 55 m² — USD 120.000\n\n¿Querés coordinar una visita a alguna de estas opciones esta semana?',
          steps: [
            { type: 'done', text: 'Preferencia: Balcón / Terraza' },
            { type: 'done', text: 'Filtrando propiedades con balcón' },
            { type: 'done', text: '3 propiedades encontradas con balcón' },
            { type: 'done', text: 'Lead calificado: Alta intención de compra' },
            { type: 'active', text: 'Registrando en CRM' },
            { type: 'active', text: 'Preparando agenda de visitas' }
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

      if (text.includes('amenities') || text.includes('pileta') || text.includes('gym') || text.includes('gimnasio') || text.includes('sum')) {
        return {
          responseText: 'Busqué propiedades con amenities completos en tu rango de precio. Encontré estas opciones:\n\n1. Depto 2 amb — Palermo Hollywood, 55 m² — USD 120.000\n   Amenities: Pileta, gimnasio, SUM y parrilla\n\n2. Depto 2 amb — Belgrano R, 52 m² — USD 119.500\n   Amenities: Pileta climatizada, sauna y área coworking\n\nAmbas son edificios premium con amenities de primer nivel. ¿Querés más detalles de alguna en particular?',
          steps: [
            { type: 'done', text: 'Preferencia: Amenities / Pileta detectada' },
            { type: 'done', text: 'Filtrando edificios con amenities completos' },
            { type: 'done', text: '2 propiedades con amenities en presupuesto' },
            { type: 'done', text: 'Verificando disponibilidad actual' },
            { type: 'active', text: 'Lead calificado — Alta intención' },
            { type: 'active', text: 'Registrando prospecto en CRM' }
          ],
          crmRecord: {
            name: 'Martín González',
            phone: '+54 9 11 4589-2231',
            interest: 'Depto 2 amb con amenities (Palermo/Belgrano)',
            details: 'Presupuesto USD 120.000 • Requiere amenities',
            status: 'Lead Calificado',
            nextStep: 'Enviar detalles y coordinar visita',
            source: 'Agente IA Inmobiliario'
          }
        };
      }

      if (text.includes('sí') || text.includes('si') || text.includes('perfecto') || text.includes('quiero') || text.includes('visita') || text.includes('ver')) {
        return {
          responseText: '¡Perfecto! Vamos a coordinar la visita. Tengo disponibilidad para esta semana en los siguientes horarios:\n\n• Martes 11:00 hs — Depto Palermo Soho (USD 115.000)\n• Miércoles 15:30 hs — Depto Belgrano (USD 118.000)\n• Jueves 10:00 hs — Depto Palermo Hollywood (USD 120.000)\n\nUn asesor te va a confirmar la visita por WhatsApp con la dirección exacta. ¿Cuál de los horarios te queda mejor?',
          steps: [
            { type: 'done', text: 'Intención: Agendar visita confirmada' },
            { type: 'done', text: 'Consultando agenda de asesores disponibles' },
            { type: 'done', text: '3 horarios disponibles esta semana' },
            { type: 'active', text: 'Registrando visita en sistema' },
            { type: 'active', text: 'Preparando confirmación por WhatsApp' }
          ],
          crmRecord: {
            name: 'Martín González',
            phone: '+54 9 11 4589-2231',
            interest: 'Visita presencial a propiedades en Palermo/Belgrano',
            details: 'Solicitud de visita • Alta intención de compra',
            status: 'Visita Agendada',
            nextStep: 'Confirmar horario por WhatsApp',
            source: 'Agente IA Inmobiliario'
          }
        };
      }

      // Default inmobiliaria
      return {
        responseText: '¡Perfecto! Puedo ayudarte a encontrar la propiedad ideal. Para afinar la búsqueda, ¿tenés alguna preferencia adicional como:\n\n• ¿Planta baja o piso alto?\n• ¿Con balcón, terraza o patio?\n• ¿Edificio con amenities (pileta, gym)?\n• ¿Estrenar o puede ser usado?\n\nCon esa información puedo filtrar las opciones más relevantes para vos.',
        steps: [
          { type: 'done', text: 'Solicitud recibida y analizada' },
          { type: 'done', text: 'Zona y presupuesto identificados' },
          { type: 'done', text: 'Propiedades compatibles encontradas' },
          { type: 'active', text: 'Evaluando filtros adicionales de búsqueda' },
          { type: 'active', text: 'Registrando prospecto en CRM' }
        ],
        crmRecord: {
          name: 'Prospecto Inmobiliario',
          phone: '+54 9 11 0000-0000',
          interest: 'Depto 2 amb en Palermo/Belgrano',
          details: 'Pendiente preferencias adicionales del cliente',
          status: 'En Calificación',
          nextStep: 'Confirmar preferencias de la propiedad',
          source: 'Agente IA Inmobiliario'
        }
      };
    }

    // ═══════════════════════════════════════════
    // RESTAURANTE
    // ═══════════════════════════════════════════
    case 'restaurante': {

      if (text.includes('sí') || text.includes('si') || text.includes('confirmo') || text.includes('perfecto') || text.includes('dale') || text.includes('confirmar')) {
        return {
          responseText: '¡Reserva confirmada! 🎉\n\nResumen de tu reserva:\n• Mesa para 4 personas — Sábado 21:00 hs\n• Salón Principal — Casa Norte\n• Código de confirmación: #CN-8842\n\nTe enviamos la confirmación por WhatsApp. Recordamos que el código de reserva es necesario para el ingreso al salón. ¡Hasta pronto!',
          steps: [
            { type: 'done', text: 'Confirmación del cliente recibida' },
            { type: 'done', text: 'Reserva #CN-8842 registrada en sistema' },
            { type: 'done', text: 'Mesa bloqueada: Salón Principal' },
            { type: 'active', text: 'Enviando confirmación por WhatsApp' },
            { type: 'active', text: 'Programando recordatorio 2hs antes' }
          ],
          crmRecord: {
            name: 'Reserva Confirmada — Sábado 21:00',
            phone: '+54 9 11 5543-8890',
            interest: 'Mesa para 4 personas • Salón Principal',
            details: 'Código #CN-8842 • WhatsApp confirmado',
            status: 'Reserva Activa',
            nextStep: 'Recordatorio automático 2hs antes',
            source: 'Agente IA Restaurante'
          }
        };
      }

      if (text.includes('terraz') || text.includes('exterior') || text.includes('afuera') || text.includes('al aire')) {
        return {
          responseText: '¡Tenemos terraza disponible! Es uno de los espacios más solicitados de Casa Norte.\n\nDetalles de la terraza:\n• Capacidad: hasta 20 personas\n• Ambiente: Al aire libre con calefacción exterior para noches frescas\n• Vista: Jardín interior iluminado\n• Disponibilidad sábado 21:00 hs: ✅ Disponible (solo 3 mesas restantes)\n\n¿Querés que reserve una mesa en la terraza para tu grupo?',
          steps: [
            { type: 'done', text: 'Preferencia: Mesa en terraza exterior' },
            { type: 'done', text: 'Verificando disponibilidad terraza' },
            { type: 'done', text: 'Terraza disponible — 3 mesas restantes' },
            { type: 'active', text: 'Preparando reserva en zona exterior' }
          ],
          crmRecord: {
            name: 'Consulta Terraza',
            phone: 'Sin datos aún',
            interest: 'Mesa en terraza exterior',
            details: 'Alta demanda — Solo 3 mesas disponibles',
            status: 'Consulta Activa',
            nextStep: 'Confirmar reserva en terraza',
            source: 'Agente IA Restaurante'
          }
        };
      }

      if (text.includes('precio') || text.includes('costo') || text.includes('cuánto') || text.includes('cuanto') || text.includes('carta') || text.includes('menú') || text.includes('menu')) {
        return {
          responseText: 'Te comparto un resumen de nuestra carta con precios actualizados:\n\nEntradas: $4.500 — $8.900\nPastas artesanales: $7.200 — $11.500\nCarnes a la parrilla: $12.000 — $18.500\nPescados y mariscos: $10.800 — $16.200\nPostres: $3.200 — $5.500\n\nMenu ejecutivo mediodía (lunes a viernes): $9.800 (entrada + principal + bebida)\n\nTodos los precios incluyen IVA. ¿Querés ver la carta completa o tenés alguna preferencia especial?',
          steps: [
            { type: 'done', text: 'Consulta: Carta y precios' },
            { type: 'done', text: 'Accediendo a carta actualizada' },
            { type: 'done', text: 'Precios y secciones del menú compilados' },
            { type: 'active', text: 'Generando resumen de carta con precios' }
          ],
          crmRecord: {
            name: 'Consulta de Menú',
            phone: 'Sin datos aún',
            interest: 'Consulta de carta y precios',
            details: 'Alta intención — Evaluando opciones antes de reservar',
            status: 'Pre-reserva Activa',
            nextStep: 'Ofrecer reserva según elección',
            source: 'Agente IA Restaurante'
          }
        };
      }

      if (text.includes('estacion') || text.includes('parking') || text.includes('estacionamiento') || text.includes('donde') || text.includes('ubicación') || text.includes('ubicacion') || text.includes('dirección') || text.includes('direccion')) {
        return {
          responseText: 'Casa Norte está ubicado en:\n📍 Av. Santa Fe 3240, Palermo, CABA\n\nEstacionamiento:\n• Playa de estacionamiento a 50 metros (convenio con tarifa preferencial para clientes)\n• Servicio de valet parking disponible de jueves a domingo desde las 20:00 hs (costo: $3.500)\n\n🚇 A 3 cuadras del subte Linea D (estación Scalabrini Ortiz)\n\n¿Necesitás algo más para tu visita del sábado?',
          steps: [
            { type: 'done', text: 'Consulta: Ubicación y estacionamiento' },
            { type: 'done', text: 'Dirección y datos de acceso verificados' },
            { type: 'done', text: 'Información de valet parking consultada' },
            { type: 'active', text: 'Generando respuesta con datos de acceso' }
          ],
          crmRecord: {
            name: 'Consulta Logística',
            phone: 'Sin datos aún',
            interest: 'Ubicación y estacionamiento',
            details: 'Planificando visita al restaurante',
            status: 'Pre-Visita',
            nextStep: 'Confirmar reserva',
            source: 'Agente IA Restaurante'
          }
        };
      }

      // Default restaurante
      return {
        responseText: 'Con gusto te ayudo. En Casa Norte ofrecemos:\n\n🍽️ Reservas de mesa para cualquier ocasión\n📋 Información de menú y carta actualizada\n🎂 Menús especiales para eventos y celebraciones\n⏰ Horarios: Lunes a Sábado 12:00–15:30 y 20:00–00:00 hs\n\n¿Querés reservar una mesa, consultar el menú o tenés alguna consulta especial?',
        steps: [
          { type: 'done', text: 'Consulta recibida y procesada' },
          { type: 'done', text: 'Contexto del cliente identificado' },
          { type: 'active', text: 'Preparando opciones de asistencia' }
        ],
        crmRecord: null
      };
    }

    // ═══════════════════════════════════════════
    // CLÍNICA
    // ═══════════════════════════════════════════
    case 'clinica': {

      if (text.includes('lunes') || text.includes('martes') || text.includes('miércoles') || text.includes('miercoles') || text.includes('jueves') || text.includes('viernes') || text.includes('semana')) {
        return {
          responseText: 'Encontré disponibilidad para los turnos que mencionás. Según tu cobertura, estas son las opciones disponibles:\n\n• Martes 10:30 hs — Consultorio 4 (primer piso)\n• Miércoles 09:00 hs — Consultorio 2 (planta baja)\n• Viernes 14:00 hs — Consultorio 4\n\nTodos los turnos tienen cobertura validada y no requieren derivación previa. ¿Cuál de los horarios te queda mejor?',
          steps: [
            { type: 'done', text: 'Solicitud de turno recibida' },
            { type: 'done', text: 'Cobertura médica validada correctamente' },
            { type: 'done', text: 'Agenda de la semana consultada' },
            { type: 'done', text: '3 turnos disponibles identificados' },
            { type: 'active', text: 'Reservando turno seleccionado en sistema' },
            { type: 'active', text: 'Registrando paciente en base de datos' }
          ],
          crmRecord: {
            name: 'Paciente en Agenda',
            phone: '+54 9 11 3321-9988',
            interest: 'Turno médico semanal',
            details: 'Cobertura validada • 3 horarios disponibles',
            status: 'Turno Pre-Reservado',
            nextStep: 'Confirmar horario y enviar recordatorio',
            source: 'Agente IA Salud'
          }
        };
      }

      if (text.includes('martes') || text.includes('dra') || text.includes('dr.') || text.includes('doctor') || text.includes('silva') || text.includes('acepto') || text.includes('me quedo') || text.includes('ese')) {
        return {
          responseText: '¡Turno confirmado! 📋\n\nResumen de tu turno:\n• Especialidad: Dermatología\n• Profesional: Dra. Elena Silva\n• Fecha y hora: Martes próximo — 10:30 hs\n• Consultorio: Nro. 4 (primer piso)\n• Obra social: OSDE 310 ✅ Validada\n\nTe enviamos la confirmación por WhatsApp con todos los datos. Recordá traer tu DNI y carnet de obra social. ¡Hasta el martes!',
          steps: [
            { type: 'done', text: 'Turno seleccionado: Martes 10:30 hs' },
            { type: 'done', text: 'Profesional: Dra. Elena Silva — Confirmada' },
            { type: 'done', text: 'OSDE 310 validada sin necesidad de derivación' },
            { type: 'done', text: 'Turno registrado en agenda del sistema' },
            { type: 'active', text: 'Enviando confirmación por WhatsApp' },
            { type: 'active', text: 'Programando recordatorio 24hs antes' }
          ],
          crmRecord: {
            name: 'Paciente Turno Dermatología',
            phone: '+54 9 11 3321-9988',
            interest: 'Turno Dermatología — Dra. Elena Silva',
            details: 'Martes 10:30 hs • OSDE 310 • Confirmado',
            status: 'Turno Confirmado',
            nextStep: 'Recordatorio automático el lunes previo',
            source: 'Agente IA Salud'
          }
        };
      }

      if (text.includes('prepaga') || text.includes('obra social') || text.includes('osde') || text.includes('swiss') || text.includes('galeno') || text.includes('medicus') || text.includes('cobertura') || text.includes('descuento')) {
        return {
          responseText: 'Trabajamos con las principales obras sociales y prepagas del país:\n\n✅ OSDE (todos los planes)\n✅ Swiss Medical (todas las categorías)\n✅ Galeno (Bronze, Silver, Gold)\n✅ Medicus (todos los planes)\n✅ IOMA (con derivación de médico de cabecera)\n✅ PAMI (con orden y firma del clínico)\n✅ Obra Social de la UOM, FATSA, SMATA y más\n\nPara verificar si tu prestación específica tiene cobertura, necesito que me indiques tu plan y la especialidad que buscás. ¿Cuál es tu cobertura?',
          steps: [
            { type: 'done', text: 'Consulta: Cobertura y obras sociales' },
            { type: 'done', text: 'Listado de prepagas convenio verificado' },
            { type: 'active', text: 'Validando cobertura según plan del paciente' }
          ],
          crmRecord: {
            name: 'Consulta de Cobertura',
            phone: 'Sin datos aún',
            interest: 'Verificación de cobertura médica',
            details: 'Pendiente indicar plan y especialidad',
            status: 'Consulta Informativa',
            nextStep: 'Validar plan específico del paciente',
            source: 'Agente IA Salud'
          }
        };
      }

      if (text.includes('pediatr') || text.includes('clínico') || text.includes('clinico') || text.includes('ginecolog') || text.includes('traumatolog') || text.includes('oftalmolog') || text.includes('neurologo') || text.includes('psicolog') || text.includes('especialidad')) {
        return {
          responseText: 'Contamos con las siguientes especialidades disponibles con turnos esta semana:\n\n👶 Pediatría — Dr. Santiago Morales (Lunes y Miércoles)\n🩺 Clínica Médica — Dr. Pablo Herrera (Martes, Jueves y Viernes)\n👩 Ginecología — Dra. Valeria Ruiz (Lunes, Martes y Jueves)\n🦴 Traumatología — Dr. Marcos Giménez (Miércoles y Viernes)\n👁️ Oftalmología — Dra. Cecilia Ríos (Martes y Jueves)\n🧠 Psicología — Lic. Andrea Torres (Todos los días)\n\n¿Qué especialidad necesitás y cuál es tu obra social para que valide la cobertura?',
          steps: [
            { type: 'done', text: 'Consulta: Especialidades disponibles' },
            { type: 'done', text: 'Agenda de esta semana consultada' },
            { type: 'done', text: '6 especialidades con turnos disponibles' },
            { type: 'active', text: 'Generando listado de profesionales activos' }
          ],
          crmRecord: {
            name: 'Consulta de Especialidades',
            phone: 'Sin datos aún',
            interest: 'Información de especialidades disponibles',
            details: 'Pendiente confirmar especialidad y cobertura',
            status: 'Pre-Turno',
            nextStep: 'Asignar turno según especialidad y obra social',
            source: 'Agente IA Salud'
          }
        };
      }

      // Default clinica
      return {
        responseText: 'Podemos ayudarte con lo que necesités en Centro Salud Integral:\n\n📅 Sacar turno con cualquier especialidad\n🏥 Verificar cobertura de tu obra social o prepaga\n🔬 Consultar horarios de laboratorio y diagnóstico por imagen\n🔄 Reprogramar o cancelar turnos existentes\n\n¿Con qué te podemos ayudar hoy?',
        steps: [
          { type: 'done', text: 'Consulta recibida y procesada' },
          { type: 'done', text: 'Agenda médica del centro consultada' },
          { type: 'active', text: 'Evaluando mejor opción para el paciente' }
        ],
        crmRecord: null
      };
    }

    // ═══════════════════════════════════════════
    // HOTEL
    // ═══════════════════════════════════════════
    case 'hotel': {

      if (text.includes('sí') || text.includes('si') || text.includes('quiero') || text.includes('reservar') || text.includes('confirmo') || text.includes('dale') || text.includes('perfecto')) {
        return {
          responseText: '¡Reserva confirmada! 🏨\n\nDetalle de tu reserva:\n• Suite Executive — Vista Panorámica\n• Check-in: 15 de este mes — 15:00 hs\n• Check-out: 18 de este mes — 11:00 hs\n• Huéspedes: 2 adultos\n• Total: USD 420 (USD 140/noche)\n• Reserva Nro.: #HCP-2241\n\nIncluye desayuno buffet, acceso al Spa y Wi-Fi premium. Te enviamos la confirmación a tu email y WhatsApp. ¡Bienvenidos al Hotel Central Plaza!',
          steps: [
            { type: 'done', text: 'Confirmación de reserva recibida' },
            { type: 'done', text: 'Suite bloqueada en el sistema de reservas' },
            { type: 'done', text: 'Pago autorizado — Monto: USD 420' },
            { type: 'done', text: 'Reserva #HCP-2241 generada exitosamente' },
            { type: 'active', text: 'Enviando confirmación por email y WhatsApp' },
            { type: 'active', text: 'Notificando equipo de recepción' }
          ],
          crmRecord: {
            name: 'Roberto Gómez',
            phone: '+54 9 11 6722-1144',
            interest: 'Suite Executive — 3 Noches',
            details: '15 al 18 • 2 adultos • #HCP-2241 • USD 420',
            status: 'Reserva Confirmada',
            nextStep: 'Preparar bienvenida personalizada',
            source: 'Agente IA Hotel'
          }
        };
      }

      if (text.includes('spa') || text.includes('piscina') || text.includes('pileta') || text.includes('gym') || text.includes('gimnasio') || text.includes('servicio') || text.includes('amenities') || text.includes('incluye')) {
        return {
          responseText: 'El Hotel Central Plaza cuenta con los siguientes servicios e instalaciones:\n\n🏊 Spa & Wellness Center (incluido en Suites):\n• Piscina climatizada interior\n• Sauna finlandesa y vapor\n• Zona de relajación con tumbonas\n• Masajes terapéuticos (cargo adicional, reserva previa)\n\n💪 Gimnasio Equipado:\n• Disponible 24/7 para huéspedes\n• Equipamiento Technogym profesional\n\n🍳 Desayuno buffet incluido:\n• Lunes a viernes: 07:00 — 10:30 hs\n• Fines de semana: 07:30 — 11:30 hs\n\n¿Querés incluir algún servicio especial en tu reserva?',
          steps: [
            { type: 'done', text: 'Consulta: Servicios e instalaciones del hotel' },
            { type: 'done', text: 'Descripción de amenities verificada' },
            { type: 'done', text: 'Disponibilidad del Spa confirmada' },
            { type: 'active', text: 'Generando detalle completo de servicios' }
          ],
          crmRecord: {
            name: 'Consulta de Servicios',
            phone: 'Sin datos aún',
            interest: 'Información de amenities y servicios incluidos',
            details: 'Interés en Spa y servicios premium',
            status: 'Consulta Activa',
            nextStep: 'Ofrecer upgrade de habitación con Spa incluido',
            source: 'Agente IA Hotel'
          }
        };
      }

      if (text.includes('precio') || text.includes('costo') || text.includes('tarifa') || text.includes('cuánto') || text.includes('cuanto') || text.includes('habitación') || text.includes('habitacion') || text.includes('room') || text.includes('suite') || text.includes('deluxe')) {
        return {
          responseText: 'Nuestras categorías de habitación y tarifas para las fechas seleccionadas:\n\n🛏️ Habitación Estándar\n• USD 85/noche • 1 o 2 personas\n• Desayuno continental + Wi-Fi\n\n🛏️ Habitación Deluxe Matrimonial\n• USD 110/noche • 2 personas\n• Desayuno buffet + Wi-Fi premium + minibar\n\n⭐ Suite Executive (Vista Panorámica)\n• USD 140/noche • hasta 2 personas\n• Desayuno buffet + Spa + Wi-Fi + late check-out\n\n⭐ Suite Presidencial\n• USD 220/noche • hasta 3 personas\n• Todo incluido + butler service\n\nTodas las tarifas incluyen impuestos. ¿Cuál categoría te interesa reservar?',
          steps: [
            { type: 'done', text: 'Consulta: Categorías y tarifas de habitaciones' },
            { type: 'done', text: 'Tarifas vigentes consultadas en sistema' },
            { type: 'done', text: 'Disponibilidad verificada para las fechas' },
            { type: 'active', text: 'Generando comparativo de categorías y precios' }
          ],
          crmRecord: {
            name: 'Consulta de Tarifas',
            phone: 'Sin datos aún',
            interest: 'Comparativo de categorías de habitación',
            details: 'Evaluando categoría antes de confirmar reserva',
            status: 'Pre-Reserva Activa',
            nextStep: 'Confirmar categoría y procesar reserva',
            source: 'Agente IA Hotel'
          }
        };
      }

      if (text.includes('cancelar') || text.includes('modificar') || text.includes('cambiar') || text.includes('reprogramar') || text.includes('posterg')) {
        return {
          responseText: 'Por supuesto, puedo ayudarte con la modificación de tu reserva. Nuestra política de cancelación y cambios:\n\n✅ Cancelación sin cargo: hasta 48 horas antes del check-in\n⚠️ Cancelación con cargo del 50%: entre 24 y 48 horas antes\n❌ Cancelación con cargo del 100%: menos de 24 horas antes\n\nPara procesar el cambio, necesito tu número de reserva o el email con el que realizaste la misma. ¿Lo tenés a mano?',
          steps: [
            { type: 'done', text: 'Acción: Modificación / Cancelación de reserva' },
            { type: 'done', text: 'Políticas de cancelación consultadas' },
            { type: 'active', text: 'Aguardando número de reserva del cliente' }
          ],
          crmRecord: {
            name: 'Gestión de Reserva',
            phone: 'Sin datos aún',
            interest: 'Cancelación o modificación de reserva',
            details: 'Pendiente número de reserva para procesar',
            status: 'Gestión en Curso',
            nextStep: 'Verificar número de reserva y procesar cambio',
            source: 'Agente IA Hotel'
          }
        };
      }

      // Default hotel
      return {
        responseText: 'Bienvenido al Hotel Central Plaza. Puedo ayudarte con:\n\n🏨 Verificar disponibilidad y realizar reservas\n💰 Consultar tarifas y categorías de habitación\n🛎️ Información de servicios: Spa, Gimnasio y Desayuno Buffet\n🚗 Coordinar traslados al aeropuerto\n🔄 Modificar o cancelar una reserva existente\n\n¿Con qué puedo asistirte hoy?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'done', text: 'Sistema hotelero conectado' },
          { type: 'active', text: 'Evaluando la solicitud del huésped' }
        ],
        crmRecord: null
      };
    }

    // ═══════════════════════════════════════════
    // E-COMMERCE
    // ═══════════════════════════════════════════
    case 'ecommerce': {

      if (text.includes('sí') || text.includes('si') || text.includes('quiero') || text.includes('comprar') || text.includes('carrito') || text.includes('link') || text.includes('pagar') || text.includes('me interesa')) {
        return {
          responseText: '¡Perfecto! Preparo el proceso de compra:\n\n🛒 ProBook Creator 15" — $1.420.000\n• Stock: Disponible para entrega inmediata ✅\n• Envío gratis a todo el país\n• Garantía oficial: 12 meses\n\n💳 Opciones de pago:\n• Hasta 12 cuotas sin interés con tarjetas Visa / Mastercard\n• Cuota aprox. con 12 cuotas: $118.333/mes\n• Transferencia bancaria (5% de descuento)\n• Mercado Pago (3 cuotas sin interés)\n\n¿Querés que te genere el link de pago seguro o preferís pagar en cuotas?',
          steps: [
            { type: 'done', text: 'Intención de compra confirmada' },
            { type: 'done', text: 'Stock del ProBook Creator verificado' },
            { type: 'done', text: 'Precio y condiciones de pago consultadas' },
            { type: 'done', text: 'Plan de cuotas sin interés generado' },
            { type: 'active', text: 'Iniciando proceso de checkout' },
            { type: 'active', text: 'Registrando venta en CRM' }
          ],
          crmRecord: {
            name: 'Lucas V.',
            phone: '+54 9 11 9988-3322',
            interest: 'ProBook Creator 15" — $1.420.000',
            details: 'Intención de compra confirmada • Proceso de pago iniciado',
            status: 'Compra en Curso',
            nextStep: 'Completar proceso de pago y despacho',
            source: 'Agente IA E-commerce'
          }
        };
      }

      if (text.includes('notebook') || text.includes('computadora') || text.includes('laptop') || text.includes('pc') || text.includes('procesador') || text.includes('ram') || text.includes('memoria')) {
        return {
          responseText: 'Encontré las mejores notebooks en stock según tu búsqueda:\n\n🏆 Mejor opción para diseño y edición:\nProBook Creator 15" — $1.420.000\n• Ryzen 7 5800H + 16GB DDR5 + RTX 4050 + 512GB SSD\n• Ideal para: Photoshop, Premiere, After Effects\n\n💪 Opción profesional avanzada:\nUltraSlim Studio 16" — $1.650.000\n• Intel i7-13th + 32GB RAM + RTX 4060 + 1TB SSD\n• Ideal para: 3D, edición 4K, rendering\n\n💼 Opción ultraliviana:\nSlimBook Air 14" — $980.000\n• Intel i5 + 8GB RAM + Iris Xe + 256GB SSD\n• Ideal para: Trabajo de oficina y productividad\n\n¿Querés más detalles de alguna de estas opciones?',
          steps: [
            { type: 'done', text: 'Búsqueda: Notebooks en stock' },
            { type: 'done', text: 'Requisitos de uso identificados' },
            { type: 'done', text: 'Catálogo filtrado por rendimiento y precio' },
            { type: 'done', text: '3 notebooks seleccionadas para el perfil del cliente' },
            { type: 'active', text: 'Generando comparativo personalizado' },
            { type: 'active', text: 'Verificando stock en tiempo real' }
          ],
          crmRecord: {
            name: 'Lucas V.',
            phone: '+54 9 11 9988-3322',
            interest: 'Búsqueda de Notebook',
            details: 'Comparativo de 3 modelos generado',
            status: 'Evaluando Opciones',
            nextStep: 'Convertir interés en venta',
            source: 'Agente IA E-commerce'
          }
        };
      }

      if (text.includes('garantía') || text.includes('garantia') || text.includes('soporte') || text.includes('servicio técnico') || text.includes('roto') || text.includes('falla') || text.includes('problema')) {
        return {
          responseText: 'En Nova Store Tech todos nuestros productos incluyen:\n\n🛡️ Garantía Oficial:\n• 12 meses de garantía de fábrica\n• Extensión de garantía disponible hasta 24 meses (+$45.000)\n\n🔧 Soporte Técnico:\n• Soporte online 24/7 por WhatsApp y chat\n• Servicio técnico en CABA y GBA (turnos con 48hs de anticipación)\n• Envío y devolución sin cargo en caso de falla de fábrica\n\n📦 Política de cambios:\n• Hasta 30 días corridos para cambios por defecto de fabricación\n• El producto debe estar sin uso visible y con su packaging original\n\n¿Necesitás iniciar una garantía o tenés un caso específico?',
          steps: [
            { type: 'done', text: 'Consulta: Garantía y soporte técnico' },
            { type: 'done', text: 'Políticas de garantía y servicio consultadas' },
            { type: 'active', text: 'Generando detalle de cobertura post-venta' }
          ],
          crmRecord: {
            name: 'Consulta Post-Venta',
            phone: 'Sin datos aún',
            interest: 'Garantía y soporte técnico',
            details: 'Evaluando política de garantía antes de comprar',
            status: 'Pre-Compra Activa',
            nextStep: 'Resolver dudas para cerrar venta',
            source: 'Agente IA E-commerce'
          }
        };
      }

      if (text.includes('envio') || text.includes('envío') || text.includes('despacho') || text.includes('demora') || text.includes('cuando llega') || text.includes('entrega') || text.includes('seguimiento') || text.includes('tracking')) {
        return {
          responseText: 'Información de envíos de Nova Store Tech:\n\n📦 Modalidades disponibles:\n• Envío Estándar (3-5 días hábiles): $4.200 | Gratis en compras +$500.000\n• Envío Express (24-48 hs hábiles): $8.500 flat\n• Envío Mismo Día: Disponible en CABA (antes de las 14:00 hs) — $12.000\n• Retiro en sucursal: Gratis (Palermo / Microcentro / Caballito)\n\n🔍 Seguimiento:\n• Todos los envíos incluyen tracking en tiempo real\n• Recibirás el número de seguimiento por WhatsApp al momento del despacho\n\n¿Para qué zona es el envío? Así te confirmo el tiempo exacto de entrega.',
          steps: [
            { type: 'done', text: 'Consulta: Opciones y tiempos de envío' },
            { type: 'done', text: 'Tarifario logístico actualizado consultado' },
            { type: 'active', text: 'Generando opciones de envío disponibles' }
          ],
          crmRecord: {
            name: 'Consulta de Envío',
            phone: 'Sin datos aún',
            interest: 'Información de envíos y tiempos de entrega',
            details: 'En proceso de decisión de compra',
            status: 'Pre-Compra Activa',
            nextStep: 'Confirmar destino y cerrar venta',
            source: 'Agente IA E-commerce'
          }
        };
      }

      // Default ecommerce
      return {
        responseText: 'Bienvenido a Nova Store Tech. Puedo ayudarte con:\n\n💻 Recomendación de productos según tu uso y presupuesto\n📦 Consulta de stock disponible en tiempo real\n🚚 Información de envíos y tiempos de entrega\n💳 Opciones de financiación en cuotas sin interés\n🛡️ Garantía y soporte técnico post-venta\n\n¿Qué estás buscando hoy?',
        steps: [
          { type: 'done', text: 'Consulta recibida' },
          { type: 'done', text: 'Catálogo de productos disponible cargado' },
          { type: 'active', text: 'Analizando necesidades del cliente' }
        ],
        crmRecord: null
      };
    }

    // ═══════════════════════════════════════════
    // OTRO / B2B
    // ═══════════════════════════════════════════
    default: {

      if (text.includes('precio') || text.includes('costo') || text.includes('tarifa') || text.includes('cuánto') || text.includes('cuanto') || text.includes('plan') || text.includes('inversión') || text.includes('inversion')) {
        return {
          responseText: 'Los planes de MM SmartInbox están diseñados según el volumen y necesidades de cada empresa:\n\n🚀 Plan Starter — $299 USD/mes\n• 1 Agente IA configurado\n• Hasta 1.000 conversaciones/mes\n• Integración con 1 canal (WhatsApp o Instagram)\n• CRM integrado básico\n\n🏢 Plan Business — $599 USD/mes\n• 3 Agentes IA simultáneos\n• Conversaciones ilimitadas\n• Multicanalidad: WhatsApp + Instagram + Web\n• CRM completo + reportes avanzados\n\n🏭 Plan Enterprise — A medida\n• Agentes ilimitados\n• Integraciones custom con ERP / CRM propio\n• Soporte dedicado y SLA garantizado\n\n¿Querés que un consultor te arme una propuesta a medida para tu empresa?',
          steps: [
            { type: 'done', text: 'Consulta: Planes y precios' },
            { type: 'done', text: 'Planes comerciales actualizados consultados' },
            { type: 'done', text: 'Tamaño de empresa identificado' },
            { type: 'active', text: 'Generando propuesta comercial' },
            { type: 'active', text: 'Registrando lead en CRM comercial' }
          ],
          crmRecord: {
            name: 'Lead Comercial',
            phone: 'Sin datos aún',
            interest: 'Consulta de precios y planes',
            details: 'Alta intención de compra — Solicitó planes',
            status: 'Oportunidad Caliente',
            nextStep: 'Presentar propuesta personalizada',
            source: 'Agente IA Corporativo'
          }
        };
      }

      if (text.includes('integra') || text.includes('whatsapp') || text.includes('instagram') || text.includes('crm') || text.includes('api') || text.includes('webhook') || text.includes('conect') || text.includes('sistema')) {
        return {
          responseText: 'La integración es uno de nuestros puntos más fuertes. MM SmartInbox se conecta con:\n\n📱 Canales de mensajería:\n• WhatsApp Business API (oficial Meta)\n• Instagram DM y comentarios\n• Messenger de Facebook\n• Webchat embebible en tu sitio web\n\n🔗 CRMs y herramientas:\n• HubSpot, Salesforce, Zoho CRM, Pipedrive\n• Notion, Monday.com, Airtable\n• Google Sheets y Google Calendar\n• Cualquier sistema con API REST o Webhook\n\n⚙️ ERPs y sistemas propios:\n• Integración vía n8n o Make\n• Webhook en tiempo real\n• Documentación técnica disponible\n\nEl tiempo de integración es de 3 a 7 días hábiles. ¿Qué sistema usás actualmente?',
          steps: [
            { type: 'done', text: 'Consulta técnica: Integraciones disponibles' },
            { type: 'done', text: 'Canales y plataformas compatibles listadas' },
            { type: 'done', text: 'Ecosistema de integraciones verificado' },
            { type: 'active', text: 'Identificando stack tecnológico del cliente' },
            { type: 'active', text: 'Registrando consulta técnica en CRM' }
          ],
          crmRecord: {
            name: 'Consulta Técnica de Integración',
            phone: 'Sin datos aún',
            interest: 'Integración con canales y CRM propio',
            details: 'Requiere identificar stack tecnológico actual',
            status: 'Consulta Técnica Activa',
            nextStep: 'Propuesta técnica de integración',
            source: 'Agente IA Corporativo'
          }
        };
      }

      if (text.includes('reunión') || text.includes('reunion') || text.includes('demo') || text.includes('llamada') || text.includes('hablar') || text.includes('contacto') || text.includes('consultor') || text.includes('asesor')) {
        return {
          responseText: 'Con gusto agendamos una reunión de diagnóstico sin costo con uno de nuestros consultores.\n\nDisponibilidad esta semana:\n📅 Martes — 10:00 hs o 14:00 hs (Google Meet)\n📅 Miércoles — 11:30 hs (Google Meet o presencial CABA)\n📅 Jueves — 15:00 hs o 17:00 hs (Google Meet)\n📅 Viernes — 09:30 hs (Google Meet)\n\nEn 30 minutos analizamos tu proceso actual, identificamos oportunidades y te presentamos un plan de automatización con ROI estimado.\n\n¿Cuál de estos horarios te viene mejor?',
          steps: [
            { type: 'done', text: 'Solicitud: Reunión comercial / demo' },
            { type: 'done', text: 'Agenda de consultores verificada' },
            { type: 'done', text: '6 horarios disponibles esta semana' },
            { type: 'active', text: 'Preparando confirmación de reunión' },
            { type: 'active', text: 'Registrando oportunidad como prioridad alta' }
          ],
          crmRecord: {
            name: 'Oportunidad — Reunión Solicitada',
            phone: 'Sin datos aún',
            interest: 'Reunión de diagnóstico comercial',
            details: 'Alta intención — Solicita reunión directa con consultor',
            status: 'Oportunidad Caliente',
            nextStep: 'Confirmar horario y enviar invitación de calendario',
            source: 'Agente IA Corporativo'
          }
        };
      }

      if (text.includes('automatizar') || text.includes('automatización') || text.includes('automatizacion') || text.includes('proceso') || text.includes('eficiencia') || text.includes('tiempo') || text.includes('escalar') || text.includes('crecimiento')) {
        return {
          responseText: 'La automatización con agentes de IA puede transformar los procesos más críticos de tu negocio:\n\n⚡ Atención al cliente 24/7:\n• Responde el 100% de consultas entrantes sin espera\n• Tiempo de respuesta: menos de 3 segundos\n\n🎯 Calificación de leads:\n• Detecta presupuesto, urgencia e intención de compra\n• Solo entrega los prospectos calificados a tu equipo\n\n📋 Seguimiento automático:\n• Nunca pierde una oportunidad sin seguimiento\n• Mensajes personalizados en el momento justo\n\n📊 Impacto medible:\n• Empresas similares a la tuya reducen el tiempo de respuesta un 94% y aumentan conversiones un 35%\n\n¿Querés ver una demo con el caso específico de tu rubro?',
          steps: [
            { type: 'done', text: 'Consulta: Automatización de procesos' },
            { type: 'done', text: 'Tipo de empresa y necesidades identificados' },
            { type: 'done', text: 'Soluciones más relevantes seleccionadas' },
            { type: 'active', text: 'Generando propuesta de automatización' },
            { type: 'active', text: 'Lead B2B calificado — Registrando en CRM' }
          ],
          crmRecord: {
            name: 'Diego Rossi (Gerente Operaciones)',
            phone: '+54 9 11 2233-4455',
            interest: 'Automatización de procesos B2B',
            details: 'Alta intención — Consulta estratégica de automatización',
            status: 'Lead B2B Calificado',
            nextStep: 'Agendar demo personalizada del producto',
            source: 'Agente IA Corporativo'
          }
        };
      }

      // Default B2B/otro
      return {
        responseText: '¡Entendido! MM SmartInbox puede automatizar prácticamente cualquier proceso de atención y ventas de tu negocio.\n\nAlgunas preguntas frecuentes que podés hacerme:\n\n💬 ¿Cuánto cuesta implementar un agente de IA?\n🔗 ¿Con qué sistemas se integra?\n📅 ¿Puedo agendar una reunión de diagnóstico?\n⚡ ¿Qué procesos puedo automatizar en mi empresa?\n\n¿Qué aspecto te interesa explorar primero?',
        steps: [
          { type: 'done', text: 'Consulta recibida y categorizada' },
          { type: 'done', text: 'Tipo de negocio identificado' },
          { type: 'active', text: 'Registrando lead corporativo en CRM' }
        ],
        crmRecord: {
          name: 'Prospecto B2B',
          phone: 'Sin datos',
          interest: 'Automatización Empresarial',
          details: 'Consulta inicial — Evaluando opciones',
          status: 'Lead Activo',
          nextStep: 'Identificar necesidad principal y ofrecer demo',
          source: 'Agente IA Corporativo'
        }
      };
    }
  }
}
