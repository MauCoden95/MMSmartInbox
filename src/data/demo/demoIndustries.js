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
