export default {
  badge: 'Price calculator',
  tabsLabel: 'Choose service',
  resultHeading: 'Your price estimate',
  lockedText: 'Enter your company name and phone number and click "Get price". We will send you your exact price and a tailored quote – usually within 24 hours.',
  cta: 'Get price',
  trust: ['No obligation', 'Reply within 24 hours', 'Free advice'],
  vatNote: 'All prices exclude VAT. The final price depends on a short review of your project.',
  lead: {
    heading: 'Who should we send the price to?',
    company: 'Company name',
    phone: 'Phone number',
    phoneInvalid: 'Enter a valid phone number (at least 8 digits).',
    sending: 'Sending …',
    successTitle: 'Thank you! Your price is on its way',
    successText: 'We are calculating your exact price and will contact {{company}} on {{phone}} within 24 hours.',
    moreDetails: 'Want to add more details?',
    error: 'Something went wrong. Please try again or write to <a href="mailto:mail@magnoramarketing.dk" class="underline">mail@magnoramarketing.dk</a>.',
    email: {
      intro: 'New lead from the price calculator ({{calculator}}). The customer wants to be contacted with a price.',
      estimate: 'Indicative estimate (not shown to the customer):',
    },
  },
  multiHint: 'Pick as many as you like',
  noneSelected: 'None selected',
  currency: 'DKK {{value}}',
  sourceLabel: 'Price calculator',
  contactBanner: {
    title: 'Your price calculator choices are ready',
    text: 'We have filled in the form with your choices, company name and phone number. Add your name and email and send – and we will contact you with your price.',
  },
  message: {
    intro: 'Hi Magnora Marketing,\n\nI used the {{calculator}} price calculator and would like my price sent to me. My choices:',
    outro: 'Any additional information about my company and project:',
  },
  shared: {
    audience: {
      label: 'Who is your target audience?',
      options: {
        smb: { title: 'SME owners', desc: 'Owner-managers and small businesses' },
        manager: { title: 'Managers', desc: 'Department and middle managers' },
        csuite: { title: 'Executives', desc: 'C-level and top management' },
      },
    },
    period: {
      label: 'Contract period',
      options: {
        '1': { title: '1 month', desc: 'Pilot period' },
        '3': { title: '3 months', desc: 'Discount' },
        '6': { title: '6 months', desc: 'More discount' },
        '12': { title: '12 months', desc: 'Best price' },
      },
    },
  },
  variants: {
    meetings: {
      tab: 'Meeting booking',
      title: 'How much does meeting booking cost? Calculate your price',
      subtitle: 'Choose a pricing model, number of meetings and target audience – and get your price for professional B2B meeting booking sent to you.',
      mainLabel: 'Estimated price per month',
      secondaryLabel: 'Price per meeting',
      steps: {
        model: {
          label: 'Choose pricing model',
          options: {
            perMeeting: { title: 'No Cure No Pay', desc: 'Only pay for held, qualified meetings' },
            package: { title: 'Package', desc: 'Fixed monthly price and lowest price per meeting' },
          },
        },
        volume: {
          label: 'Meetings per month',
          hint: 'Drag to choose',
          value_one: '{{count}} meeting',
          value_other: '{{count}} meetings',
        },
      },
    },
    telemarketing: {
      tab: 'Telemarketing',
      title: 'How much does telemarketing cost? Calculate your price',
      subtitle: 'Tell us the purpose, number of calling hours and target audience – and we will send you the price of your telemarketing campaign.',
      mainLabel: 'Estimated price per month',
      secondaryLabel: 'Price per calling hour',
      steps: {
        goal: {
          label: 'What is the purpose of the campaign?',
          options: {
            meetings: { title: 'Book meetings', desc: 'Sales meetings with decision-makers' },
            sales: { title: 'Direct sales', desc: 'Close deals over the phone' },
            leads: { title: 'Leads & research', desc: 'Qualify and map prospects' },
          },
        },
        volume: {
          label: 'Calling hours per month',
          hint: 'Drag to choose',
          value_one: '{{count}} hour',
          value_other: '{{count}} hours',
        },
      },
    },
    website: {
      tab: 'Website',
      title: 'How much does a website cost? Calculate your price',
      subtitle: 'Choose type, number of pages and features – and get the price of your new, high-converting website sent to you.',
      mainLabel: 'Estimated project price',
      secondaryLabel: 'Or per month (24 months)',
      steps: {
        type: {
          label: 'What type of website?',
          options: {
            landing: { title: 'Landing page', desc: 'One page for a campaign or product' },
            business: { title: 'Company website', desc: 'Present your company and services' },
            cms: { title: 'CMS website', desc: 'Edit content, blog and pages yourself' },
            webshop: { title: 'Webshop', desc: 'Sell online with payments and stock' },
          },
        },
        volume: {
          label: 'Number of pages',
          hint: 'Approx. number of subpages',
          value_one: '{{count}} page',
          value_other: '{{count}} pages',
        },
        design: {
          label: 'Design',
          options: {
            template: { title: 'Template-based', desc: 'Fast to launch and budget-friendly' },
            custom: { title: 'Custom design', desc: 'Unique design based on your brand' },
          },
        },
        features: {
          label: 'Extra features',
          options: {
            seo: { title: 'SEO optimisation' },
            booking: { title: 'Online booking' },
            multilingual: { title: 'Multiple languages' },
            copy: { title: 'Copywriting' },
            integrations: { title: 'Integrations' },
          },
        },
      },
    },
    ai: {
      tab: 'AI solutions',
      title: 'How much does an AI solution cost? Calculate your price',
      subtitle: 'Choose solution, volume and integrations – and get the price of your AI chatbot, AI reception or automation sent to you.',
      mainLabel: 'Estimated setup',
      secondaryLabel: 'Running cost per month',
      steps: {
        solution: {
          label: 'Which AI solution?',
          options: {
            chatbot: { title: 'AI chatbot', desc: 'Answers customers on your website 24/7' },
            reception: { title: 'AI reception', desc: 'Answers the phone and books appointments' },
            automation: { title: 'Automation', desc: 'AI agents that handle routine tasks' },
            integration: { title: 'AI integration', desc: 'AI built into your systems' },
          },
        },
        volume: {
          label: 'Conversations or tasks per month',
          hint: 'Expected volume',
          value_one: '{{count}} per month',
          value_other: '{{count}} per month',
        },
        integrations: {
          label: 'Integrations',
          options: {
            crm: { title: 'CRM' },
            calendar: { title: 'Calendar' },
            email: { title: 'Email' },
            website: { title: 'Website' },
            erp: { title: 'ERP / finance' },
          },
        },
        languages: {
          label: 'Languages',
          options: {
            one: { title: 'Danish', desc: 'One language' },
            two: { title: 'Danish + English', desc: 'Two languages' },
            many: { title: 'Multilingual', desc: 'Three or more languages' },
          },
        },
      },
    },
    game: {
      tab: 'Games',
      title: 'How much does it cost to develop a game? Calculate your price',
      subtitle: 'Choose platform, scope, graphics and features – and get the price of your game sent to you. Getting a price costs nothing.',
      mainLabel: 'Estimated project price',
      secondaryLabel: 'Or per month (24 months)',
      steps: {
        platform: {
          label: 'What type of game?',
          options: {
            web: { title: 'Browser game', desc: 'Played directly in the browser' },
            mobile: { title: 'Mobile game', desc: 'iOS and Android' },
            pc: { title: 'PC and console game', desc: 'Steam and larger productions' },
            learning: { title: 'Learning and company game', desc: 'Gamification, quizzes and campaigns' },
          },
        },
        volume: {
          label: 'Number of levels or screens',
          hint: 'Approx. amount of content',
          value_one: '{{count}} level',
          value_other: '{{count}} levels',
        },
        graphics: {
          label: 'Graphics',
          options: {
            simple2d: { title: 'Simple 2D', desc: 'Clean, stylish graphics' },
            rich2d: { title: 'Detailed 2D', desc: 'Illustrated and animated' },
            threeD: { title: '3D', desc: 'Models, lighting and camera' },
          },
        },
        features: {
          label: 'Features',
          options: {
            multiplayer: { title: 'Multiplayer' },
            leaderboard: { title: 'Leaderboards' },
            payments: { title: 'In-game purchases' },
            analytics: { title: 'Analytics' },
            backend: { title: 'User accounts and backend' },
          },
        },
      },
    },
  },
};
