export default {
  badge: 'Prisberegner',
  tabsLabel: 'Vælg ydelse',
  resultHeading: 'Dit prisestimat',
  locked: 'Lås prisen op',
  lockedText: 'Udfyld firmanavn og telefonnummer, og klik på "Få pris". Så beregner vi din præcise pris og vender tilbage med et skræddersyet tilbud – typisk inden for 24 timer.',
  cta: 'Få pris',
  trust: ['Uforpligtende', 'Svar inden for 24 timer', 'Gratis rådgivning'],
  vatNote: 'Alle priser er ekskl. moms. Den endelige pris afhænger af en kort afklaring af din opgave.',
  lead: {
    heading: 'Hvem skal vi sende prisen til?',
    company: 'Firmanavn',
    phone: 'Telefonnummer',
    phoneInvalid: 'Indtast et gyldigt telefonnummer (mindst 8 cifre).',
  },
  multiHint: 'Vælg gerne flere',
  noneSelected: 'Ingen valgt',
  currency: '{{value}} kr.',
  sourceLabel: 'Prisberegner',
  contactBanner: {
    title: 'Dine valg fra prisberegneren er klar',
    text: 'Vi har udfyldt formularen med dine valg, dit firmanavn og telefonnummer. Tilføj dit navn og din e-mail, og send – så kontakter vi dig med din pris.',
  },
  message: {
    intro: 'Hej Magnora Marketing,\n\nJeg har brugt prisberegneren for {{calculator}} og vil gerne have min pris tilsendt. Mine valg:',
    outro: 'Evt. supplerende oplysninger om min virksomhed og opgave:',
  },
  shared: {
    audience: {
      label: 'Hvem er jeres målgruppe?',
      options: {
        smb: { title: 'SMV-ejere', desc: 'Ejerledere og små virksomheder' },
        manager: { title: 'Ledere', desc: 'Afdelings- og mellemledere' },
        csuite: { title: 'Direktion', desc: 'C-niveau og topledelse' },
      },
    },
    period: {
      label: 'Aftaleperiode',
      options: {
        '1': { title: '1 måned', desc: 'Pilotperiode' },
        '3': { title: '3 måneder', desc: 'Rabat' },
        '6': { title: '6 måneder', desc: 'Mere rabat' },
        '12': { title: '12 måneder', desc: 'Bedste pris' },
      },
    },
  },
  variants: {
    meetings: {
      tab: 'Mødebooking',
      title: 'Hvad koster mødebooking? Beregn din pris',
      subtitle: 'Vælg prismodel, antal møder og målgruppe – og få din pris på professionel B2B-mødebooking tilsendt.',
      mainLabel: 'Estimeret pris pr. måned',
      secondaryLabel: 'Pris pr. møde',
      steps: {
        model: {
          label: 'Vælg prismodel',
          options: {
            perMeeting: { title: 'No Cure No Pay', desc: 'Betal kun for afholdte, kvalificerede møder' },
            package: { title: 'Pakkeløsning', desc: 'Fast månedspris og laveste pris pr. møde' },
          },
        },
        volume: {
          label: 'Antal møder pr. måned',
          hint: 'Træk for at vælge',
          value_one: '{{count}} møde',
          value_other: '{{count}} møder',
        },
      },
    },
    telemarketing: {
      tab: 'Telemarketing',
      title: 'Hvad koster telemarketing? Beregn din pris',
      subtitle: 'Fortæl os om formålet, antal ringetimer og målgruppen – så sender vi dig prisen på din telemarketingkampagne.',
      mainLabel: 'Estimeret pris pr. måned',
      secondaryLabel: 'Pris pr. ringetime',
      steps: {
        goal: {
          label: 'Hvad er formålet med kampagnen?',
          options: {
            meetings: { title: 'Booke møder', desc: 'Salgsmøder med beslutningstagere' },
            sales: { title: 'Direkte salg', desc: 'Lukke aftaler i telefonen' },
            leads: { title: 'Leads & research', desc: 'Kvalificere og afdække emner' },
          },
        },
        volume: {
          label: 'Ringetimer pr. måned',
          hint: 'Træk for at vælge',
          value_one: '{{count}} time',
          value_other: '{{count}} timer',
        },
      },
    },
    website: {
      tab: 'Hjemmeside',
      title: 'Hvad koster en hjemmeside? Beregn din pris',
      subtitle: 'Vælg type, antal sider og funktioner – og få prisen på din nye, konverteringsstærke hjemmeside tilsendt.',
      mainLabel: 'Estimeret projektpris',
      secondaryLabel: 'Eller pr. måned (24 mdr.)',
      steps: {
        type: {
          label: 'Hvilken type hjemmeside?',
          options: {
            landing: { title: 'Landingsside', desc: 'Én side til kampagne eller produkt' },
            business: { title: 'Firmahjemmeside', desc: 'Præsentation af virksomhed og ydelser' },
            cms: { title: 'CMS-hjemmeside', desc: 'Redigér selv indhold, blog og sider' },
            webshop: { title: 'Webshop', desc: 'Salg online med betaling og lager' },
          },
        },
        volume: {
          label: 'Antal sider',
          hint: 'Ca. antal undersider',
          value_one: '{{count}} side',
          value_other: '{{count}} sider',
        },
        design: {
          label: 'Design',
          options: {
            template: { title: 'Skabelonbaseret', desc: 'Hurtigt i luften og budgetvenligt' },
            custom: { title: 'Skræddersyet design', desc: 'Unikt design efter jeres brand' },
          },
        },
        features: {
          label: 'Ekstra funktioner',
          options: {
            seo: { title: 'SEO-optimering' },
            booking: { title: 'Online booking' },
            multilingual: { title: 'Flere sprog' },
            copy: { title: 'Tekstforfatning' },
            integrations: { title: 'Integrationer' },
          },
        },
      },
    },
    ai: {
      tab: 'AI-løsninger',
      title: 'Hvad koster en AI-løsning? Beregn din pris',
      subtitle: 'Vælg løsning, volumen og integrationer – og få prisen på din AI-chatbot, AI-reception eller automatisering tilsendt.',
      mainLabel: 'Estimeret opsætning',
      secondaryLabel: 'Drift pr. måned',
      steps: {
        solution: {
          label: 'Hvilken AI-løsning?',
          options: {
            chatbot: { title: 'AI-chatbot', desc: 'Svarer kunder på hjemmesiden 24/7' },
            reception: { title: 'AI-reception', desc: 'Tager telefonen og booker tider' },
            automation: { title: 'Automatisering', desc: 'AI-agenter der løser rutineopgaver' },
            integration: { title: 'AI-integration', desc: 'AI bygget ind i jeres systemer' },
          },
        },
        volume: {
          label: 'Samtaler eller opgaver pr. måned',
          hint: 'Forventet volumen',
          value_one: '{{count}} pr. md.',
          value_other: '{{count}} pr. md.',
        },
        integrations: {
          label: 'Integrationer',
          options: {
            crm: { title: 'CRM' },
            calendar: { title: 'Kalender' },
            email: { title: 'E-mail' },
            website: { title: 'Hjemmeside' },
            erp: { title: 'ERP / økonomi' },
          },
        },
        languages: {
          label: 'Sprog',
          options: {
            one: { title: 'Dansk', desc: 'Ét sprog' },
            two: { title: 'Dansk + engelsk', desc: 'To sprog' },
            many: { title: 'Flersproget', desc: 'Tre eller flere sprog' },
          },
        },
      },
    },
  },
};
