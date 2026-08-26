export default {
  contactForm: {
    topics: {
      job: 'Job henvendelse',
      meetingBooking: 'Mødebooking / Telesalg',
      webDevelopment: 'Webudvikling',
      aiSolutions: 'AI-løsninger',
      other: 'Andet',
    },
    topicQuestion: 'Hvad drejer din henvendelse sig om? *',
    fields: {
      name: 'Navn *',
      email: 'E-mail *',
      phone: 'Telefon',
      companyRequired: 'Virksomhed *',
      companyOptional: 'Virksomhed',
      message: 'Besked *',
    },
    placeholders: {
      name: 'Dit fulde navn',
      email: 'din@email.dk',
      phone: '+45 12 34 56 78',
      companyOptional: 'Valgfrit',
      companyRequired: 'Din virksomhed',
      messageJob: 'Fortæl kort om dig selv, din erfaring og hvilken type opgaver du søger…',
      messageDefault: 'Fortæl kort om din virksomhed, dine behov og hvad du gerne vil opnå…',
    },
    success: {
      title: 'Tak for din henvendelse!',
      body: 'Vi har modtaget din besked og vender tilbage inden for én hverdag på den e-mail, du har oplyst.',
      newRequest: 'Send en ny henvendelse',
    },
    error: 'Noget gik galt – din besked blev ikke sendt. Prøv igen, eller skriv direkte til <a href="mailto:mail@magnoramarketing.dk" class="underline font-semibold">mail@magnoramarketing.dk</a>.',
    submit: {
      sending: 'Sender…',
      send: 'Send henvendelse',
    },
    gdprNote: 'Vi behandler dine oplysninger fortroligt og i overensstemmelse med GDPR. Du hører fra os inden for én hverdag.',
  },
};
