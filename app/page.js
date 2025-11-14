// /app/page.js
import Image from 'next/image';
import Link from 'next/link'; 
import { 
  MotionSection, 
  MotionDiv, 
  MotionH2, 
  MotionP 
} from "@/components/motion";

import HomeAgendaCarousel from '@/components/HomeAgendaCarousel'; 

async function getShows() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
  
  try {
    const res = await fetch(
      `${strapiUrl}/api/agendas?populate=capa` +
      `&sort=data:desc` +                 
      `&pagination[limit]=6`,             
      { next: { revalidate: 300 } } 
    ); 

    if (!res.ok) {
      console.error('Erro na API:', res.status);
      return [];
    }
    const { data } = await res.json();
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar shows:', error);
    return []; 
  }
}

export default async function HomePage() {
  const shows = await getShows(); 
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section 
        className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center py-12 md:py-16 overflow-hidden" 
        style={{
          backgroundImage: 'url("/hero-background2.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Seção principal"
      >
        <div className="absolute inset-0 bg-black/70"></div> 
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-8">
          
          <div className="hidden lg:block w-full lg:w-1/3">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-[400px] lg:h-[500px]"
            >
            </MotionDiv>
          </div>
          
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-2/3 lg:pl-16"
          >
            <div className="relative">
              <MotionDiv
                initial={{ opacity: 0, rotate: -6 }}
                animate={{ opacity: 1, rotate: 6 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-8 md:-top-12 right-0 text-xs md:text-sm border-2 border-white px-3 md:px-4 py-1 md:py-2 rotate-6 font-bold tracking-widest text-white"
              >
                BANDAS AO VIVO
              </MotionDiv>
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 tracking-wider uppercase" 
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }} 
              >
                Relica's
              </h1>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl text-base md:text-lg">
                O melhor do rock 'n' roll em São Paulo. Venha curtir shows ao vivo, cerveja gelada e as melhores porções. 
                O Relica's é a sua casa de rock, um ponto de encontro para amigos e amantes da boa música.
              </p>
              <p className="text-yellow-400 mb-6 md:mb-8 font-bold text-sm md:text-base">
                Veja a nossa <Link href="/agenda" className="underline cursor-pointer transition-colors duration-200 hover:text-white">Agenda de Shows</Link> e não perca nada.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
                <MotionDiv variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-2 text-yellow-400 text-3xl md:text-4xl mx-auto">
                    🎸
                  </div>
                  <div className="text-xs text-yellow-400 font-bold">MÚSICA AO VIVO</div>
                </MotionDiv>
                <MotionDiv variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-2 text-yellow-400 text-3xl md:text-4xl mx-auto">
                    🍺
                  </div>
                  <div className="text-xs text-yellow-400 font-bold">CERVEJA GELADA</div>
                </MotionDiv>
                <MotionDiv variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-2 text-yellow-400 text-3xl md:text-4xl mx-auto">
                    🍔
                  </div>
                  <div className="text-xs text-yellow-400 font-bold">BOAS PORÇÕES</div>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <MotionSection
        id="sobre"
        className="px-4 md:px-8 py-12 md:py-16 bg-black/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <MotionDiv 
            variants={itemVariants} 
            className="relative overflow-hidden border-2 border-zinc-700 min-h-[400px]"
          >
            <Image 
              src="/sobre-foto1.jpg" 
              alt="Interior aconchegante do Relica's Rock Bar" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }} 
              className="opacity-30" 
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-center">
              <span className="text-sm text-yellow-400 mb-2 font-bold">A ORIGEM</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider">NOSSA HISTÓRIA</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                O Relica's Rock Bar nasceu da paixão de uma família pelo rock 'n' roll. Um sonho de criar um lugar autêntico...
              </p>
              <Link href="/sobre" className="px-6 py-2 border border-white w-fit font-bold hover:bg-white hover:text-zinc-900 transition-colors duration-200 text-sm">
                Leia mais &raquo;
              </Link>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            variants={itemVariants} 
            className="relative overflow-hidden border-2 border-zinc-700 min-h-[400px]"
          >
            <Image 
              src="/sobre-foto2.jpg" 
              alt="Palco do Relica's Rock Bar" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }} 
              className="opacity-30" 
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-center">
              <span className="text-sm text-yellow-400 mb-2 font-bold">O PALCO</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider">O AMBIENTE</h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Mais do que um bar, um refúgio.<br />
                Aqui, cada detalhe é pensado para você.
              </p>
              <Link 
                href="https://instagram.com/relicasrockbar" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-white w-fit font-bold hover:bg-white hover:text-zinc-900 transition-colors duration-200 text-sm"
                aria-label="Ver galeria de fotos"
              >
                Ver no Instagram
              </Link>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      <HomeAgendaCarousel shows={shows} strapiUrl={strapiUrl} />

      <MotionSection
        className="px-4 md:px-8 py-12 md:py-16 bg-black/50 border-t-4 border-yellow-400"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <MotionH2 variants={itemVariants} className="text-3xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-wider">
            O QUE DIZEM POR AÍ
          </MotionH2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            <MotionDiv variants={itemVariants} className="bg-zinc-900 p-6 border-t-2 border-yellow-400">
              <div className="text-yellow-400 text-sm mb-3">10 NOV, 2024</div>
              <p className="text-sm text-gray-300 mb-4">"Amoooo esse lugar"</p>
              <div className="text-xs text-gray-500">@michellesrcruz</div>
            </MotionDiv>
            
            <MotionDiv variants={itemVariants} className="bg-zinc-900 p-6 border-t-2 border-yellow-400">
              <div className="text-yellow-400 text-sm mb-3">03 MAR, 2025</div>
              <p className="text-sm text-gray-300 mb-4">"Estarei lá com certeza!!! 🔥🔥"</p>
              <div className="text-xs text-gray-500">@wgsilva.sousa</div>
            </MotionDiv>
            
            <MotionDiv variants={itemVariants} className="bg-zinc-900 p-6 border-t-2 border-yellow-400">
              <div className="text-yellow-400 text-sm mb-3">16 MAI, 2025</div>
              <p className="text-sm text-gray-300 mb-4">"Esse dia vai ser foda"</p>
              <div className="text-xs text-gray-500">@aleejmmy</div>
            </MotionDiv>
            
            <MotionDiv variants={itemVariants} className="bg-zinc-900 p-6 border-t-2 border-yellow-400">
              <div className="text-yellow-400 text-sm mb-3">07 NOV, 2025</div>
              <p className="text-sm text-gray-300 mb-4">"Não perco hein 🔥"</p>
              <div className="text-xs text-gray-500">@mpliveproducoes</div>
            </MotionDiv>

          </div>
        </div>
      </MotionSection>
    </>
  );
}