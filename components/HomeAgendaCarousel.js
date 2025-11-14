// /components/HomeAgendaCarousel.js
"use client";

import Image from 'next/image';
import { 
  MotionSection, 
  MotionDiv,
  MotionH2,
  MotionP
} from "@/components/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function formatShowDate(dateString) {
  const date = new Date(dateString);
  const day = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit' });
  const month = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', month: 'short' }).toUpperCase().replace('.', '');
  return { day, month };
}

export default function HomeAgendaCarousel({ shows, strapiUrl }) {

  const hasShows = shows && shows.length > 0;
  const now = new Date(); 

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
    <MotionSection
      id="agenda" 
      className="px-4 md:px-8 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <MotionH2 variants={itemVariants} className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wider">
          AGENDA DA SEMANA
        </MotionH2>
        <MotionP variants={itemVariants} className="text-gray-300 mb-8 md:mb-12 max-w-2xl text-base md:text-lg">
          Confira quem vai subir no nosso palco. A casa abre às 19:30h.
          Não perca!
        </MotionP>
        <MotionDiv variants={itemVariants} className="relative">
          {hasShows ? (
            <Carousel 
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                
                {shows.map((show) => {
                  const { day, month } = formatShowDate(show.data);
                  const isPast = new Date(show.data) < now; 
                  
                  return (
                    <CarouselItem key={show.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className={`group relative ${isPast ? 'grayscale opacity-60' : ''}`}>
                        
                        {show.capa && show.capa.url ? (
                          <div className="w-full h-80 md:h-96 relative overflow-hidden rounded-lg border-2 border-zinc-700">
                            <Image 
                              src={strapiUrl + show.capa.url}
                              alt={show.name || 'Flyer do show'}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              style={{ objectFit: 'cover' }}
                              className={isPast ? '' : 'transition-transform duration-300 group-hover:scale-110'}
                              unoptimized={true}
                            />
                          </div>
                        ) : ( 
                          <div className="w-full h-80 md:h-96 relative overflow-hidden rounded-lg bg-gray-700 flex items-center justify-center border-2 border-zinc-700">
                            <p>Sem Imagem</p>
                          </div> 
                        )}
                        
                        <h3 className="text-xl md:text-2xl font-bold text-center mt-4 uppercase">{show.name}</h3>
                        <p className={`text-center font-bold ${isPast ? 'text-gray-500' : 'text-yellow-400'}`}>
                          {new Date(show.data).toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </p>

                        {isPast && (
                          <div className="absolute inset-0 flex items-center justify-center z-10" aria-hidden="true">
                            <div 
                              className="bg-red-600 text-white font-black uppercase tracking-widest text-xl px-12 py-2 -rotate-[30deg] border-4 border-white shadow-lg"
                            >
                              ENCERRADO
                            </div>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}

              </CarouselContent>
              <CarouselPrevious className="text-black bg-white/70 hover:bg-white -left-4 md:-left-12" />
              <CarouselNext className="text-black bg-white/70 hover:bg-white -right-4 md:-right-12" />
            </Carousel>
          ) : ( 
            <div className="text-center py-12 bg-zinc-800/50 rounded-lg border-2 border-zinc-700">
              <p className="text-yellow-400 text-xl font-bold mb-2">🎸 Nenhum show cadastrado no momento</p>
              <p className="text-gray-400">Volte em breve para conferir nossa programação!</p>
            </div> 
          )}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}