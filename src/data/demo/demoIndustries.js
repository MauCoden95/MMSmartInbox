// src/data/demo/demoIndustries.js

export const DEMO_INDUSTRIES = [
  {
    id: 'inmobiliaria',
    name: 'Inmobiliaria',
    icon: 'building',
    subtitle: 'Calificación de prospectos, búsqueda de propiedades y agenda de visitas',
    badge: 'Propiedades',
    businessName: 'Inmobiliaria Premier',
    systemRole: 'Agente Inmobiliario Inteligente',
    description: 'Analiza presupuestos, zonas, ambientes y requisitos de compradores para filtrar inmuebles y agendar visitas.',
    starterPrompt: 'Hola, estoy buscando un departamento de 2 ambientes en Palermo o Belgrano. Tengo un presupuesto de hasta USD 120.000.',
    presetPrompts: [
      'Buscando departamento 2 ambientes en Palermo/Belgrano hasta USD 120.000 con balcón',
      'Quiero vender mi propiedad en Recoleta, ¿cómo evalúan el mercado?',
      '¿Tienen casas en alquiler temporal en Zona Norte para el verano?'
    ],
    presetResponses: [
      {
        responseText: 'Encontré 3 propiedades que coinciden exactamente con tu búsqueda en Palermo y Belgrano, todas dentro de tu presupuesto de USD 120.000 y con balcón:\n\n1. Depto 2 amb con balcón corrido — Palermo Soho, 52 m² — USD 115.000\n2. Depto 2 amb luminoso — Belgrano, 48 m² — USD 118.000\n3. Depto 2 amb con amenities — Palermo Hollywood, 55 m² — USD 120.000\n\n¿Querés coordinar una visita a alguna de estas propiedades esta semana?',
        steps: [
          { type: 'done', text: 'Solicitud recibida' },
          { type: 'done', text: 'Zona detectada: Palermo / Belgrano' },
          { type: 'done', text: 'Presupuesto: hasta USD 120.000' },
          { type: 'done', text: 'Filtro: 2 ambientes con balcón' },
          { type: 'done', text: 'Consultando base de propiedades' },
          { type: 'done', text: '3 propiedades encontradas con balcón' },
          { type: 'active', text: 'Lead calificado: Alta intención de compra' },
          { type: 'active', text: 'Registrando prospecto en CRM' }
        ],
        crmRecord: {
          name: 'Martín González',
          phone: '+54 9 11 4589-2231',
          interest: 'Depto 2 amb con balcón (Palermo/Belgrano)',
          details: 'Presupuesto USD 120.000 • 3 opciones enviadas',
          status: 'Lead Calificado',
          nextStep: 'Coordinar visita presencial',
          source: 'Agente IA Inmobiliario'
        }
      },
      {
        responseText: 'Excelente decisión. Para tasar tu propiedad en Recoleta, nuestro equipo realiza un análisis completo basado en:\n\n📊 Precio por m² de operaciones cerradas en los últimos 90 días\n🏗️ Estado de conservación y antigüedad del edificio\n🏊 Amenities disponibles: pileta, sum, gym, terraza\n📍 Ubicación exacta y piso con o sin ascensor\n\nActualmente el mercado en Recoleta registra valores entre USD 2.800 y USD 4.500/m² para departamentos en buen estado. Un depto de 60 m² puede estar en el rango de USD 168.000 — USD 270.000.\n\n¿Me podés indicar la superficie aproximada y la cantidad de ambientes para darte una tasación inicial más precisa?',
        steps: [
          { type: 'done', text: 'Intención detectada: Venta de propiedad' },
          { type: 'done', text: 'Zona: Recoleta (barrio premium)' },
          { type: 'done', text: 'Consultando transacciones recientes en zona' },
          { type: 'done', text: 'Análisis de mercado: Recoleta activo' },
          { type: 'active', text: 'Generando estimación preliminar de tasación' },
          { type: 'active', text: 'Registrando vendedor potencial en CRM' }
        ],
        crmRecord: {
          name: 'Propietario Recoleta',
          phone: '+54 9 11 0000-0000',
          interest: 'Venta de propiedad en Recoleta',
          details: 'Pendiente confirmación de m² y ambientes',
          status: 'Vendedor Potencial',
          nextStep: 'Solicitar datos para tasación formal',
          source: 'Agente IA Inmobiliario'
        }
      },
      {
        responseText: 'Sí, contamos con un portafolio activo de alquileres temporarios en Zona Norte para la temporada de verano:\n\n🏡 Casa 4 amb con pileta y quincho — Nordelta, $950.000/mes\n   (Barrio cerrado, seguridad 24hs, acceso al lago)\n🏘️ Casa 3 amb en barrio cerrado — San Isidro, $680.000/mes\n   (Jardín propio, pileta comunitaria, a 10 min del tren)\n🛠️ Chalet frente al río — Tigre Delta, $590.000/mes\n   (Embarcadero propio, total privacidad, acceso en lancha)\n\nTodos los contratos son por temporada (diciembre a marzo). Incluyen expensas y servicios básicos.\n\n¿Para cuántas personas y qué fechas exactas te interesan para hacer la reserva?',
        steps: [
          { type: 'done', text: 'Tipo: Alquiler temporal' },
          { type: 'done', text: 'Zona: Norte (GBA Norte)' },
          { type: 'done', text: 'Período: Temporada de verano' },
          { type: 'done', text: 'Consultando propiedades de alquiler temporal' },
          { type: 'done', text: '3 opciones disponibles encontradas' },
          { type: 'active', text: 'Generando listado de opciones' },
          { type: 'active', text: 'Registrando prospecto en cartera de alquileres' }
        ],
        crmRecord: {
          name: 'Cliente Alquiler Temporal',
          phone: '+54 9 11 0000-0000',
          interest: 'Alquiler temporal Zona Norte',
          details: 'Temporada verano • Pendiente fechas exactas',
          status: 'Consulta Activa',
          nextStep: 'Confirmar fechas y cantidad de personas',
          source: 'Agente IA Inmobiliario'
        }
      }
    ],
    mockData: [
      { id: 1, type: 'Dept 2 Amb', zone: 'Palermo', price: 115000, balcony: true, surface: '52 m²', title: 'Dept 2 amb con balcón corrido en Palermo Soho' },
      { id: 2, type: 'Dept 2 Amb', zone: 'Belgrano', price: 118000, balcony: true, surface: '48 m²', title: 'Dept 2 amb luminoso cerca de Av. Cabildo' },
      { id: 3, type: 'Dept 2 Amb', zone: 'Palermo Hollywood', price: 120000, balcony: false, surface: '55 m²', title: 'Dept 2 amb moderno con amenities' }
    ],
    crmFieldMapping: {
      clientLabel: 'Nuevo Comprador Calificado',
      interestLabel: 'Tipo de Inmueble',
      valueLabel: 'Presupuesto Máximo'
    }
  },
  {
    id: 'restaurante',
    name: 'Restaurante',
    icon: 'utensils',
    subtitle: 'Reservas automáticas, menú interactivo y gestión de disponibilidad',
    badge: 'Gastronomía',
    businessName: 'Restaurante Casa Norte',
    systemRole: 'Agente de Reservas y Atención Gastronómica',
    description: 'Gestiona reservas según horarios, comensales y zonas de mesas, confirmando directamente en la agenda.',
    starterPrompt: 'Hola, quiero reservar para el sábado a las 21:00 para 4 personas.',
    presetPrompts: [
      'Reserva para el sábado a las 21:00 para 4 personas a nombre de Martín',
      '¿Tienen opciones vegetarianas y sin gluten en la carta de noche?',
      '¿Cuál es el horario de atención de los domingos al mediodía?'
    ],
    presetResponses: [
      {
        text: 'Reserva confirmada, Martín. Mesa para 4 personas el Sábado a las 21:00 hs en el Salón Principal de Casa Norte.\n\nCódigo de reserva: #CN-8842\nTe enviamos la confirmación por WhatsApp y tenés un recordatorio automático 2 horas antes.\n\n¿Necesitás algo especial para la ocasión? Podemos preparar menú especial o decoración.',
        steps: [
          { type: 'done', text: 'Nombre detectado: Martín' },
          { type: 'done', text: 'Fecha: Sábado | Hora: 21:00 hs' },
          { type: 'done', text: 'Comensales: 4 personas' },
          { type: 'done', text: 'Verificando disponibilidad en Salón Principal' },
          { type: 'done', text: 'Mesa disponible confirmada' },
          { type: 'done', text: 'Reserva #CN-8842 registrada' },
          { type: 'active', text: 'Registrando cliente en CRM Restaurante' },
          { type: 'active', text: 'Programando recordatorio automático 2hs antes' }
        ],
        crmRecord: {
          name: 'Martín (Cliente)',
          phone: '+54 9 11 5543-8890',
          interest: 'Reserva 4 comensales • Sábado 21:00',
          details: 'Salón Principal • Código #CN-8842',
          status: 'Reserva Confirmada',
          nextStep: 'Recordatorio automático 2hs antes',
          source: 'Agente IA Restaurante'
        }
      },
      {
        responseText: 'Por supuesto. En Casa Norte tenemos opciones pensadas para cada necesidad dietaria:\n\n🌿 Menú Vegetariano:\n• Risotto de hongos silvestres con parmesano y trufa\n• Ravioles de ricotta y espinaca con salsa de tomates asados\n• Ensalada de quinoa, vegetales grillados y aderezo de limón\n• Milanesa de berenjena con puré rústico\n\n🌾 Sin TACC (certificado gluten free):\n• Brochette de pollo con papas al romero\n• Bife de chorizo 300g con ensalada caesar y papas fritas\n• Tabla de quesos y fiambres de primera selección\n• Volcán de chocolate (postre SIN TACC)\n\nTodos nuestros platos se elaboran con ingredientes frescos del día. Si tenés alguna alergia adicional, avisános al reservar para coordinar con cocina. ¿Reservamos para cuándo?',
        steps: [
          { type: 'done', text: 'Consulta: Opciones dietarias especiales' },
          { type: 'done', text: 'Categorías: Vegetariano + Sin TACC' },
          { type: 'done', text: 'Consultando menú de carta de noche' },
          { type: 'done', text: '6 opciones compatibles encontradas' },
          { type: 'active', text: 'Generando respuesta con opciones disponibles' }
        ],
        crmRecord: {
          name: 'Consulta Menú Especial',
          phone: 'Sin datos aún',
          interest: 'Menú Vegetariano / Sin TACC',
          details: 'Necesidades dietarias identificadas',
          status: 'Consulta Activa',
          nextStep: 'Ofrecer reserva con menú especial',
          source: 'Agente IA Restaurante'
        }
      },
      {
        responseText: 'Casa Norte atiende los domingos con el siguiente esquema:\n\n🍳 Brunch Especial de Domingo: 11:30 a 14:00 hs\n   (Buffet de entrada + plato principal + postre + bebida: $12.500/persona)\n\n🍽️ Almuerzo tradicional: 12:00 a 15:30 hs\n   (Carta completa con todos los platos del menú de mediodía)\n\n☕ Merienda y café: 16:00 a 18:30 hs\n   (Pastería artesanal, tortas y sandwiches especiales)\n\n⚠️ Los domingos suelen estar completos con 3-4 días de anticipación, especialmente el brunch. ¿Querés hacer una reserva para el próximo domingo?',
        steps: [
          { type: 'done', text: 'Consulta: Horarios de atención' },
          { type: 'done', text: 'Día consultado: Domingo' },
          { type: 'done', text: 'Período: Mediodía' },
          { type: 'done', text: 'Consultando agenda y horarios configurados' },
          { type: 'active', text: 'Generando respuesta con horarios completos' }
        ],
        crmRecord: {
          name: 'Consulta Horarios',
          phone: 'Sin datos aún',
          interest: 'Atención domingos al mediodía',
          details: 'Posible reserva de brunch dominical',
          status: 'Consulta Informativa',
          nextStep: 'Ofrecer reserva brunch dominical',
          source: 'Agente IA Restaurante'
        }
      }
    ],
    mockData: [
      { date: 'Sábado', time: '21:00', guests: 4, area: 'Salón Principal', status: 'Disponible' },
      { date: 'Sábado', time: '21:30', guests: 2, area: 'Terraza', status: 'Disponible' }
    ],
    crmFieldMapping: {
      clientLabel: 'Reserva Confirmada',
      interestLabel: 'Comensales & Horario',
      valueLabel: 'Zona Reservada'
    }
  },
  {
    id: 'clinica',
    name: 'Clínica',
    icon: 'hospital',
    subtitle: 'Agendamiento de turnos médicos, requisitos de obras sociales y recordatorios',
    badge: 'Salud',
    businessName: 'Centro Salud Integral',
    systemRole: 'Agente de Admisión y Agenda Médica',
    description: 'Consulta cartilla de profesionales, valida prepagas, sugiere horarios disponibles y envía confirmaciones.',
    starterPrompt: 'Hola, necesito agendar un turno con un dermatólogo para la semana que viene. Atiendo por OSDE.',
    presetPrompts: [
      'Turno con Dermatología para la semana que viene con OSDE 310',
      '¿Cuáles son los horarios de laboratorio para análisis de sangre sin turno?',
      'Necesito cancelar o reprogramar mi turno de Cardiología del jueves'
    ],
    presetResponses: [
      {
        text: 'Encontré disponibilidad en Dermatología para la semana que viene con cobertura OSDE 310:\n\n1. Dra. Elena Silva — Martes 10:30 hs\n2. Dr. Roberto Paz — Jueves 15:00 hs\n\nAmbos profesionales tienen cobertura OSDE 310 sin necesidad de derivación. ¿Cuál de los dos turnos te conviene más?',
        steps: [
          { type: 'done', text: 'Especialidad: Dermatología' },
          { type: 'done', text: 'Cobertura validada: OSDE 310' },
          { type: 'done', text: 'Consultando agenda de profesionales' },
          { type: 'done', text: '2 turnos disponibles la semana próxima' },
          { type: 'active', text: 'Registrando paciente en sistema' },
          { type: 'active', text: 'Esperando selección de turno' }
        ],
        crmRecord: {
          name: 'Carolina M.',
          phone: '+54 9 11 3321-9988',
          interest: 'Turno Dermatología',
          details: 'Cobertura OSDE 310 • 2 opciones disponibles',
          status: 'Turno Pre-Reservado',
          nextStep: 'Confirmar horario seleccionado',
          source: 'Agente IA Salud'
        }
      },
      {
        responseText: 'El Laboratorio de Centro Salud Integral atiende extracciones de sangre sin turno en los siguientes horarios:\n\n🔬 Sin turno previo (ayunas):\n• Lunes a Viernes: 07:00 a 10:00 hs\n• Sábados: 07:30 a 09:30 hs\n\n📋 Con turno previo obligatorio:\n• Análisis hormonales (cortisol, tiroides, prolactina)\n• Cultivos de orina o esputo\n• Curva de glucemia\n• Análisis de 24 horas\n\n⚠️ Importante: En ayunas significa al menos 8 horas sin comer ni tomar nada (solo agua). Podés venir directamente con la orden médica.\n\n¿Necesitás saber si tu análisis específico requiere turno o ayuno especial?',
        steps: [
          { type: 'done', text: 'Consulta: Horarios de laboratorio clínico' },
          { type: 'done', text: 'Tipo: Extracciones sin turno previo' },
          { type: 'done', text: 'Agenda del laboratorio consultada' },
          { type: 'done', text: 'Requisitos de ayuno y turno verificados' },
          { type: 'active', text: 'Generando información completa de laboratorio' }
        ],
        crmRecord: {
          name: 'Consulta Laboratorio',
          phone: 'Sin datos aún',
          interest: 'Extracción de sangre y análisis clínicos',
          details: 'Consulta informativa de horarios y requisitos',
          status: 'Consulta Informativa',
          nextStep: 'Verificar tipo de análisis y necesidad de turno',
          source: 'Agente IA Salud'
        }
      },
      {
        responseText: 'Claro, puedo gestionar la reprogramación de tu turno de Cardiología del jueves ahora mismo.\n\nTurnos disponibles con el mismo equipo médico:\n\n📅 Lunes próximo — 09:00 hs | Dr. Marcelo Torres (Consultorio 7)\n📅 Miércoles próximo — 14:30 hs | Dr. Marcelo Torres (Consultorio 7)\n📅 Viernes próximo — 11:00 hs | Dra. Patricia Vega (Consultorio 9)\n\nEl turno del jueves queda cancelado automáticamente al confirmar el nuevo. Recibirás la confirmación por WhatsApp con los datos y un recordatorio 24hs antes.\n\n¿Cuál de estos horarios te queda mejor?',
        steps: [
          { type: 'done', text: 'Acción: Reprogramar turno de Cardiología' },
          { type: 'done', text: 'Turno actual del jueves identificado en sistema' },
          { type: 'done', text: 'Agenda de Cardiología consultada' },
          { type: 'done', text: '3 opciones de reprogramación disponibles' },
          { type: 'active', text: 'Cancelando turno del jueves en sistema' },
          { type: 'active', text: 'Esperando confirmación del nuevo horario' }
        ],
        crmRecord: {
          name: 'Paciente — Reprogramación Cardiología',
          phone: '+54 9 11 0000-0000',
          interest: 'Reprogramar turno de Cardiología',
          details: 'Turno jueves cancelado • Nuevo turno pendiente de confirmación',
          status: 'Reprogramación en Curso',
          nextStep: 'Confirmar nuevo horario y enviar recordatorio',
          source: 'Agente IA Salud'
        }
      }
    ],
    mockData: [
      { doctor: 'Dra. Elena Silva', specialty: 'Dermatología', date: 'Martes 10:30 hs', coverage: 'OSDE, Swiss Medical' },
      { doctor: 'Dr. Roberto Paz', specialty: 'Dermatología', date: 'Jueves 15:00 hs', coverage: 'OSDE, Galeno' }
    ],
    crmFieldMapping: {
      clientLabel: 'Paciente con Turno Agendado',
      interestLabel: 'Especialidad & Médico',
      valueLabel: 'Cobertura / Prepaga'
    }
  },
  {
    id: 'hotel',
    name: 'Hotel',
    icon: 'bed',
    subtitle: 'Consultas de tarifas, reserva de habitaciones y concierge virtual',
    badge: 'Hospitalidad',
    businessName: 'Hotel Central Plaza',
    systemRole: 'Agente Concierge y Reservas Hoteleras',
    description: 'Informa fechas disponibles, categorías de habitación, políticas de check-in y registra reservas.',
    starterPrompt: 'Hola, quisiera consultar disponibilidad para 2 adultos por 3 noches del 15 al 18 de este mes.',
    presetPrompts: [
      'Reserva para 2 adultos del 15 al 18 en Habitación Suite con vista a la ciudad',
      '¿Qué servicios incluye el desayuno buffet y a qué hora empieza?',
      '¿Cuentan con estacionamiento privado y traslado al aeropuerto?'
    ],
    presetResponses: [
      {
        text: 'Reserva confirmada. Suite Executive para 2 adultos del 15 al 18 con vista a la ciudad.\n\nDetalle de la reserva:\n• Habitación: Suite Executive — Vista Panorámica\n• Noches: 3 (15, 16 y 17)\n• Total: USD 420 (USD 140/noche)\n• Incluye: Desayuno buffet, acceso al Spa y Wi-Fi premium\n• Check-in: 15:00 hs | Check-out: 11:00 hs\n\n¿Necesitás traslado desde el aeropuerto el día 15?',
        steps: [
          { type: 'done', text: 'Fechas: 15 al 18 (3 noches)' },
          { type: 'done', text: 'Huéspedes: 2 adultos' },
          { type: 'done', text: 'Categoría: Suite Executive' },
          { type: 'done', text: 'Verificando disponibilidad en sistema' },
          { type: 'done', text: 'Suite disponible — Reserva confirmada' },
          { type: 'active', text: 'Registrando huésped en CRM Hotel' },
          { type: 'active', text: 'Enviando confirmación de reserva' }
        ],
        crmRecord: {
          name: 'Roberto Gómez',
          phone: '+54 9 11 6722-1144',
          interest: 'Suite Executive (3 Noches)',
          details: '15 al 18 • 2 adultos • USD 420 total',
          status: 'Reserva Confirmada',
          nextStep: 'Consultar si requiere traslado aeropuerto',
          source: 'Agente IA Hotel'
        }
      },
      {
        responseText: 'Nuestro desayuno buffet es uno de los más completos de la zona. Incluye:\n\n🥐 Estación de Panificados:\nMedialunas, facturas variadas, pan artesanal de masa madre, tostadas y brioches\n\n🍓 Estación Fría:\nYogures griegos, frutas frescas de estación, granola, cereales y jugos naturales\n\n🍳 Estación Caliente:\nHuevos revueltos, omelette personalizado, panceta ahumada, salchichas y queso fundido\n\n☕ Bebidas:\nCafé de especialidad, té de hierbas, leche entera/descremada y jugo de naranja recién exprimido\n\n⏰ Horarios:\n• Lunes a Viernes: 07:00 — 10:30 hs\n• Sábados y Domingos: 07:30 — 11:30 hs\n\nLas opciones sin TACC y veganas se preparan con aviso previo (incluidas sin cargo extra en Suites). ¿Necesitás alguna adaptación?',
        steps: [
          { type: 'done', text: 'Consulta: Desayuno buffet incluido' },
          { type: 'done', text: 'Detalle del menú de desayuno consultado' },
          { type: 'done', text: 'Horarios y opciones especiales verificadas' },
          { type: 'active', text: 'Generando descripción completa del buffet' }
        ],
        crmRecord: {
          name: 'Consulta Desayuno Buffet',
          phone: 'Sin datos aún',
          interest: 'Información del desayuno incluido',
          details: 'Evaluando servicios antes de reservar',
          status: 'Pre-Reserva Activa',
          nextStep: 'Ofrecer reserva con servicio de desayuno incluido',
          source: 'Agente IA Hotel'
        }
      },
      {
        responseText: 'Sí, el Hotel Central Plaza cuenta con ambos servicios disponibles para todos los huéspedes:\n\n🚗 Estacionamiento Privado:\n• Disponible 24 horas, cubierto y con cámaras de seguridad HD\n• Tarifa: USD 15/día para habitaciones estándar y deluxe\n• Incluido sin cargo en Suite Executive y Presidencial\n• Capacidad limitada — Recomendamos reservarlo junto con la habitación\n\n✈️ Transfer al Aeropuerto:\nServicio de traslado privado disponible a cualquier hora del día o la noche:\n• Ezeiza (EZE): USD 48 por vehículo (hasta 4 pasajeros)\n• Aeroparque Jorge Newbery (AEP): USD 28 por vehículo\n• Opción van para grupos de 5 a 8 personas: USD 70\n\nLos traslados se coordinan con 12hs de anticipación. ¿Querés agregar alguno de estos servicios a tu reserva?',
        steps: [
          { type: 'done', text: 'Consulta: Estacionamiento y transfer' },
          { type: 'done', text: 'Tarifas de estacionamiento verificadas' },
          { type: 'done', text: 'Tarifas de transfer al aeropuerto consultadas' },
          { type: 'done', text: 'Disponibilidad de ambos servicios confirmada' },
          { type: 'active', text: 'Generando cotización de servicios adicionales' }
        ],
        crmRecord: {
          name: 'Consulta Servicios Adicionales',
          phone: 'Sin datos aún',
          interest: 'Estacionamiento + Transfer aeropuerto',
          details: 'Interés en agregar servicios a su estadía',
          status: 'Consulta Activa',
          nextStep: 'Agregar servicios y cerrar reserva',
          source: 'Agente IA Hotel'
        }
      }
    ],
    mockData: [
      { room: 'Suite Executive', capacity: '2 Personas', price: 'USD 140 / noche', amenities: 'Desayuno + Spa + Vista' },
      { room: 'Deluxe Matrimonial', capacity: '2 Personas', price: 'USD 110 / noche', amenities: 'Desayuno + Wi-Fi' }
    ],
    crmFieldMapping: {
      clientLabel: 'Reserva de Huésped Registrada',
      interestLabel: 'Categoría de Habitación',
      valueLabel: 'Total de la Estancia'
    }
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: 'shopping-cart',
    subtitle: 'Recomendación de productos, consulta de stock, envíos y seguimiento',
    badge: 'Retail Online',
    businessName: 'Nova Store Tech',
    systemRole: 'Asistente de Compras Online y Soporte',
    description: 'Guía la búsqueda de productos según necesidades del cliente, verifica stock e inicia el checkout.',
    starterPrompt: 'Hola, busco una notebook para trabajo de diseño gráfico y edición de video con presupuesto de $1.500.000.',
    presetPrompts: [
      'Notebook para diseño gráfico y edición hasta $1.500.000 con 16GB RAM',
      '¿Cuál es el tiempo de envío express a Córdoba Capital?',
      '¿Qué medios de pago en cuotas sin interés tienen disponibles?'
    ],
    presetResponses: [
      {
        text: 'Para diseño gráfico y edición de video con 16GB RAM y hasta $1.500.000, te recomiendo:\n\nOpción ideal: ProBook Creator 15" — $1.420.000\n• Procesador: Ryzen 7 5800H\n• RAM: 16GB DDR5\n• GPU: RTX 4050 (ideal para After Effects, Premiere y Photoshop)\n• Almacenamiento: 512GB SSD NVMe\n• Pantalla: 15" IPS 144Hz\n\nEnvío gratis y en stock disponible. ¿Querés que te prepare el link de compra?',
        steps: [
          { type: 'done', text: 'Uso detectado: Diseño + Edición de video' },
          { type: 'done', text: 'RAM mínima: 16GB' },
          { type: 'done', text: 'Presupuesto: hasta $1.500.000' },
          { type: 'done', text: 'Consultando catálogo de notebooks' },
          { type: 'done', text: 'Stock verificado: ProBook Creator disponible' },
          { type: 'active', text: 'Generando recomendación personalizada' },
          { type: 'active', text: 'Registrando cliente en carrito' }
        ],
        crmRecord: {
          name: 'Lucas V.',
          phone: '+54 9 11 9988-3322',
          interest: 'ProBook Creator 15" — $1.420.000',
          details: '16GB RAM / Diseño y Edición / Stock disponible',
          status: 'Carrito Iniciado',
          nextStep: 'Enviar link de pago',
          source: 'Agente IA E-commerce'
        }
      },
      {
        responseText: 'Las opciones de envío a Córdoba Capital para tu pedido son las siguientes:\n\n⚡ Envío Express (24-48 hs hábiles)\n   Costo: $8.500 flat | Tracking en tiempo real | Seguro incluido\n\n📦 Envío Estándar (3-5 días hábiles)\n   Costo: $4.200 flat | GRATIS en compras superiores a $500.000\n\n🏠 Retiro en sucursal de correo\n   Gratis (5-7 días hábiles)\n\n✅ Todos los envíos incluyen:\n• Número de seguimiento activado al momento del despacho\n• Seguro de rotura y pérdida sin cargo\n• Notificaciones por WhatsApp en cada etapa del envío\n\nPara el ProBook Creator 15" ($1.420.000) el envío estándar sería GRATIS. ¿Querés continuar con la compra?',
        steps: [
          { type: 'done', text: 'Consulta: Envío a Córdoba Capital' },
          { type: 'done', text: 'Tarifario logístico actualizado consultado' },
          { type: 'done', text: 'Producto califica para envío estándar gratuito' },
          { type: 'active', text: 'Generando opciones de envío disponibles' }
        ],
        crmRecord: {
          name: 'Lucas V. — Consulta de Envío',
          phone: '+54 9 11 9988-3322',
          interest: 'Envío del ProBook Creator a Córdoba Capital',
          details: 'Califica para envío gratis — Alta intención de compra',
          status: 'Pre-Compra Activa',
          nextStep: 'Procesar compra con envío gratuito',
          source: 'Agente IA E-commerce'
        }
      },
      {
        responseText: 'En Nova Store Tech tenemos las mejores condiciones de financiación del mercado:\n\n💳 Tarjetas Visa y Mastercard (todos los bancos):\n• 3 cuotas sin interés: Desde $50.000\n• 6 cuotas sin interés: Desde $200.000\n• 12 cuotas sin interés: Desde $500.000 ⭐ Promo vigente hasta fin de mes\n\n💡 Ejemplo para el ProBook Creator 15" ($1.420.000):\n→ 12 cuotas sin interés: $118.333/mes\n→ 6 cuotas sin interés: $236.667/mes\n→ 3 cuotas sin interés: $473.333/mes\n\n💰 Otros medios de pago:\n• Transferencia bancaria: 5% de descuento adicional ($1.349.000)\n• Mercado Pago: 3 cuotas sin interés\n• MODO y Débito inmediato\n\n¿Querés que te prepare el link de pago con la modalidad que más te conviene?',
        steps: [
          { type: 'done', text: 'Consulta: Financiación y cuotas sin interés' },
          { type: 'done', text: 'Plan de cuotas vigente consultado' },
          { type: 'done', text: 'Promociones de 12 cuotas activas confirmadas' },
          { type: 'done', text: 'Cálculo de cuotas para el producto de interés' },
          { type: 'active', text: 'Generando simulación de cuotas personalizada' }
        ],
        crmRecord: {
          name: 'Consulta de Financiación',
          phone: 'Sin datos aún',
          interest: 'Cuotas sin interés — Alta intención de compra',
          details: 'Evaluando plan de 12 cuotas para el ProBook Creator',
          status: 'Prospecto Calificado',
          nextStep: 'Enviar link de pago en cuotas',
          source: 'Agente IA E-commerce'
        }
      }
    ],
    mockData: [
      { name: 'ProBook Creator 15"', specs: 'Ryzen 7 / 16GB RAM / RTX 4050 / 512GB SSD', price: '$1.420.000', stock: 'En stock' },
      { name: 'UltraSlim Studio 16"', specs: 'Intel i7 / 32GB RAM / RTX 4060 / 1TB SSD', price: '$1.650.000', stock: 'En stock' }
    ],
    crmFieldMapping: {
      clientLabel: 'Carrito / Pedido Iniciado',
      interestLabel: 'Producto Sugerido',
      valueLabel: 'Monto Estimado'
    }
  },
  {
    id: 'otro',
    name: 'Otro negocio',
    icon: 'briefcase',
    subtitle: 'Automatización a medida para servicios profesionales, B2B y educación',
    badge: 'Empresarial',
    businessName: 'Soluciones B2B Corp',
    systemRole: 'Agente Comercial y Calificador B2B',
    description: 'Automatiza la prospección, responde dudas operativas y coordina demostraciones comerciales.',
    starterPrompt: 'Hola, me gustaría información sobre sus servicios de automatización de procesos para una PyME de 25 empleados.',
    presetPrompts: [
      'Información sobre automatización comercial para empresa de 25 empleados',
      '¿Cómo se integran los agentes de IA con nuestro sistema CRM actual?',
      'Quiero solicitar una reunión comercial de 30 minutos con un consultor'
    ],
    presetResponses: [
      {
        text: 'Para una empresa de 25 empleados, nuestras soluciones de automatización comercial más utilizadas son:\n\n1. Agente de atención inicial: Responde el 100% de las consultas entrantes por WhatsApp e Instagram sin intervención humana.\n2. Calificador de leads: Recopila datos, detecta presupuesto e intención y entrega solo los prospectos calificados a tu equipo.\n3. Seguimiento automático: Detecta oportunidades sin seguimiento y envía mensajes en momentos estratégicos.\n\nImplementación promedio: 2-3 semanas. ¿Querés que agendemos una reunión para analizar tu proceso específico?',
        steps: [
          { type: 'done', text: 'Empresa: PyME de 25 empleados' },
          { type: 'done', text: 'Tipo: Automatización comercial' },
          { type: 'done', text: 'Consultando soluciones aplicables al tamaño' },
          { type: 'done', text: '3 soluciones relevantes identificadas' },
          { type: 'active', text: 'Registrando lead corporativo en CRM' },
          { type: 'active', text: 'Preparando propuesta comercial' }
        ],
        crmRecord: {
          name: 'Diego Rossi (Gerente Operaciones)',
          phone: '+54 9 11 2233-4455',
          interest: 'Automatización Comercial B2B',
          details: 'PyME 25 empleados • Alta intención',
          status: 'Lead B2B Calificado',
          nextStep: 'Agendar reunión de diagnóstico',
          source: 'Agente IA Corporativo'
        }
      },
      {
        responseText: 'La integración con tu stack tecnológico actual es uno de nuestros puntos más fuertes y diferenciadores.\n\n🔗 Integraciones nativas (plug & play):\n• HubSpot, Salesforce, Zoho CRM, Pipedrive\n• Monday.com, Notion, Airtable\n• Google Sheets, Google Calendar y Gmail\n\n⚙️ Integración vía API REST:\n• Cualquier CRM o ERP con API disponible\n• Documentación técnica incluida + soporte de integración\n• Sincronización bidireccional en tiempo real\n\n🔄 Integración vía n8n / Make / Webhook:\n• Para sistemas internos o desarrollos a medida\n• Sin necesidad de código adicional por parte del cliente\n\nTiempo de integración: 3 a 7 días hábiles según complejidad.\n\n¿Qué CRM o ERP usás actualmente? Te preparamos la propuesta técnica específica para tu plataforma.',
        steps: [
          { type: 'done', text: 'Consulta técnica: Integración con sistemas' },
          { type: 'done', text: 'Plataformas compatibles verificadas' },
          { type: 'done', text: 'Modalidades de integración disponibles analizadas' },
          { type: 'active', text: 'Generando propuesta técnica personalizada' },
          { type: 'active', text: 'Registrando consulta técnica como prioridad' }
        ],
        crmRecord: {
          name: 'Consulta Técnica de Integración',
          phone: 'Sin datos aún',
          interest: 'Integración del Agente IA con CRM/ERP propio',
          details: 'Pendiente identificar stack tecnológico actual',
          status: 'Consulta Técnica Activa',
          nextStep: 'Preparar propuesta de integración según CRM actual',
          source: 'Agente IA Corporativo'
        }
      },
      {
        responseText: 'Con gusto. Agendo una reunión de diagnóstico de 30 minutos con uno de nuestros consultores senior, sin costo y sin compromiso.\n\n📅 Disponibilidad esta semana:\n• Martes — 10:00 hs o 14:00 hs (Google Meet)\n• Miércoles — 11:30 hs (Google Meet o presencial CABA)\n• Jueves — 15:00 hs o 17:00 hs (Google Meet)\n• Viernes — 09:30 hs (Google Meet)\n\nEn esa reunión vamos a:\n✅ Analizar tu proceso de atención y ventas actual\n✅ Identificar los cuellos de botella y oportunidades de automatización\n✅ Presentar un plan de implementación con ROI estimado\n✅ Responder todas tus preguntas técnicas y comerciales\n\n¿Cuál de estos horarios te viene mejor?',
        steps: [
          { type: 'done', text: 'Solicitud: Reunión comercial de diagnóstico' },
          { type: 'done', text: 'Consultores senior disponibles esta semana' },
          { type: 'done', text: '6 horarios disponibles identificados' },
          { type: 'active', text: 'Registrando oportunidad como prioridad ALTA' },
          { type: 'active', text: 'Preparando confirmación y link de reunión' }
        ],
        crmRecord: {
          name: 'Oportunidad — Reunión Comercial Solicitada',
          phone: 'Sin datos aún',
          interest: 'Reunión de diagnóstico 30 min con consultor senior',
          details: 'Máxima intención — Solicitó reunión directa con equipo',
          status: 'Oportunidad Caliente 🔥',
          nextStep: 'Confirmar horario y enviar invitación de Google Calendar',
          source: 'Agente IA Corporativo'
        }
      }
    ],
    mockData: [
      { service: 'Auditoría de Procesos', description: 'Diagnóstico de flujos de trabajo y automatización', duration: '1 Semana' },
      { service: 'Implementación Agente IA', description: 'Despliegue de agente conectado a CRM y WhatsApp', duration: '2 Semanas' }
    ],
    crmFieldMapping: {
      clientLabel: 'Oportunidad B2B Detectada',
      interestLabel: 'Servicio Solicitado',
      valueLabel: 'Tamaño de Empresa'
    }
  },
  {
    id: 'jugueteria',
    name: 'Juguetería',
    icon: 'gift',
    subtitle: 'Asesoramiento por edad, regalos, stock en tienda y envíos express',
    badge: 'Juguetes & Niños',
    businessName: 'Mundo Juguete',
    systemRole: 'Agente de Ventas y Recomendación de Juguetes',
    description: 'Filtra opciones por edad, tipo de juego y presupuesto, consulta stock e inicie envío para regalo.',
    starterPrompt: 'Hola, busco un regalo de cumpleaños para un nene de 6 años. Le gustan los juegos de mesa o de construcción, presupuesto hasta $35.000.',
    presetPrompts: [
      'Juego de mesa o construcción para nene de 6 años hasta $35.000',
      '¿Tienen stock de autos a control remoto o pistas de carreras?',
      '¿Hacen envíos para regalo con tarjeta dedicatoria en el día?'
    ],
    presetResponses: [
      {
        responseText: '¡Excelente opción! Para nenes de 6 años con preferencia en construcción y juegos de mesa, te recomiendo:\n\n1. Set Bloques de Construcción 350 piezas — $28.500 (Estimula creatividad y motricidad)\n2. Juego de Mesa "Carrera de Aventuras" — $32.000 (Ideal para jugar en familia, 2 a 4 jugadores)\n3. Kit de Construcción Magnética 48 piezas — $34.900 (Top ventas, encastre magnético fácil)\n\nTodos incluyen envoltorio de regalo gratis. ¿Te gustaría reservar alguno o que agreguemos tarjeta con dedicatoria?',
        steps: [
          { type: 'done', text: 'Edad objetivo: 6 años (Nene)' },
          { type: 'done', text: 'Categorías: Construcción y Juegos de mesa' },
          { type: 'done', text: 'Presupuesto: hasta $35.000' },
          { type: 'done', text: 'Consultando catálogo de juguetes por edad' },
          { type: 'done', text: '3 opciones con stock inmediato encontradas' },
          { type: 'active', text: 'Ofreciendo envoltorio de regalo sin cargo' },
          { type: 'active', text: 'Registrando cliente en CRM Juguetería' }
        ],
        crmRecord: {
          name: 'Cliente Consulta Regalo',
          phone: '+54 9 11 8877-4411',
          interest: 'Regalo Niño 6 años (Construcción/Mesa)',
          details: 'Presupuesto $35.000 • 3 opciones recomendadas',
          status: 'Prospecto Calificado',
          nextStep: 'Confirmar producto y dedicatoria de regalo',
          source: 'Agente IA Juguetería'
        }
      },
      {
        responseText: 'Sí, contamos con stock disponible de autos a control remoto y pistas de carreras en tienda:\n\n🏎️ Auto R/C Monster Truck 4x4 — $42.000 (Batería recargable USB, 20km/h max)\n🏎️ Auto Buggy Alta Velocidad R/C — $31.500 (Escala 1:18, incluye pilas)\n🛣️ Pista de Carreras Doble Loop con 2 autos — $38.900 (3.5 metros de recorrido)\n\nTodos los productos tienen garantía directa de 3 meses. ¿Querés reservarlo para retiro en sucursal o envío a domicilio?',
        steps: [
          { type: 'done', text: 'Consulta: Autos R/C y Pistas de carreras' },
          { type: 'done', text: 'Verificando stock en depósito central' },
          { type: 'done', text: '3 modelos destacados en stock disponibles' },
          { type: 'active', text: 'Generando ficha técnica y precios' }
        ],
        crmRecord: {
          name: 'Consulta Control Remoto',
          phone: 'Sin datos aún',
          interest: 'Autos a control remoto y pistas',
          details: 'Stock disponible • Alta intención',
          status: 'Consulta Activa',
          nextStep: 'Coordinar reserva o despacho',
          source: 'Agente IA Juguetería'
        }
      },
      {
        responseText: '¡Sí! Realizamos envíos en el día en CABA y GBA para compras realizadas antes de las 14:00 hs.\n\n🎁 Incluido GRATIS:\n• Envoltorio festivo de regalo a elección (infantil o neutro)\n• Moño decorativo\n• Tarjeta personalizada con el texto que nos indiques por WhatsApp\n\n🚚 Costo de envío express en el día: $3.800 (GRATIS en compras superiores a $45.000).\n\n¿Querés que preparemos el paquete ahora?',
        steps: [
          { type: 'done', text: 'Consulta: Envío express para regalo' },
          { type: 'done', text: 'Servicio de regalo en el día disponible' },
          { type: 'done', text: 'Envoltorio y tarjeta personalizada incluidos' },
          { type: 'active', text: 'Preparando formulario de despacho' }
        ],
        crmRecord: {
          name: 'Pedido de Regalo Express',
          phone: 'Sin datos aún',
          interest: 'Envío express en el día con regalo y tarjeta',
          details: 'Requiere dedicatoria personalizada',
          status: 'Pre-Venta Activa',
          nextStep: 'Solicitar texto de tarjeta y dirección',
          source: 'Agente IA Juguetería'
        }
      }
    ],
    mockData: [
      { name: 'Kit Bloques 350 pcs', category: 'Construcción', age: '5-8 años', price: '$28.500', stock: '14 unidades' },
      { name: 'Pista Doble Loop R/C', category: 'Pistas & Autos', age: '6+ años', price: '$38.900', stock: '6 unidades' }
    ],
    crmFieldMapping: {
      clientLabel: 'Venta de Juguete Iniciada',
      interestLabel: 'Categoría & Edad Target',
      valueLabel: 'Presupuesto / Monto'
    }
  },
  {
    id: 'peluqueria',
    name: 'Peluquería',
    icon: 'scissors',
    subtitle: 'Agendamiento de turnos, catálogo de servicios, estilistas y recordatorios',
    badge: 'Belleza & Estética',
    businessName: 'Studio Look & Barbería',
    systemRole: 'Agente de Turnos y Estilo',
    description: 'Coordina agenda de profesionales, reserva servicios de corte/coloración y envía recordatorios.',
    starterPrompt: 'Hola, quisiera agendar un turno para corte y barba este viernes por la tarde con el barbero Lucas.',
    presetPrompts: [
      'Turno para corte y barba este viernes a la tarde con Lucas',
      '¿Cuáles son los precios de balayage y tratamiento de nutrición?',
      '¿Tienen disponibilidad hoy mismo para peinado de fiesta?'
    ],
    presetResponses: [
      {
        responseText: '¡Excelente! Consulté la agenda de Lucas para este viernes por la tarde y tengo estos horarios disponibles:\n\n1. Viernes 16:30 hs\n2. Viernes 18:00 hs\n3. Viernes 19:15 hs\n\nEl servicio incluye: Corte de cabello de autor, perfilado de barba con toalla caliente y bebida de cortesía (café o cerveza artesanal). Precio total: $14.000.\n\n¿Cuál de los horarios preferís para confirmar tu turno?',
        steps: [
          { type: 'done', text: 'Servicio: Corte + Perfilado de barba' },
          { type: 'done', text: 'Estilista seleccionado: Lucas' },
          { type: 'done', text: 'Día solicitado: Viernes turno tarde' },
          { type: 'done', text: 'Verificando agenda en tiempo real' },
          { type: 'done', text: '3 horarios disponibles encontrados' },
          { type: 'active', text: 'Pre-reservando sillón de barbero' },
          { type: 'active', text: 'Registrando cliente en CRM Peluquería' }
        ],
        crmRecord: {
          name: 'Gonzalo R.',
          phone: '+54 9 11 6543-2211',
          interest: 'Corte + Barba con Lucas (Viernes)',
          details: 'Precio $14.000 • Esperando confirmación de hora',
          status: 'Turno Pre-Agendado',
          nextStep: 'Confirmar hora exacta y enviar recordatorio',
          source: 'Agente IA Peluquería'
        }
      },
      {
        responseText: 'Te comparto la lista de precios para nuestros servicios de coloración y tratamientos:\n\n🎨 Balayage / Mechas Creativas:\n• Cabello corto/medio: $38.000\n• Cabello largo: $46.000\n(Incluye matizador + lavado protector + peinado final)\n\n✨ Tratamientos de Nutrición & Brillo:\n• Nutrición Intensiva de Argán: $12.000\n• Botox Capilar Reconstructor: $18.500\n• Alisado Orgánico sin formol: $28.000\n\n🎁 PROMO: Balayage + Nutrición intensiva tiene un 15% de descuento off combo.\n\n¿Querés realizar un diagnóstico de cabello o agendar turno con nuestra colorista?',
        steps: [
          { type: 'done', text: 'Consulta: Precios de Balayage y Nutrición' },
          { type: 'done', text: 'Lista de precios de coloración consultada' },
          { type: 'done', text: 'Promociones de combo aplicadas' },
          { type: 'active', text: 'Ofreciendo turno con especialista en color' }
        ],
        crmRecord: {
          name: 'Consulta Balayage',
          phone: 'Sin datos aún',
          interest: 'Balayage + Tratamiento Nutrición',
          details: 'Interés en promo combo coloración',
          status: 'Consulta Activa',
          nextStep: 'Ofrecer turno para diagnóstico de color',
          source: 'Agente IA Peluquería'
        }
      },
      {
        responseText: 'Revisé la agenda del día de hoy y sí tenemos disponibilidad para Peinado de Fiesta / Evento:\n\n• Hoy 17:00 hs — Estilista Valeria (Sede Palermo)\n• Hoy 18:30 hs — Estilista Romina (Sede Palermo)\n\nDuración del servicio: 50 minutos. Precio: $16.500.\n\n¿Querés congelar el turno de las 17:00 hs o las 18:30 hs antes de que se ocupe?',
        steps: [
          { type: 'done', text: 'Solicitud: Turno urgente HOY para Peinado' },
          { type: 'done', text: 'Filtrando estilistas de peinado del día' },
          { type: 'done', text: '2 turnos de cancelación / huecos disponibles' },
          { type: 'active', text: 'Bloqueando turno en agenda urgente' }
        ],
        crmRecord: {
          name: 'Turno Urgente Peinado',
          phone: 'Sin datos aún',
          interest: 'Peinado para evento — Turno hoy',
          details: 'Disponibilidad 17:00 hs y 18:30 hs',
          status: 'Urgente / Pre-Reserva',
          nextStep: 'Confirmar nombre para cerrar turno hoy',
          source: 'Agente IA Peluquería'
        }
      }
    ],
    mockData: [
      { service: 'Corte + Barba', duration: '45 min', price: '$14.000', professional: 'Lucas' },
      { service: 'Balayage Premium', duration: '2.5 hs', price: '$46.000', professional: 'Valeria' }
    ],
    crmFieldMapping: {
      clientLabel: 'Turno Registrado',
      interestLabel: 'Servicio & Estilista',
      valueLabel: 'Valor del Servicio'
    }
  },
  {
    id: 'gimnasio',
    name: 'Gimnasio',
    icon: 'activity',
    subtitle: 'Membresías mensuales, agenda de clases grupales y pases de prueba',
    badge: 'Deportes & Fitness',
    businessName: 'FitCenter Club',
    systemRole: 'Agente de Membresías y Pases Fitness',
    description: 'Informa sobre planes de musculación, horarios de Spinning, Pilates y CrossFit, y agenda pases libres.',
    starterPrompt: 'Hola, me gustaría información sobre los planes mensuales de gimnasio y las clases de spinning.',
    presetPrompts: [
      'Planes mensuales de gimnasio y horarios de clases de spinning',
      '¿Tienen pase libre para musculación y pase diario de prueba?',
      'Quiero agendar un pase de prueba gratuito para mañana a las 18 hs'
    ],
    presetResponses: [
      {
        responseText: ' Te cuento los planes y modalidades de FitCenter Club:\n\n💪 Plan Musculación & Cardio — $22.000/mes\n• Acceso ilimitado a salón de aparatos y área aeróbica\n• Rutina personalizada con profesor en sala\n\n🚴 Plan Total Pass (Musculación + Clases) — $28.500/mes\n• Acceso a todas las clases grupales: Spinning, CrossFit, Yoga, Pilates y GAP\n• Pases libres en todas las sedes\n\n🚴 Horarios de Spinning (Sede Central):\n• Mañanas: Lunes, Miércoles y Viernes 08:00 y 10:00 hs\n• Tardes/Noches: Lunes a Viernes 18:30, 19:30 y 20:30 hs\n\n¿Querés probar una clase de spinning gratis mañana?',
        steps: [
          { type: 'done', text: 'Consulta: Planes mensuales y Spinning' },
          { type: 'done', text: 'Planes comerciales de gimnasio verificados' },
          { type: 'done', text: 'Grilla de horarios de Spinning obtenida' },
          { type: 'active', text: 'Ofreciendo pase de prueba gratuito' },
          { type: 'active', text: 'Registrando prospecto en CRM Fitness' }
        ],
        crmRecord: {
          name: 'Prospecto Fitness',
          phone: '+54 9 11 3344-5566',
          interest: 'Plan Total Pass / Spinning',
          details: 'Interés en musculación + clases grupales',
          status: 'Prospecto Calificado',
          nextStep: 'Ofrecer pase de prueba gratis de 1 día',
          source: 'Agente IA Gimnasio'
        }
      },
      {
        responseText: '¡Sí! En FitCenter contamos con varias opciones de acceso:\n\n🎟️ Pase Diario de Prueba:\n• Pase Individual por 1 día completo: $4.500\n• ¡GRATIS! Tu primer pase de prueba si registrás tu DNI hoy mismo\n\n🏋️ Pase Libre Anual (Promoción 2x1):\n• $19.000/mes abonando el pase semestral o anual (ahorrás 35%)\n• Incluye lockets, duchas con agua caliente y evaluación física sin cargo\n\n¿Te agendo tu primer pase de prueba sin costo para conocer las instalaciones?',
        steps: [
          { type: 'done', text: 'Consulta: Pase libre y prueba diaria' },
          { type: 'done', text: 'Promociones anuales y pases de prueba verificados' },
          { type: 'active', text: 'Registrando solicitud de pase sin costo' }
        ],
        crmRecord: {
          name: 'Solicitud Pase Prueba',
          phone: 'Sin datos aún',
          interest: 'Pase diario libre de prueba gratis',
          details: 'Evaluando instalaciones antes de suscribirse',
          status: 'Pase de Prueba Ofrecido',
          nextStep: 'Confirmar día y hora de visita',
          source: 'Agente IA Gimnasio'
        }
      },
      {
        responseText: '¡Pase de prueba agendado con éxito! 🏋️‍♂️\n\nResumen de tu pase gratuito:\n📍 Sede Central: Av. Corrientes 4500\n📅 Fecha: Mañana a las 18:00 hs\n✅ Incluye: Acceso a musculación + Clase de Spinning de las 18:30 hs\n👤 Presentarse en recepción con DNI indicando el código de pase #FIT-9921.\n\nTe enviamos la confirmación e instrucciones por WhatsApp. ¡Te esperamos!',
        steps: [
          { type: 'done', text: 'Reserva de pase gratis: Mañana 18:00 hs' },
          { type: 'done', text: 'Cupo reservado en clase de Spinning 18:30 hs' },
          { type: 'done', text: 'Código #FIT-9921 generado' },
          { type: 'active', text: 'Enviando pase digital con código QR por WhatsApp' }
        ],
        crmRecord: {
          name: 'Pase Gratuito Confirmado',
          phone: '+54 9 11 3344-5566',
          interest: 'Pase de prueba Mañana 18:00 hs',
          details: 'Código #FIT-9921 • Musculación + Spinning',
          status: 'Visita Agendada 🔥',
          nextStep: 'Recepción en gimnasio y oferta de inscripción',
          source: 'Agente IA Gimnasio'
        }
      }
    ],
    mockData: [
      { plan: 'Musculación & Cardio', price: '$22.000 / mes', features: 'Acceso a aparatos + rutina' },
      { plan: 'Total Pass', price: '$28.500 / mes', features: 'Musculación + Spinning + CrossFit + Pilates' }
    ],
    crmFieldMapping: {
      clientLabel: 'Nuevo Socio / Prospecto',
      interestLabel: 'Plan o Clase de Interés',
      valueLabel: 'Valor de Membresía'
    }
  },
  {
    id: 'veterinaria',
    name: 'Veterinaria',
    icon: 'paw',
    subtitle: 'Consultas médicas, vacunación, baño/peluquería y alimento balanceado',
    badge: 'Mascotas',
    businessName: 'PetCare Veterinaria',
    systemRole: 'Agente de Atención Veterinaria y Pet Care',
    description: 'Gestiona turnos de clínica veterinaria, estética canina/felina y ventas de alimento balanceado.',
    starterPrompt: 'Hola, necesito sacar un turno de vacunación para mi perro y consultar si tienen alimento Royal Canin Adulto de 15kg.',
    presetPrompts: [
      'Turno de vacunación para perro y alimento Royal Canin Adulto 15kg',
      '¿Tienen turno disponible de baño y peluquería canina para este sábado?',
      '¿Atienden urgencias veterinarias las 24 horas?'
    ],
    presetResponses: [
      {
        responseText: ' Te ayudo con ambas solicitudes para tu mascota:\n\n💉 Turno de Vacunación (Quíntuple / Antirrábica):\n• Disponibilidad clínica: Jueves 11:00 hs o Viernes 16:30 hs con la Dra. Paula\n• Precio consulta + vacuna: $14.500\n\n🦴 Alimento Royal Canin Medium Adult 15kg:\n• Stock disponible en tienda ✅\n• Precio: $62.000 (10% de descuento en efectivo/transferencia = $55.800)\n• Envío a domicilio gratis comprando la bolsa de 15kg.\n\n¿Te reservamos el turno de vacunación y te enviamos la bolsa de alimento?',
        steps: [
          { type: 'done', text: 'Mascota: Perro (Consulta clínica + Alimento)' },
          { type: 'done', text: 'Vacunación: Disponibilidad Dra. Paula' },
          { type: 'done', text: 'Alimento: Royal Canin 15kg verificado en stock' },
          { type: 'done', text: 'Descuento del 10% por pago contado aplicado' },
          { type: 'active', text: 'Pre-reservando turno médico' },
          { type: 'active', text: 'Registrando cliente en CRM Vet' }
        ],
        crmRecord: {
          name: 'Dueño de Mascota',
          phone: '+54 9 11 7766-3322',
          interest: 'Vacunación Perro + Royal Canin 15kg',
          details: 'Alimento en stock • Turno pendiente confirmación',
          status: 'Turno & Pedido Activo',
          nextStep: 'Confirmar horario de turno y dirección de envío',
          source: 'Agente IA Veterinaria'
        }
      },
      {
        responseText: '¡Sí! Para Peluquería y Baño Canino/Felino tenemos estos turnos para este sábado:\n\n• Sábado 10:00 hs (Peluquero Damián)\n• Sábado 12:30 hs (Peluquera Sofía)\n• Sábado 15:00 hs (Peluquero Damián)\n\nEl servicio incluye: Baño con shampoo hipoalergénico, corte de raza o desmotado, secado, limpieza de oídos y corte de uñas.\n\nPrecios según tamaño:\n• Perro Chico: $11.000\n• Perro Mediano: $14.000\n• Perro Grande: $18.000\n\n¿Qué raza y tamaño es tu perro para reservarle el sillón?',
        steps: [
          { type: 'done', text: 'Servicio: Baño y Peluquería Canina' },
          { type: 'done', text: 'Día solicitado: Sábado' },
          { type: 'done', text: '3 turnos en spa canino disponibles' },
          { type: 'active', text: 'Esperando tamaño/raza para confirmar horario' }
        ],
        crmRecord: {
          name: 'Consulta Spa Canino',
          phone: 'Sin datos aún',
          interest: 'Baño y Peluquería Canina — Sábado',
          details: 'Pendiente indicar raza/tamaño',
          status: 'Pre-Turno Spa',
          nextStep: 'Confirmar tamaño y horario preferido',
          source: 'Agente IA Veterinaria'
        }
      },
      {
        responseText: '🚨 ¡Sí! En PetCare contamos con Guardia Veterinaria de Urgencias 24 Horas los 365 días del año.\n\n📍 Dirección Guardia 24hs: Av. Cabildo 2800, Belgrano\n📞 Teléfono directo guardia: 0800-555-VET24 (+54 9 11 4433-2211)\n\n🩺 La guardia cuenta con:\n• Quirófano equipado e internación monitoreada\n• Diagnóstico por ecografía y rayos X de urgencia\n• Banco de sangre veterinario\n\nSi estás ante una emergencia médica con tu mascota, podés venir directamente sin turno previo. ¿Necesitás que avisemos al equipo médico de guardia que estás en camino?',
        steps: [
          { type: 'done', text: 'URGENCIA DETECTADA: Protocolo de Guardia 24hs' },
          { type: 'done', text: 'Obteniendo datos de ubicación y contacto guardia' },
          { type: 'done', text: 'Servicios de emergencia médica verificados' },
          { type: 'active', text: 'Prioridad máxima: Alerta enviada a clínica' }
        ],
        crmRecord: {
          name: 'ALERTA URGENCIA 24HS',
          phone: 'Contacto telefónico urgente',
          interest: 'Atención médica de urgencia 24hs',
          details: 'Guardia notificada de posible ingreso directo',
          status: 'Emergencia 🚨',
          nextStep: 'Recibir paciente en clínica de urgencias',
          source: 'Agente IA Veterinaria'
        }
      }
    ],
    mockData: [
      { service: 'Vacunación & Chequeo', price: '$14.500', professional: 'Dra. Paula' },
      { product: 'Royal Canin Adult 15kg', price: '$55.800', stock: '8 unidades' }
    ],
    crmFieldMapping: {
      clientLabel: 'Paciente / Mascota',
      interestLabel: 'Servicio o Alimento',
      valueLabel: 'Monto de Consulta / Pedido'
    }
  },
  {
    id: 'concesionaria',
    name: 'Concesionaria',
    icon: 'car',
    subtitle: 'Venta de vehículos 0km y usados, Test Drive, financiación y permutas',
    badge: 'Automotriz',
    businessName: 'AutoPremier Motors',
    systemRole: 'Agente de Ventas Automotriz y Test Drive',
    description: 'Asesora sobre modelos, cotiza usados en parte de pago, liquida planes de financiación y agenda test drives.',
    starterPrompt: 'Hola, estoy interesado en un SUV 0km con financiación a tasa 0% y quisiera entregar mi auto usado en parte de pago.',
    presetPrompts: [
      'Consulta por SUV 0km con tasa 0% y entregando auto usado',
      'Quiero coordinar un Test Drive del nuevo SUV para este sábado',
      '¿Cuáles son las cuotas y requisitos del plan de ahorro adjudicado?'
    ],
    presetResponses: [
      {
        responseText: '¡Excelente elección! En AutoPremier Motors tenemos la mejor propuesta para tu próximo SUV 0km:\n\n🚙 Modelo destacado: New CrossSUV 1.6 Turbo (Model 2026)\n• Precio de lista: $32.500.000\n• Financiación Tasa 0% TNA: Financiás hasta $15.000.000 en 12 o 18 cuotas fijas sin interés\n\n🚗 Llave por Llave (Tu usado en parte de pago):\n• Tomamos tu vehículo usado al mejor valor de plaza (peritaje en 30 minutos sin costo)\n• Te entregamos el 0km el mismo día que nos dejás tu unidad usada\n\n¿De qué marca, modelo y año es tu vehículo actual para darte una tasación estimada?',
        steps: [
          { type: 'done', text: 'Modelo de interés: SUV 0km' },
          { type: 'done', text: 'Modalidad de compra: Tasa 0% + Toma de usado' },
          { type: 'done', text: 'Plan de financiación a tasa 0% verificado' },
          { type: 'done', text: 'Peritaje Llave por Llave activo' },
          { type: 'active', text: 'Solicitando datos del usado para tasación' },
          { type: 'active', text: 'Registrando lead automotriz en CRM' }
        ],
        crmRecord: {
          name: 'Comprador SUV 0km',
          phone: '+54 9 11 2211-9988',
          interest: 'New CrossSUV 1.6 Turbo 0km',
          details: 'Financiación Tasa 0% • Permuta por usado',
          status: 'Lead Automotriz Calificado',
          nextStep: 'Tasar vehículo usado y coordinar Test Drive',
          source: 'Agente IA Concesionaria'
        }
      },
      {
        responseText: '¡Perfecto! El Test Drive es la mejor forma de sentir la potencia y confort del nuevo SUV.\n\n📅 Disponibilidad para Test Drive este sábado (Sucursal Puerto Madero):\n• Sábado 10:30 hs\n• Sábado 12:00 hs\n• Sábado 16:00 hs\n\nRequisitos para el Test Drive:\n✅ Licencia de conducir vigente\n✅ DNI original\n(Duración de la prueba: 30 minutos con asesor especializado a bordo).\n\n¿En cuál de estos horarios preferís hacer tu prueba de manejo?',
        steps: [
          { type: 'done', text: 'Solicitud: Test Drive de vehículo SUV 0km' },
          { type: 'done', text: 'Unidad de Test Drive disponible en flota' },
          { type: 'done', text: '3 horarios disponibles confirmados para el sábado' },
          { type: 'active', text: 'Pre-reservando vehículo de pruebas de manejo' }
        ],
        crmRecord: {
          name: 'Agendamiento Test Drive',
          phone: 'Sin datos aún',
          interest: 'Test Drive New CrossSUV 0km — Sábado',
          details: 'Esperando selección de horario',
          status: 'Test Drive Pendiente',
          nextStep: 'Confirmar horario y enviar ubicación',
          source: 'Agente IA Concesionaria'
        }
      },
      {
        responseText: 'Te paso los detalles de nuestros Planes de Ahorro Adjudicados con entrega asegurada en Cuota 3 y Cuota 6:\n\n📋 Plan 80/20 Adjudicado Directo:\n• Cuota pura inicial: $185.000/mes\n• Requisitos: Solo DNI (sin recibo de sueldo ni avales bancarios)\n• Adjudicación asegurada: Licitación fija en cuota 3 o sorteo mensual\n• Gastos de retiro: Posibilidad de incluirlos dentro de las cuotas\n\n🎁 Bonificación exclusiva por suscribirte hoy: Gastos de flete y embalaje 100% bonificados.\n\n¿Te gustaría recibir el folleto digital con la grilla completa de cuotas por WhatsApp?',
        steps: [
          { type: 'done', text: 'Consulta: Plan de ahorro adjudicado' },
          { type: 'done', text: 'Requisitos y cuotas del plan 80/20 verificados' },
          { type: 'done', text: 'Bonificación de flete aplicada' },
          { type: 'active', text: 'Generando folleto digital de cuotas' }
        ],
        crmRecord: {
          name: 'Consulta Plan de Ahorro',
          phone: 'Sin datos aún',
          interest: 'Plan 80/20 Adjudicación Cuota 3',
          details: 'Bonificación de flete disponible',
          status: 'Prospecto Plan Ahorro',
          nextStep: 'Enviar grilla de cuotas a WhatsApp',
          source: 'Agente IA Concesionaria'
        }
      }
    ],
    mockData: [
      { model: 'New CrossSUV 1.6T', type: '0km', price: '$32.500.000', promo: 'Tasa 0% hasta $15M' },
      { model: 'Sedan Executive 2.0', type: 'Usado Selección (2023)', price: '$21.800.000', km: '24.000 km' }
    ],
    crmFieldMapping: {
      clientLabel: 'Prospecto Vehicular',
      interestLabel: 'Modelo & Modalidad',
      valueLabel: 'Monto de Operación'
    }
  },
  {
    id: 'estudio',
    name: 'Estudio Profesional',
    icon: 'scale',
    subtitle: 'Asesoramiento contable, legal, inscripción impositiva y sociedades',
    badge: 'Servicios Profesionales',
    businessName: 'Asesores Contables & Legales',
    systemRole: 'Agente Consultor Contable y Legal',
    description: 'Asesora sobre Monotributo, constitución de empresas (SAS/SRL), liquidación de impuestos y agendamiento de reuniones.',
    starterPrompt: 'Hola, necesito asesoramiento para darme de alta en el Monotributo y constituir una SAS para mi nuevo emprendimiento.',
    presetPrompts: [
      'Alta en Monotributo y constitución de SAS para emprendimiento',
      '¿Qué documentos necesito para una liquidación de sueldos o auditoría?',
      'Quiero agendar una consultoría inicial con un contador especialista'
    ],
    presetResponses: [
      {
        responseText: '¡Felicitaciones por el nuevo emprendimiento! Con gusto te guiamos en la estructuración impositiva y legal de tu negocio:\n\n📑 Constitución de SAS (Sociedad por Acciones Simplificada):\n• Tiempo de trámite: 72 a 96 horas hábiles con CUIT asignado\n• Incluye: Estatuto modelo, libros digitales, inscripción en IGJ/DPJ y CUIT en AFIP\n• Honorarios paquete integral: $180.000 (en 2 pagos)\n\n💼 Alta de Monotributo & Ingresos Brutos:\n• Encuadre de categoría según facturación estimada\n• Alta en ARBA / AGIP / Convenio Multilateral\n• Tramitación de facturación electrónica sin cargo adicional\n\n¿Querés coordinar una reunión presencial o por videollamada para revisar tu caso?',
        steps: [
          { type: 'done', text: 'Trámites requeridos: Alta Monotributo + Constitución SAS' },
          { type: 'done', text: 'Requisitos legales de IGJ y AFIP analizados' },
          { type: 'done', text: 'Presupuesto de honorarios y plazos compilados' },
          { type: 'active', text: 'Registrando emprendedor en CRM Profesional' },
          { type: 'active', text: 'Coordinando reunión de asesoría inicial' }
        ],
        crmRecord: {
          name: 'Emprendimiento Nuevo (SAS)',
          phone: '+54 9 11 4455-6677',
          interest: 'Constitución SAS + Monotributo',
          details: 'Honorarios $180.000 • Alta intención',
          status: 'Lead Profesional Calificado',
          nextStep: 'Agendar consultoría de 30 min con socio del estudio',
          source: 'Agente IA Estudio'
        }
      },
      {
        responseText: 'Para la liquidación de sueldos y cargas sociales (F.931 AFIP) o auditoría contable, la documentación inicial requerida es:\n\n📋 Documentación a presentar:\n1. Alta de empleador AFIP y nómina del personal con CUIL\n2. Convenio colectivo aplicable (CCT Comercio, UOCRA, Sanidad, etc.)\n3. Novedades del mes: Horas extras, ausencias, licencias y comisiones\n4. Libro de sueldos digital AFIP configurado\n\nNos encargamos del 100% de la liquidación mensual, presentación de DDJJ y emisión de recibos digitales.\n\n¿Cuántos empleados tenés actualmente en la nómina para enviarte el presupuesto exacto de abono mensual?',
        steps: [
          { type: 'done', text: 'Consulta: Liquidación de sueldos y auditoría' },
          { type: 'done', text: 'Listado de documentación F.931 AFIP compilado' },
          { type: 'active', text: 'Solicitando cantidad de empleados para presupuesto' }
        ],
        crmRecord: {
          name: 'Consulta Liquidación Sueldos',
          phone: 'Sin datos aún',
          interest: 'Abono mensual de liquidación de sueldos',
          details: 'Pendiente cantidad de empleados',
          status: 'Consulta Activa',
          nextStep: 'Cotizar abono mensual según cantidad de cápitas',
          source: 'Agente IA Estudio'
        }
      },
      {
        responseText: 'Con gusto. Coordinemos una reunión inicial de consultoría de 30 minutos sin cargo con uno de nuestros contadores senior:\n\n📅 Horarios disponibles esta semana:\n• Martes 11:30 hs (Google Meet)\n• Miércoles 16:00 hs (Presencial en oficinas Microcentro / Google Meet)\n• Jueves 10:00 hs (Google Meet)\n\nEn la reunión evaluaremos la estrategia tributaria óptima para minimizar costos impositivos de forma 100% legal.\n\n¿Cuál de los horarios te queda más cómodo?',
        steps: [
          { type: 'done', text: 'Solicitud: Consultoría inicial sin cargo' },
          { type: 'done', text: 'Agenda de contadores senior consultada' },
          { type: 'done', text: '3 opciones de horarios disponibles' },
          { type: 'active', text: 'Pre-reservando consultoría contable' }
        ],
        crmRecord: {
          name: 'Reunión Consultoría Agendada',
          phone: 'Sin datos aún',
          interest: 'Consultoría contable/legal inicial 30 min',
          details: 'Google Meet / Presencial',
          status: 'Reunión Solicitada 🔥',
          nextStep: 'Confirmar horario y enviar link de Meet',
          source: 'Agente IA Estudio'
        }
      }
    ],
    mockData: [
      { service: 'Constitución SAS / SRL', duration: '72-96 hs', price: '$180.000' },
      { service: 'Abono Contable PyME', coverage: 'AFIP + IIBB + Sueldos', price: 'Desde $45.000 / mes' }
    ],
    crmFieldMapping: {
      clientLabel: 'Cliente / Empresa Registrada',
      interestLabel: 'Trámite / Servicio Solicitado',
      valueLabel: 'Honorarios / Abono'
    }
  }
];

