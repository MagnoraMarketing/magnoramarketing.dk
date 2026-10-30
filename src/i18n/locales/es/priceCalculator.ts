export default {
  badge: 'Calculadora de precios',
  tabsLabel: 'Elige servicio',
  resultHeading: 'Tu estimación de precio',
  lockedText: 'Introduce el nombre de tu empresa y tu teléfono y haz clic en "Obtener precio". Te enviaremos tu precio exacto y una oferta a medida, normalmente en menos de 24 horas.',
  cta: 'Obtener precio',
  trust: ['Sin compromiso', 'Respuesta en 24 horas', 'Asesoramiento gratuito'],
  vatNote: 'Todos los precios son sin IVA. El precio final depende de una breve revisión de tu proyecto.',
  lead: {
    heading: '¿A quién enviamos el precio?',
    company: 'Nombre de la empresa',
    phone: 'Teléfono',
    phoneInvalid: 'Introduce un teléfono válido (al menos 8 dígitos).',
    sending: 'Enviando…',
    successTitle: '¡Gracias! Tu precio está en camino',
    successText: 'Estamos calculando tu precio exacto y contactaremos con {{company}} en el {{phone}} en menos de 24 horas.',
    moreDetails: '¿Quieres añadir más detalles?',
    error: 'Algo ha fallado. Inténtalo de nuevo o escribe a <a href="mailto:mail@magnoramarketing.dk" class="underline">mail@magnoramarketing.dk</a>.',
    email: {
      intro: 'Nuevo lead de la calculadora de precios ({{calculator}}). El cliente quiere que le contactemos con un precio.',
      estimate: 'Estimación orientativa (no se muestra al cliente):',
    },
  },
  multiHint: 'Puedes elegir varias',
  noneSelected: 'Ninguna seleccionada',
  currency: '{{value}} DKK',
  sourceLabel: 'Calculadora de precios',
  contactBanner: {
    title: 'Tus elecciones de la calculadora están listas',
    text: 'Hemos rellenado el formulario con tus elecciones, el nombre de tu empresa y tu teléfono. Añade tu nombre y tu correo y envíalo, y te contactaremos con tu precio.',
  },
  message: {
    intro: 'Hola Magnora Marketing:\n\nHe usado la calculadora de precios de {{calculator}} y me gustaría recibir mi precio. Mis elecciones:',
    outro: 'Información adicional sobre mi empresa y proyecto:',
  },
  shared: {
    audience: {
      label: '¿Cuál es vuestro público objetivo?',
      options: {
        smb: { title: 'Dueños de pymes', desc: 'Propietarios y pequeñas empresas' },
        manager: { title: 'Mandos', desc: 'Jefes de departamento y mandos intermedios' },
        csuite: { title: 'Dirección', desc: 'Nivel C y alta dirección' },
      },
    },
    period: {
      label: 'Duración del contrato',
      options: {
        '1': { title: '1 mes', desc: 'Periodo piloto' },
        '3': { title: '3 meses', desc: 'Descuento' },
        '6': { title: '6 meses', desc: 'Más descuento' },
        '12': { title: '12 meses', desc: 'Mejor precio' },
      },
    },
  },
  variants: {
    meetings: {
      tab: 'Concertación de reuniones',
      title: '¿Cuánto cuesta la concertación de reuniones? Calcula tu precio',
      subtitle: 'Elige modelo de precio, número de reuniones y público objetivo, y recibe el precio de la concertación profesional de reuniones B2B.',
      mainLabel: 'Precio estimado al mes',
      secondaryLabel: 'Precio por reunión',
      steps: {
        model: {
          label: 'Elige modelo de precio',
          options: {
            perMeeting: { title: 'No Cure No Pay', desc: 'Paga solo por reuniones cualificadas celebradas' },
            package: { title: 'Paquete', desc: 'Precio mensual fijo y el menor precio por reunión' },
          },
        },
        volume: {
          label: 'Reuniones al mes',
          hint: 'Arrastra para elegir',
          value_one: '{{count}} reunión',
          value_other: '{{count}} reuniones',
        },
      },
    },
    telemarketing: {
      tab: 'Telemarketing',
      title: '¿Cuánto cuesta el telemarketing? Calcula tu precio',
      subtitle: 'Cuéntanos el objetivo, las horas de llamadas y el público objetivo, y te enviaremos el precio de tu campaña de telemarketing.',
      mainLabel: 'Precio estimado al mes',
      secondaryLabel: 'Precio por hora de llamadas',
      steps: {
        goal: {
          label: '¿Cuál es el objetivo de la campaña?',
          options: {
            meetings: { title: 'Concertar reuniones', desc: 'Reuniones de venta con decisores' },
            sales: { title: 'Venta directa', desc: 'Cerrar acuerdos por teléfono' },
            leads: { title: 'Leads e investigación', desc: 'Cualificar y mapear prospectos' },
          },
        },
        volume: {
          label: 'Horas de llamadas al mes',
          hint: 'Arrastra para elegir',
          value_one: '{{count}} hora',
          value_other: '{{count}} horas',
        },
      },
    },
    website: {
      tab: 'Página web',
      title: '¿Cuánto cuesta una página web? Calcula tu precio',
      subtitle: 'Elige tipo, número de páginas y funciones, y recibe el precio de tu nueva web orientada a la conversión.',
      mainLabel: 'Precio estimado del proyecto',
      secondaryLabel: 'O al mes (24 meses)',
      steps: {
        type: {
          label: '¿Qué tipo de web?',
          options: {
            landing: { title: 'Landing page', desc: 'Una página para campaña o producto' },
            business: { title: 'Web corporativa', desc: 'Presenta tu empresa y servicios' },
            cms: { title: 'Web con CMS', desc: 'Edita tú mismo contenido, blog y páginas' },
            webshop: { title: 'Tienda online', desc: 'Vende online con pagos y stock' },
          },
        },
        volume: {
          label: 'Número de páginas',
          hint: 'Nº aproximado de subpáginas',
          value_one: '{{count}} página',
          value_other: '{{count}} páginas',
        },
        design: {
          label: 'Diseño',
          options: {
            template: { title: 'Basado en plantilla', desc: 'Lanzamiento rápido y económico' },
            custom: { title: 'Diseño a medida', desc: 'Diseño único según tu marca' },
          },
        },
        features: {
          label: 'Funciones extra',
          options: {
            seo: { title: 'Optimización SEO' },
            booking: { title: 'Reservas online' },
            multilingual: { title: 'Varios idiomas' },
            copy: { title: 'Redacción de textos' },
            integrations: { title: 'Integraciones' },
          },
        },
      },
    },
    ai: {
      tab: 'Soluciones de IA',
      title: '¿Cuánto cuesta una solución de IA? Calcula tu precio',
      subtitle: 'Elige solución, volumen e integraciones, y recibe el precio de tu chatbot de IA, recepción con IA o automatización.',
      mainLabel: 'Puesta en marcha estimada',
      secondaryLabel: 'Coste mensual',
      steps: {
        solution: {
          label: '¿Qué solución de IA?',
          options: {
            chatbot: { title: 'Chatbot de IA', desc: 'Atiende a clientes en tu web 24/7' },
            reception: { title: 'Recepción con IA', desc: 'Atiende el teléfono y reserva citas' },
            automation: { title: 'Automatización', desc: 'Agentes de IA para tareas rutinarias' },
            integration: { title: 'Integración de IA', desc: 'IA integrada en tus sistemas' },
          },
        },
        volume: {
          label: 'Conversaciones o tareas al mes',
          hint: 'Volumen esperado',
          value_one: '{{count}} al mes',
          value_other: '{{count}} al mes',
        },
        integrations: {
          label: 'Integraciones',
          options: {
            crm: { title: 'CRM' },
            calendar: { title: 'Calendario' },
            email: { title: 'Correo electrónico' },
            website: { title: 'Página web' },
            erp: { title: 'ERP / contabilidad' },
          },
        },
        languages: {
          label: 'Idiomas',
          options: {
            one: { title: 'Danés', desc: 'Un idioma' },
            two: { title: 'Danés + inglés', desc: 'Dos idiomas' },
            many: { title: 'Multilingüe', desc: 'Tres o más idiomas' },
          },
        },
      },
    },
    game: {
      tab: 'Videojuegos',
      title: '¿Cuánto cuesta desarrollar un videojuego? Calcula tu precio',
      subtitle: 'Elige plataforma, alcance, gráficos y funciones, y recibe el precio de tu juego. Pedir un precio no cuesta nada.',
      mainLabel: 'Precio estimado del proyecto',
      secondaryLabel: 'O al mes (24 meses)',
      steps: {
        platform: {
          label: '¿Qué tipo de juego?',
          options: {
            web: { title: 'Juego de navegador', desc: 'Se juega directamente en el navegador' },
            mobile: { title: 'Juego móvil', desc: 'iOS y Android' },
            pc: { title: 'Juego de PC y consola', desc: 'Steam y producciones más grandes' },
            learning: { title: 'Juego educativo o corporativo', desc: 'Gamificación, quiz y campañas' },
          },
        },
        volume: {
          label: 'Número de niveles o pantallas',
          hint: 'Volumen aproximado de contenido',
          value_one: '{{count}} nivel',
          value_other: '{{count}} niveles',
        },
        graphics: {
          label: 'Gráficos',
          options: {
            simple2d: { title: '2D sencillo', desc: 'Gráficos limpios y elegantes' },
            rich2d: { title: '2D detallado', desc: 'Ilustrado y animado' },
            threeD: { title: '3D', desc: 'Modelos, luz y cámara' },
          },
        },
        features: {
          label: 'Funciones',
          options: {
            multiplayer: { title: 'Multijugador' },
            leaderboard: { title: 'Clasificaciones' },
            payments: { title: 'Compras dentro del juego' },
            analytics: { title: 'Estadísticas' },
            backend: { title: 'Cuentas de usuario y backend' },
          },
        },
      },
    },
  },
};
