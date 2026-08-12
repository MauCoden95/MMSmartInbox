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
  }
];
