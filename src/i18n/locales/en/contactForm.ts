export default {
  contactForm: {
    topics: {
      job: 'Job inquiry',
      meetingBooking: 'Meeting Booking / Telesales',
      webDevelopment: 'Web Development',
      aiSolutions: 'AI Solutions',
      other: 'Other',
    },
    topicQuestion: 'What is your inquiry about? *',
    fields: {
      name: 'Name *',
      email: 'Email *',
      phone: 'Phone',
      companyRequired: 'Company *',
      companyOptional: 'Company',
      message: 'Message *',
    },
    placeholders: {
      name: 'Your full name',
      email: 'your@email.com',
      phone: '+45 12 34 56 78',
      companyOptional: 'Optional',
      companyRequired: 'Your company',
      messageJob: 'Tell us briefly about yourself, your experience, and what type of role you are looking for…',
      messageDefault: 'Tell us briefly about your company, your needs, and what you would like to achieve…',
    },
    success: {
      title: 'Thank you for reaching out!',
      body: 'We have received your message and will get back to you within one business day at the email address you provided.',
      newRequest: 'Send a new inquiry',
    },
    error: 'Something went wrong – your message was not sent. Please try again, or email us directly at <a href="mailto:mail@magnoramarketing.dk" class="underline font-semibold">mail@magnoramarketing.dk</a>.',
    submit: {
      sending: 'Sending…',
      send: 'Send inquiry',
    },
    gdprNote: 'We handle your information confidentially and in accordance with GDPR. You will hear from us within one business day.',
  },
};
