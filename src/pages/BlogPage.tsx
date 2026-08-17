import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone, Globe, Cpu, TrendingUp, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface Post { slug: string; title: string; description: string; date: string; }

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  badgeColor: string;
  posts: Post[];
}

const BlogPage: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'samarbejde',
      label: 'Samarbejde & Vækst',
      icon: <HeartHandshake size={22} />,
      color: 'from-blue-600 to-indigo-800',
      badgeColor: 'bg-blue-100 text-blue-700',
      posts: [
        { slug: 'hvorfor-samarbejde-magnora', title: 'Hvorfor samarbejde med Magnora Marketing? 8 grunde til at vælge os', description: 'De 8 vigtigste grunde til at vælge Magnora Marketing som vækstpartner inden for idéudvikling, mødebooking og telesalg.', date: '2026-07-01' },
        { slug: 'ideudvikling-med-magnora', title: 'Idéudvikling med Magnora Marketing: Fra koncept til markedsklar løsning', description: 'Har du en idé, men mangler vejen til markedet? Sådan hjælper vi fra koncept til en løsning, der reelt sælger.', date: '2026-07-02' },
        { slug: 'fra-ide-til-salg', title: 'Fra idé til salg: Sådan tager Magnora din forretningsidé til markedet', description: 'De fire faser fra idé og koncept til digital løsning, mødebooking og betalende kunder – med én samlet partner.', date: '2026-07-03' },
        { slug: 'moedebooking-partner-magnora', title: 'Mødebooking-partner: Derfor skal du samarbejde med Magnora Marketing', description: 'Vi fylder din kalender med kvalificerede møder hos de rette beslutningstagere – kvalitet frem for kvantitet.', date: '2026-07-04' },
        { slug: 'outsource-moedebooking-fordele', title: 'Outsource din mødebooking: 7 fordele ved at samarbejde med Magnora', description: 'Hurtigere opstart, lavere risiko og flere kvalificerede møder – de 7 fordele ved ekstern mødebooking.', date: '2026-07-05' },
        { slug: 'telesalg-partner-magnora', title: 'Telesalg-partner: Hvorfor Magnora Marketing skaber resultater', description: 'Erfarne B2B-sælgere, skræddersyede scripts og fuld transparens – derfor virker vores telesalg.', date: '2026-07-06' },
        { slug: 'b2b-telesalg-samarbejde', title: 'B2B telesalg-samarbejde: Sådan booster Magnora din pipeline', description: 'Fra ideel kundeprofil og prospektering til kvalificerede møder og en pipeline, der vokser.', date: '2026-07-07' },
        { slug: 'vaekstpartner-ide-moedebooking-telesalg', title: 'Én vækstpartner til idéudvikling, mødebooking og telesalg', description: 'Hvorfor jonglere med flere leverandører? Saml idéudvikling, mødebooking og telesalg hos én partner.', date: '2026-07-08' },
        { slug: 'saadan-foregaar-samarbejdet', title: 'Sådan foregår et samarbejde med Magnora Marketing – trin for trin', description: 'Fra første uforpligtende snak til de første kvalificerede møder – enkelt, hurtigt og transparent.', date: '2026-07-09' },
        { slug: 'hvorfor-outsource-salg-og-moedebooking', title: 'Hvorfor outsource dit salg og din mødebooking til Magnora?', description: 'Hvornår det giver mening at outsource telesalg og mødebooking – og hvilke fordele det giver din vækst.', date: '2026-07-10' },
      ],
    },
    {
      id: 'telesalg',
      label: 'Telesalg & Mødebooking',
      icon: <Phone size={22} />,
      color: 'from-blue-700 to-blue-900',
      badgeColor: 'bg-blue-100 text-blue-700',
      posts: [
        { slug: 'telesalg-2026', title: 'Telesalg i 2026: Teknikker og strategier for moderne sælgere', description: 'Telesalg er ikke død – det har bare ændret sig. Her er de teknikker der virker i et moderne B2B salgslandskab.', date: '2026-03-05' },
        { slug: 'modebooking-2026', title: 'Effektiv Mødebooking i 2026: Strategier der virker', description: 'Få de bedste metoder og scripts til professionel mødebooking i 2026 – og se hvorfor kvalitet slår kvantitet.', date: '2026-02-20' },
        { slug: 'outbound-sales-2026', title: 'Outbound Sales 2026: Byg en salgsmaskine der skalerer', description: 'En komplet guide til at bygge og optimere din outbound salgsmotor i 2026 – fra prospektering til lukket aftale.', date: '2026-03-20' },
        { slug: 'hvorfor-magnora-telesalg', title: 'Hvorfor vælge Magnora Marketing til telesalg?', description: 'Magnora Marketing leverer professionelt B2B telesalg med erfarne konsulenter, datadrevne metoder og dokumenterede resultater.', date: '2026-05-20' },
        { slug: 'hvorfor-magnora-moedebooking', title: 'Hvorfor vælge Magnora Marketing til mødebooking?', description: 'Magnora Marketing booker kvalificerede møder med beslutningstagere – og leverer konsistent høj mødekvalitet.', date: '2026-05-25' },
        { slug: 'outsourcing-telesalg-2026', title: 'Outsourcing af Telesalg i 2026: Fordele, faldgruber og krav', description: 'Alt du skal vide om at outsource dit telesalg i 2026 – inkl. hvad du skal kræve af en partner.', date: '2026-06-01' },
        { slug: 'moedebooking-scripts-2026', title: 'Mødebooking Scripts 2026: Konkrete eksempler der virker', description: 'Effektive scripteksempler til mødebooking i 2026 – inkl. åbningssætninger, indvendingshåndtering og closing.', date: '2026-06-10' },
        { slug: 'cold-calling-vs-inbound', title: 'Cold Calling vs. Inbound: Hvad virker bedst i 2026?', description: 'En grundig sammenligning af cold calling og inbound marketing – og hvordan "allbound"-kombinationen skaber de bedste resultater.', date: '2026-06-29' },
        { slug: 'b2b-salg-strategi-2026', title: 'B2B Salgsstrategi i 2026: 5 fundamenter der skaber vækst', description: 'De 5 fundamenter i en moderne B2B salgsstrategi: ICP-definition, prospektering, dialog, pipeline-styring og closing.', date: '2026-06-05' },
        { slug: 'leadgenerering-strategier-2026', title: 'Leadgenerering Strategier 2026: 5 metoder der virker', description: 'De 5 mest effektive leadgenereringsstrategier i 2026: SEO, outbound, LinkedIn, ABM og webinarer.', date: '2026-06-15' },
        { slug: 'hvad-er-bant-2026', title: 'Hvad er BANT? Framework til kvalificering af B2B leads i 2026', description: 'BANT-frameworket forklaret med eksempelspørgsmål for alle 4 faktorer.', date: '2026-06-20' },
        { slug: 'vaekst-partner-guide', title: 'Vækstpartner Guide: Hvornår skal du hyre en ekstern partner?', description: 'Hvad er en vækstpartner, hvornår giver det mening at hyre en, og hvad skal du kræve?', date: '2026-06-23' },
        { slug: 'startup-til-vaekst-2026', title: 'Fra Startup til Vækst i 2026: 3 skaleringsmodeller', description: 'De 3 primære skaleringsmodeller for startups og vækstvirksomheder i 2026.', date: '2026-06-26' },
      ],
    },
    {
      id: 'webudvikling',
      label: 'Webudvikling',
      icon: <Globe size={22} />,
      color: 'from-indigo-700 to-indigo-900',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      posts: [
        { slug: 'hvorfor-magnora-webudvikling', title: 'Hvorfor vælge Magnora Marketing til webudvikling?', description: 'Magnora Marketing kombinerer teknisk ekspertise med kommerciel indsigt for at levere hjemmesider der sælger.', date: '2026-04-25' },
        { slug: 'hjemmeside-til-vaekst-2026', title: 'Hjemmeside til Vækst i 2026: Hvad B2B-kunder forventer', description: 'Den digitale rejse for B2B-buyers i 2026 – og hvad der skal til for at din hjemmeside konverterer.', date: '2026-05-05' },
        { slug: 'websitekonvertering-tips', title: '10 tips til bedre websitekonvertering for B2B virksomheder', description: 'Konkrete CRO-tips der øger konverteringsraten på din B2B hjemmeside – fra landingssider til formularer.', date: '2026-05-15' },
        { slug: 'saas-loesninger-2026', title: 'SaaS-løsninger i 2026: Hvad B2B virksomheder bør vide', description: 'En gennemgang af de vigtigste SaaS-trends i 2026 og hvordan B2B virksomheder kan drage fordel af cloud-platforme.', date: '2026-01-15' },
        { slug: 'hvorfor-saas-2026', title: 'Hvorfor SaaS i 2026? Fordele for B2B virksomheder', description: 'SaaS-løsninger giver fleksibilitet, lavere TCO og hurtigere skalerbarhed.', date: '2026-04-01' },
        { slug: 'saas-vs-on-premise', title: 'SaaS vs. On-Premise: Hvad passer til din virksomhed i 2026?', description: 'En grundig sammenligning inkl. hybridmodeller og hvornår det ene er bedre end det andet.', date: '2026-04-05' },
        { slug: 'bedste-saas-tools-2026', title: 'De 10 bedste SaaS-tools til B2B virksomheder i 2026', description: 'Top 10 SaaS-platforme der driver vækst, effektivitet og salg for B2B virksomheder.', date: '2026-04-10' },
        { slug: 'saas-integration-2026', title: 'SaaS Integration i 2026: Sådan forbinder du dine platforme', description: 'Lær de 3 integrationsniveauer og de 5 høj-ROI integrationer din virksomhed bør prioritere.', date: '2026-04-15' },
        { slug: 'saas-security-gdpr', title: 'SaaS Sikkerhed & GDPR: Hvad du skal vide i 2026', description: 'GDPR-compliance, DPA-aftaler og datasikkerhed i cloud. En komplet tjekliste til valg af GDPR-sikre løsninger.', date: '2026-04-20' },
      ],
    },
    {
      id: 'ai',
      label: 'AI Integration',
      icon: <Cpu size={22} />,
      color: 'from-violet-700 to-violet-900',
      badgeColor: 'bg-violet-100 text-violet-700',
      posts: [
        { slug: '100-bud-ai-opgaveloesning', title: '100 bud: Sådan kan AI hjælpe jer i opgaveløsningen', description: 'Fra oversættelse af tekster til input i en svær sag – 100 konkrete bud på, hvordan AI kan hjælpe jer i opgaveløsningen og spare tid i hverdagen.', date: '2026-07-26' },
        { slug: 'bliv-ai-konsulent-karriere', title: 'Bliv AI-konsulent: Karrieren i front af fremtidens teknologi', description: 'Drømmer du om et fremtidssikret job hjemmefra? Se hvad det indebærer at blive AI-konsulent – og hvordan du søger.', date: '2026-07-25' },
        { slug: 'bedste-ai-loesninger-smv', title: 'De 7 mest værdifulde AI-løsninger for små og mellemstore virksomheder', description: 'De 7 AI-løsninger, der sparer mest tid, sænker omkostninger og skaber vækst for SMV\'er – prioriteret efter effekt.', date: '2026-07-24' },
        { slug: 'ai-salg-moedebooking-fremtid', title: 'AI i salg og mødebooking: Fremtidens vækstmotor', description: 'Fra lead scoring til automatisk opfølgning – sådan bliver AI fremtidens vækstmotor i B2B-salg og mødebooking.', date: '2026-07-22' },
        { slug: 'hvorfor-ai-nu-2026', title: 'Derfor skal din virksomhed tage stilling til AI nu – ikke om to år', description: 'AI-udviklingen accelererer, og forspringet til konkurrenterne vokser hver måned. Derfor skal I tage stilling nu.', date: '2026-07-20' },
        { slug: 'ai-reception-telefonassistent', title: 'AI-reception og AI-telefonassistenter: Aldrig gå glip af et opkald igen', description: 'En AI-reception besvarer opkald, svarer på spørgsmål og booker aftaler – døgnet rundt. Se hvordan det virker.', date: '2026-07-18' },
        { slug: 'generativ-ai-forretningsvaerdi', title: 'Fra ChatGPT til forretningsværdi: Sådan bruger virksomheder generativ AI', description: 'Generativ AI er blevet allemandseje – men hvordan skaber virksomheder reel forretningsværdi med det?', date: '2026-07-16' },
        { slug: 'ai-kundeservice-doegnet-rundt', title: 'AI-kundeservice døgnet rundt: Fremtidens support er allerede her', description: 'AI-kundeservice svarer dine kunder øjeblikkeligt – 24/7. Se hvordan AI-chat og AI-support løfter kundeoplevelsen.', date: '2026-07-15' },
        { slug: 'ai-sparer-tid-virksomhed', title: 'Sådan sparer AI din virksomhed for hundredvis af timer om året', description: 'AI kan automatisere tidskrævende opgaver og frigøre hundredvis af arbejdstimer om året. Se de konkrete områder.', date: '2026-07-14' },
        { slug: 'ai-agenter-automatisering-2026', title: 'AI-agenter: Den næste bølge af automatisering for virksomheder', description: 'AI-agenter kan selvstændigt udføre opgaver på tværs af dine systemer. Mød fremtidens digitale medarbejdere.', date: '2026-07-13' },
        { slug: 'fremtidens-ai-loesninger-2026', title: 'Fremtidens AI-løsninger: Sådan forandrer kunstig intelligens danske virksomheder', description: 'Få indblik i fremtidens AI-løsninger, og hvordan kunstig intelligens allerede nu forandrer danske virksomheder.', date: '2026-07-12' },
        { slug: 'hvorfor-magnora-ai-integration', title: 'Hvorfor vælge Magnora Marketing til AI-integration?', description: 'Magnora Marketing hjælper B2B virksomheder med at implementere AI-løsninger der skaber målbare resultater.', date: '2026-05-01' },
        { slug: 'ai-automation-2026', title: 'AI Automation i Salg: Sådan bruger du det rigtigt i 2026', description: 'Kunstig intelligens forandrer salgsindsatsen. Lær hvordan du implementerer AI-automation og øger konverteringsraten.', date: '2026-02-01' },
        { slug: 'ai-integration-roi-2026', title: 'AI Integration ROI i 2026: Hvornår betaler det sig?', description: 'Top 5 AI-initiativer med dokumenteret effekt – og hvornår det IKKE betaler sig at investere i AI.', date: '2026-05-10' },
      ],
    },
  ];

  const PostCard = ({ post, badgeLabel, badgeColor }: { post: Post; badgeLabel: string; badgeColor: string }) => (
    <Link to={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>{badgeLabel}</span>
        <h3 className="text-lg font-bold mt-4 mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
          <span className="text-blue-600 font-medium flex items-center gap-1">Læs mere <ArrowRight size={14} /></span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <SEO
        title="Blog | Magnora Marketing – Indsigt om B2B Salg, Mødebooking og Vækst"
        description="Magnora Marketing's blog med praktiske guides, tips og trends inden for B2B salg, mødebooking, telemarketing, leadgenerering og digital vækst for erhvervsvirksomheder."
        canonical="/blog"
        keywords="Magnora Marketing blog, B2B salg tips, mødebooking guide, telemarketing artikler, salgsstrategi 2026"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Magnora Marketing Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Praktisk viden og konkrete råd om B2B salg, mødebooking, webudvikling og AI-integration.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="py-16 odd:bg-white even:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${cat.color} text-white px-5 py-2.5 rounded-full mb-8`}>
              {cat.icon}
              <h2 className="text-lg font-bold">{cat.label}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.posts.map((post, i) => (
                <PostCard key={i} post={post} badgeLabel={cat.label} badgeColor={cat.badgeColor} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <FAQSection faqs={[
        { question: 'Hvad skriver Magnora Marketing om på bloggen?', answer: 'Magnora Marketing\'s blog dækker emner som B2B telemarketing, mødebooking, leadgenerering, webudvikling, AI-integration og salgsoptimering.' },
        { question: 'Hvem skriver artiklerne?', answer: 'Artiklerne skrives af Magnora Marketing\'s team af salgs- og digitalspecialister baseret på praktisk erfaring og aktuel brancheviden.' },
        { question: 'Kan jeg bruge Magnora Marketing\'s blogindhold i min virksomhed?', answer: 'Du er velkommen til at dele og referere til vores indhold. Kontakt os, hvis du ønsker at bruge indholdet kommercielt.' },
        { question: "Hvor ofte udgiver Magnora Marketing nye blogindlæg?", answer: "Vi udgiver løbende indlæg om B2B salg, telemarketing, webudvikling og AI-trends. Følg vores blog for de seneste opdateringer." },
        { question: "Kan jeg tilmelde mig et nyhedsbrev?", answer: "Kontakt os og angiv at du gerne vil modtage vores nyhedsbrev med de seneste indsigter og tips." },
        { question: "Skriver Magnora Marketing om specifikke brancher?", answer: "Ja – vi dækker brancher som SaaS, energi, finans, HR og servicevirksomheder med praksisnære artikler og cases." },
        { question: "Kan jeg foreslå emner til bloggen?", answer: "Ja – send os dine forslag via kontaktformularen. Vi skriver gerne om emner der er relevante for vores læsere." },
        { question: "Bruger Magnora Marketing AI til at skrive blogindlæg?", answer: "Vi bruger AI som hjælpeværktøj til research og struktur, men alle artikler kvalitetssikres og godkendes af vores faglige team." },
        { question: "Er blogindlæggene SEO-optimerede?", answer: "Ja – alle Magnora Marketing's blogindlæg skrives med SEO som fokus, inkl. relevante søgeord, meta-beskrivelser og struktureret indhold." },
        { question: "Kan jeg dele Magnora Marketing's artikler på LinkedIn?", answer: "Ja – du er meget velkommen til at dele vores artikler på sociale medier. Vi sætter pris på at budskabet spredes." },
        { question: "Skriver Magnora Marketing gæsteindlæg for andre medier?", answer: "Ja – vi samarbejder med brancherelevante medier og platforme. Kontakt os hvis du er interesseret i et samarbejde." },
        { question: "Er artiklerne tilgængelige på engelsk?", answer: "Primært skriver vi på dansk, men vi har udvalgte artikler og materialer på engelsk til internationale kunder." },
        { question: "Kan jeg citere Magnora Marketing's artikler i mit eget indhold?", answer: "Ja – du er velkommen til at citere vores artikler med reference til magnoramarketing.dk som kilde." },
      ]} />
      <CTASection
        title="Hold dig opdateret – og lad Magnora Marketing drive din vækst"
        subtitle="Læs vores seneste artikler om B2B salg, mødebooking og digital vækst – og kontakt os, når du er klar til at komme i gang."
        primaryText="Kontakt Magnora Marketing"
        primaryLink="/kontakt"
        secondaryText="Se ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPage;
