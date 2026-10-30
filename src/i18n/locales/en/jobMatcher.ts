export default {
  badge: "Find your job",
  title: "Find the remote job that suits you",
  subtitle: "Choose a job, hours and your experience – and we will send you your options and expected pay. Or apply right away.",
  openJob: "Not sure yet – suggest a job",
  job: { label: "Which job are you interested in?" },
  hours: {
    label: "Expected hours per week",
    hint: "Drag to choose",
    value_one: "{{count}} hour/week",
    value_other: "{{count}} hours/week",
  },
  experience: {
    label: "How much sales experience do you have?",
    options: {
      none: { title: "No experience", desc: "You are new – we will teach you everything" },
      some: { title: "Some experience", desc: "Less than 1 year in sales or customer service" },
      experienced: { title: "Experienced", desc: "1–3 years in sales or meeting booking" },
      expert: { title: "Very experienced", desc: "More than 3 years with good results" },
    },
  },
  resultHeading: "Your job match",
  formIntro: "Enter your details and choose whether to see your options and pay, or apply right away.",
  fields: {
    name: "Full name",
    phone: "Phone number",
    email: "Email",
  },
  phoneInvalid: "Enter a valid phone number (at least 8 digits).",
  actions: {
    salary: "See options and pay",
    apply: "Apply now",
  },
  success: {
    salary: { title: "Thank you! Your options are on their way", text: "We will find the jobs and pay that suit you and call you on {{phone}} within 24 hours, {{name}}." },
    apply: { title: "Thank you for applying!", text: "We have received your application, {{name}}, and will call you on {{phone}} within 24 hours for a chat." },
  },
  error: "Something went wrong. Please try again or write to <a href=\"mailto:mail@magnoramarketing.dk\" class=\"underline\">mail@magnoramarketing.dk</a>.",
  gdpr: "We only use your details to contact you about jobs at Magnora Marketing.",
  sourceLabel: "Job match (work from home)",
  email: {
    intro: "New job lead from the Work from home page. The candidate chose: {{action}}.",
  },
};
