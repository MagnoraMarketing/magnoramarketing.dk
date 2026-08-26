export default {
  contactForm: {
    topics: {
      job: 'Solicitud de empleo',
      meetingBooking: 'Reserva de reuniones / Televentas',
      webDevelopment: 'Desarrollo web',
      aiSolutions: 'Soluciones de IA',
      other: 'Otro',
    },
    topicQuestion: '¿Sobre qué trata tu consulta? *',
    fields: {
      name: 'Nombre *',
      email: 'Correo electrónico *',
      phone: 'Teléfono',
      companyRequired: 'Empresa *',
      companyOptional: 'Empresa',
      message: 'Mensaje *',
    },
    placeholders: {
      name: 'Tu nombre completo',
      email: 'tu@email.com',
      phone: '+45 12 34 56 78',
      companyOptional: 'Opcional',
      companyRequired: 'Tu empresa',
      messageJob: 'Cuéntanos brevemente sobre ti, tu experiencia y qué tipo de puesto buscas…',
      messageDefault: 'Cuéntanos brevemente sobre tu empresa, tus necesidades y lo que te gustaría conseguir…',
    },
    success: {
      title: '¡Gracias por tu mensaje!',
      body: 'Hemos recibido tu mensaje y te responderemos dentro de un día laborable al correo electrónico que has indicado.',
      newRequest: 'Enviar una nueva consulta',
    },
    error: 'Algo salió mal – tu mensaje no se ha enviado. Inténtalo de nuevo o escríbenos directamente a <a href="mailto:mail@magnoramarketing.dk" class="underline font-semibold">mail@magnoramarketing.dk</a>.',
    submit: {
      sending: 'Enviando…',
      send: 'Enviar consulta',
    },
    gdprNote: 'Tratamos tu información de forma confidencial y conforme al RGPD. Recibirás noticias nuestras dentro de un día laborable.',
  },
};
