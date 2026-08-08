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
        text: 'Excelente decisión. Para tasar tu propiedad en Recoleta, nuestro equipo analiza precio por m² de operaciones recientes en la zona, estado de conservación y amenities.\n\nActualmente el mercado en Recoleta muestra valores entre USD 2.800 y USD 4.200/m² para departamentos de categoría. ¿Me podés indicar la superficie aproximada y la cantidad de ambientes para darte una estimación inicial?',
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
        text: 'Sí, tenemos disponibilidad en alquileres temporarios en Zona Norte. Algunas opciones para el verano:\n\n• Casa 4 amb con pileta — Nordelta, $850.000/mes\n• Casa 3 amb en barrio cerrado — San Isidro, $620.000/mes\n• Chalet 4 amb — Tigre Delta, $540.000/mes\n\nTodos los contratos son por temporada (diciembre a marzo). ¿Para cuántas personas y qué fechas te interesan?',
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
        text: 'Claro. En Casa Norte tenemos varias opciones para cada necesidad:\n\nVegetarianas: Risotto de hongos silvestres, Ravioles de ricotta y espinaca, Ensalada de quinoa con vegetales asados.\n\nSin TACC (gluten free): Brochette de pollo, Bife de chorizo con guarnición, Tabla de quesos y fiambres.\n\nTodos nuestros platos se preparan con ingredientes frescos y podemos adaptar salsas y guarniciones. ¿Querés hacer una reserva para alguna fecha especial?',
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
        text: 'Los domingos al mediodía Casa Norte abre con el siguiente horario:\n\nAlmuerzo: 12:00 a 15:30 hs\nMerienda: 16:00 a 18:00 hs\n\nLos domingos tenemos menú especial de brunch de 12:00 a 14:00 hs con opción buffet. Recomendamos reservar con anticipación ya que suele haber alta demanda. ¿Querés hacer una reserva?',
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
        text: 'El Laboratorio de Centro Salud Integral atiende para extracciones de sangre sin turno en los siguientes horarios:\n\nLunes a Viernes: 7:00 a 10:00 hs (extracciones en ayunas)\nSábados: 7:30 a 9:30 hs\n\nImportante: Para análisis hormonales o cultivos especiales sí se requiere turno previo. ¿Necesitás saber si tu análisis requiere ayuno o turno?',
        steps: [
          { type: 'done', text: 'Consulta: Horarios de laboratorio' },
          { type: 'done', text: 'Tipo: Análisis sin turno previo' },
          { type: 'done', text: 'Consultando agenda del laboratorio' },
          { type: 'active', text: 'Generando respuesta con horarios' }
        ],
        crmRecord: {
          name: 'Consulta Laboratorio',
          phone: 'Sin datos aún',
          interest: 'Extracción de sangre sin turno',
          details: 'Consulta informativa de horarios',
          status: 'Consulta Informativa',
          nextStep: 'Verificar si requiere turno según tipo de análisis',
          source: 'Agente IA Salud'
        }
      },
      {
        text: 'Claro, puedo ayudarte a reprogramar tu turno de Cardiología del jueves. Tengo estos turnos disponibles:\n\n• Lunes próximo — 9:00 hs con Dr. Marcelo Torres\n• Miércoles próximo — 14:30 hs con Dr. Marcelo Torres\n• Viernes próximo — 11:00 hs con Dra. Patricia Vega\n\n¿Cuál de estas opciones te viene mejor? El turno anterior queda cancelado automáticamente.',
        steps: [
          { type: 'done', text: 'Acción: Cancelar / Reprogramar turno' },
          { type: 'done', text: 'Especialidad: Cardiología' },
          { type: 'done', text: 'Turno actual: Jueves (identificado)' },
          { type: 'done', text: 'Consultando disponibilidad para reprogramar' },
          { type: 'done', text: '3 opciones de reprogramación disponibles' },
          { type: 'active', text: 'Gestionando cancelación del turno anterior' },
          { type: 'active', text: 'Esperando confirmación del nuevo turno' }
        ],
        crmRecord: {
          name: 'Paciente Cardiología',
          phone: '+54 9 11 0000-0000',
          interest: 'Reprogramar turno Cardiología',
          details: 'Turno jueves cancelado • Pendiente nuevo turno',
          status: 'Reprogramación en Curso',
          nextStep: 'Confirmar nuevo horario seleccionado',
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
        text: 'Nuestro desayuno buffet incluye:\n\nEstación de panificados: medialunas, tostadas, facturas y pan artesanal\nEstación fría: yogures, frutas frescas, cereales y jugos naturales\nEstación caliente: huevos revueltos, panceta, salchichas y quesos\nBebidas: café, té, leche y jugos de naranja exprimido\n\nHorario del desayuno:\n• Lunes a viernes: 07:00 a 10:30 hs\n• Sábados y domingos: 07:30 a 11:30 hs\n\n¿Necesitás alguna opción sin TACC o vegana? Las preparamos con aviso previo.',
        steps: [
          { type: 'done', text: 'Consulta: Servicio de desayuno buffet' },
          { type: 'done', text: 'Consultando descripción del servicio' },
          { type: 'active', text: 'Generando respuesta con detalle completo' }
        ],
        crmRecord: {
          name: 'Consulta Desayuno',
          phone: 'Sin datos aún',
          interest: 'Información sobre desayuno buffet',
          details: 'Consulta de servicios incluidos',
          status: 'Consulta Informativa',
          nextStep: 'Ofrecer reserva de alojamiento',
          source: 'Agente IA Hotel'
        }
      },
      {
        text: 'Sí, el Hotel Central Plaza cuenta con ambos servicios:\n\nEstacionamiento privado: Disponible 24hs, cubierto y con cámaras de seguridad. Tarifa: USD 15/día para huéspedes (incluido en suites superiores).\n\nTraslado al aeropuerto: Servicio de transfer privado disponible a cualquier hora. Tarifas:\n• Ezeiza (EZE): USD 45 por vehículo (hasta 4 pasajeros)\n• Aeroparque (AEP): USD 25 por vehículo\n\nLos traslados se reservan con 12hs de anticipación. ¿Querés incluirlo en tu reserva?',
        steps: [
          { type: 'done', text: 'Consulta: Servicios adicionales' },
          { type: 'done', text: 'Servicio 1: Estacionamiento privado' },
          { type: 'done', text: 'Servicio 2: Traslado al aeropuerto' },
          { type: 'done', text: 'Consultando tarifas y disponibilidad' },
          { type: 'active', text: 'Generando cotización de servicios adicionales' }
        ],
        crmRecord: {
          name: 'Consulta Servicios',
          phone: 'Sin datos aún',
          interest: 'Estacionamiento + Transfer aeropuerto',
          details: 'Interés en servicios adicionales del hotel',
          status: 'Consulta Activa',
          nextStep: 'Ofrecer reserva con servicios incluidos',
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
        text: 'El servicio de envío express a Córdoba Capital tiene los siguientes tiempos y tarifas:\n\nEnvío Express (24-48 hs hábiles): $8.500 flat\nEnvío Estándar (3-5 días hábiles): $4.200 flat\nRetiro en sucursal correo: Gratis (5-7 días)\n\nPara pedidos superiores a $500.000 el envío estándar es gratis.\n\nTodos los envíos incluyen número de seguimiento en tiempo real y seguro de rotura. ¿Querés continuar con la compra?',
        steps: [
          { type: 'done', text: 'Consulta: Tiempo y costo de envío' },
          { type: 'done', text: 'Destino: Córdoba Capital' },
          { type: 'done', text: 'Modalidad: Express' },
          { type: 'done', text: 'Consultando tarifario logístico actualizado' },
          { type: 'active', text: 'Generando opciones de envío disponibles' }
        ],
        crmRecord: {
          name: 'Consulta Envío',
          phone: 'Sin datos aún',
          interest: 'Envío express a Córdoba Capital',
          details: 'Consultó tiempos y costos de logística',
          status: 'Pre-compra Activa',
          nextStep: 'Ofrecer continuar con proceso de compra',
          source: 'Agente IA E-commerce'
        }
      },
      {
        text: 'En Nova Store Tech trabajamos con los siguientes medios de pago en cuotas sin interés:\n\nTarjetas Visa y Mastercard (todos los bancos):\n• 3 cuotas sin interés en compras desde $50.000\n• 6 cuotas sin interés en compras desde $200.000\n• 12 cuotas sin interés en compras desde $500.000 (promoción vigente hasta fin de mes)\n\nAdemás aceptamos: Transferencia bancaria, Mercado Pago y MODO.\n\n¿Querés saber cuánto quedaría la cuota para alguno de nuestros productos?',
        steps: [
          { type: 'done', text: 'Consulta: Medios de pago en cuotas' },
          { type: 'done', text: 'Filtro: Sin interés' },
          { type: 'done', text: 'Consultando plan de cuotas vigente' },
          { type: 'done', text: 'Promociones activas identificadas' },
          { type: 'active', text: 'Generando detalle de opciones financieras' }
        ],
        crmRecord: {
          name: 'Consulta Financiación',
          phone: 'Sin datos aún',
          interest: 'Cuotas sin interés disponibles',
          details: 'Interés en financiación — Alta intención de compra',
          status: 'Prospecto Calificado',
          nextStep: 'Calcular cuota según producto elegido',
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
        text: 'La integración con tu CRM actual es uno de nuestros puntos fuertes. Trabajamos con:\n\nIntegraciones nativas: HubSpot, Zoho CRM, Salesforce, Pipedrive y Monday.com\nIntegración vía API: Cualquier CRM con API REST (documentación requerida)\nIntegración vía Webhook/n8n: Para sistemas internos o ERP a medida\n\nEl proceso de integración típico lleva entre 3 y 5 días hábiles. Los datos del agente (leads, conversaciones, etiquetas) se sincronizan en tiempo real.\n\n¿Qué CRM usás actualmente? Te damos más detalle según tu plataforma específica.',
        steps: [
          { type: 'done', text: 'Consulta: Integración con CRM' },
          { type: 'done', text: 'Tipos de integración disponibles analizados' },
          { type: 'done', text: 'Plataformas compatibles identificadas' },
          { type: 'active', text: 'Generando respuesta técnica de integración' },
          { type: 'active', text: 'Registrando consulta técnica en CRM' }
        ],
        crmRecord: {
          name: 'Consulta Técnica CRM',
          phone: 'Sin datos aún',
          interest: 'Integración Agente IA con CRM propio',
          details: 'Requiere conocer CRM actual del cliente',
          status: 'Consulta Técnica Activa',
          nextStep: 'Identificar CRM actual para propuesta técnica',
          source: 'Agente IA Corporativo'
        }
      },
      {
        text: 'Con gusto agendamos una reunión de 30 minutos con uno de nuestros consultores senior.\n\nTenemos disponibilidad esta semana:\n• Martes 14:00 hs (modalidad Google Meet)\n• Miércoles 10:30 hs (modalidad Google Meet)\n• Jueves 16:00 hs (presencial CABA o Google Meet)\n\nEn la reunión analizamos tu proceso actual, identificamos oportunidades de automatización y te presentamos un plan de implementación a medida.\n\n¿Cuál de estos horarios te viene mejor?',
        steps: [
          { type: 'done', text: 'Acción: Agendar reunión comercial' },
          { type: 'done', text: 'Duración: 30 minutos' },
          { type: 'done', text: 'Consultando agenda de consultores' },
          { type: 'done', text: '3 horarios disponibles esta semana' },
          { type: 'active', text: 'Preparando opciones de agenda' },
          { type: 'active', text: 'Registrando oportunidad comercial como prioridad' }
        ],
        crmRecord: {
          name: 'Prospecto Reunión Comercial',
          phone: 'Sin datos aún',
          interest: 'Reunión de diagnóstico 30 min',
          details: 'Alta intención — Solicitó reunión directa',
          status: 'Oportunidad Caliente',
          nextStep: 'Confirmar horario y enviar calendario',
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
