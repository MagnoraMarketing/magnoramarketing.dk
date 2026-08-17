import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User, Tag, Share2, ArrowLeft, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Array<{ slug: string; title: string; image: string }>>([]);
  
  useEffect(() => {
    // In a real application, you would fetch the blog post data from an API
    // Here we're using mock data for demonstration purposes
    
    // Simulate fetching the blog post
    setTimeout(() => {
      // Mock blog post data
      const mockPost: BlogPostData = {
        slug: slug || '',
        title: 'Effektive telemarketing-strategier for B2B virksomheder i 2025',
        excerpt: 'Opdagelser og tips til, hvordan din virksomhed kan maksimere resultater gennem moderne telemarketing-teknikker.',
        content: `
          <p>I en digital tidsalder, hvor e-mails og sociale medier dominerer marketinglandskabet, forbliver telemarketing et kraftfuldt værktøj i B2B-salgsprocessen. Den personlige kontakt og muligheden for at etablere en direkte dialog med potentielle kunder kan ikke erstattes af digitale kanaler alene.</p>
          
          <h2>Den personlige kontakts kraft</h2>
          <p>Telemarketing giver virksomheder mulighed for at etablere en menneskelig forbindelse med potentielle kunder. I modsætning til digitale kanaler tillader telefonopkald en tovejskommunikation, hvor sælgere kan lytte til kundernes behov, besvare spørgsmål i realtid og tilpasse deres budskab baseret på feedback.</p>
          
          <p>Undersøgelser viser, at 57% af B2B-købere foretrækker at blive kontaktet telefonisk i den indledende researchfase, især når det drejer sig om komplekse produkter eller tjenester, der kræver uddybende forklaringer.</p>
          
          <h2>Integreret tilgang: Telemarketing meets digital</h2>
          <p>De mest effektive telemarketing-strategier i 2025 kombinerer traditionelle opkaldsteknikker med digital intelligence. Ved at integrere CRM-data, sociale medier-indsigter og automatisering kan telemarketingteams:</p>
          
          <ul>
            <li>Målrette deres indsats mod de mest lovende leads</li>
            <li>Personalisere samtaler baseret på kundens digitale adfærd</li>
            <li>Følge op på det optimale tidspunkt i købsrejsen</li>
            <li>Automatisere rutineopgaver for at fokusere på værdiskabende samtaler</li>
          </ul>
          
          <h2>Bygge højkvalificerede leads gennem strukturerede samtaler</h2>
          <p>Fremtidens telemarketing handler ikke om at følge rigide scripts, men om at facilitere meningsfulde samtaler. Topperformende telemarketingteams bruger samtalerammer, der:</p>
          
          <ol>
            <li>Etablerer troværdighed hurtigt gennem værdibaserede introduktioner</li>
            <li>Stiller åbne, problemfokuserede spørgsmål</li>
            <li>Aktivt lytter og tilpasser værdipropositionen til kundens specifikke udfordringer</li>
            <li>Skaber klare næste skridt med konkrete handlingsopfordringer</li>
          </ol>
          
          <h2>Måling og optimering af resultater</h2>
          <p>Telemarketing i 2025 er drevet af data og konstant optimering. Fremgangsrige virksomheder sporer ikke kun antal opkald og konverteringer, men analyserer samtaleindhold, timing, og kundefeedback for at forbedre deres tilgang kontinuerligt.</p>
          
          <p>Ved at implementere A/B-tests af forskellige samtaletilgange, opkaldstider og opfølgningsstrategier kan teams identificere, hvad der virkelig fungerer for deres specifikke målgruppe og produkttilbud.</p>
          
          <h2>Konklusion</h2>
          <p>Mens teknologien fortsætter med at udvikle sig, forbliver menneske-til-menneske-kontakt en uerstattelig del af B2B-salgsprocessen. Ved at kombinere telefonens personlige touch med digital intelligence, strukturerede samtalerammer og datadrevet optimering, kan B2B-virksomheder maksimere effektiviteten af deres telemarketing-indsats i 2025 og frem.</p>
        `,
        category: 'telemarketing',
        date: '15. august 2023',
        author: 'Mette Hansen',
        authorRole: 'Senior Telemarketing Specialist',
        authorImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['Telemarketing', 'B2B Salg', 'Leadgenerering', 'Salgsstrategier']
      };
      
      setPost(mockPost);
      
      // Mock related posts
      setRelatedPosts([
        {
          slug: 'mødebooking-best-practices',
          title: '7 Best Practices for succesfuld mødebooking i B2B-sektoren',
          image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          slug: 'outsourcing-telemarketing-fordele',
          title: 'Fordele ved at outsource din telemarketing til specialister',
          image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          slug: 'digital-omstilling-telemarketing',
          title: 'Digital omstilling i telemarketing: Trends og muligheder',
          image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]);
      
      // Update document title for SEO
      document.title = `${mockPost.title} | Magnora Marketing Blog`;
    }, 300);
    
    // Scroll to top on page load or slug change
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Indlæser artikel...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {post && (
        <SEO 
          title={`${post.title} | Magnora Marketing Blog`}
          description={post.excerpt}
          canonical={`/blog/${post.slug}`}
        />
      )}
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft size={16} className="mr-2" /> Tilbage til blog
            </Link>
          </div>
          
          {/* Blog Post Header */}
          <header className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wide">
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center text-gray-600 space-x-4 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Blog Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Tags */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="border-t border-b border-gray-200 py-6 mb-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 size={20} className="text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">Del denne artikel:</span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Author */}
              <div className="bg-gray-50 rounded-lg p-6 mb-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">{post.authorRole}</p>
                    <p className="text-gray-700">
                      Mette er specialist i B2B telemarketing med over 10 års erfaring. Hun har hjulpet snesevis af virksomheder med at forbedre deres salgsindsats og leadgenerering gennem effektive telemarketingstrategier.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Relaterede artikler</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/${relatedPost.slug}`} 
                      className="card p-0 overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Box - Telemarketing Services */}
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Få professionel hjælp til din telemarketing</h3>
                <p className="mb-6 text-sm">
                  Vil du have hjælp til at implementere effektive telemarketingstrategier i din virksomhed? Vi tilbyder skræddersyede løsninger, der passer til dine behov.
                </p>
                <div className="space-y-3">
                  <Link to="/samarbejdspartner" className="block w-full bg-white text-blue-600 text-center py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm">
                    Bliv samarbejdspartner
                  </Link>
                  <Link to="/priser" className="block w-full bg-blue-700 text-white text-center py-3 rounded-md font-medium hover:bg-blue-800 transition-colors text-sm">
                    Se vores priser
                  </Link>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-3">Tilmeld nyhedsbrev</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Få de seneste artikler, tips og nyheder om telemarketing og mødebooking direkte i din indbakke.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Din e-mail adresse" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    Tilmeld
                  </button>
                </form>
              </div>
              
              {/* Freelancer Callout */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Bliv freelance sælger</h3>
                <p className="text-green-700 mb-4 text-sm">
                  Er du en dygtig sælger eller mødebooker? Bliv en del af vores team og få fleksible arbejdstider og attraktiv aflønning.
                </p>
                <div className="space-y-2">
                  <Link to="/jobs/arbejd-hjemmefra" className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm">
                    Arbejd hjemmefra <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/freelance-telemarketing" className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm">
                    Se alle stillinger <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <CTASection
        title="Klar til at omsætte viden til resultater?"
        subtitle="Lad Magnora Marketing's specialister hjælpe din virksomhed med at vækste."
        primaryText="Kontakt Magnora Marketing"
        primaryLink="/kontakt"
        secondaryText="Se alle ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPost;