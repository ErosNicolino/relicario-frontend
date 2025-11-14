// /components/AgendaList.js
"use client"; 

import Image from 'next/image';
import { 
  MotionSection, 
  MotionDiv 
} from "@/components/motion";
import { Clock, Ticket } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut", 
      staggerChildren: 0.1 
    } 
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
};

function formatPrice(price) {
  if (price === null || price === undefined) {
    return null; 
  }
  if (price === 0) {
    return 'Entrada Franca';
  }
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function formatShowDate(dateString) {
  const date = new Date(dateString);
  const day = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit' });
  const month = date.toLocaleDateString('pt-BR', { timeZone: 'UTC', month: 'short' }).toUpperCase().replace('.', '');
  const time = date.toLocaleTimeString('pt-BR', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });
  return { day, month, time };
}


export default function AgendaList({ shows, strapiUrl }) {
  
  const hasShows = shows && shows.length > 0;
  const now = new Date(); 

  return (
    <div className="overflow-x-hidden">

      <MotionSection
        className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center py-12 md:py-16 text-center overflow-hidden" 
        style={{
          backgroundImage: 'url("/fund-madeira.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black my-4 tracking-wider uppercase" 
            style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }} 
          >
            AGENDA DE SHOWS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            O rock não para. Confira quem vai subir no nosso palco e garanta seu lugar.
          </p>
        </div>
      </MotionSection>
      
      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          
          {hasShows ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              
              {shows.map((show) => {
                const { day, month, time } = formatShowDate(show.data);
                const isPast = new Date(show.data) < now; 
                const precoFormatado = formatPrice(show.preco); 
                
                return (
                  <MotionDiv 
                    key={show.id} 
                    variants={itemVariants} 
                    className={`group relative flex flex-col bg-zinc-900 border-2 border-zinc-800 shadow-lg rounded-lg overflow-hidden ${
                      isPast 
                        ? 'grayscale opacity-60' 
                        : 'transition-all duration-300 hover:border-yellow-400'
                    }`}
                  >
                    <div className="relative w-full h-80">
                      {show.capa && show.capa.url ? (
                        <Image 
                          src={strapiUrl + show.capa.url}
                          alt={show.name || 'Flyer do show'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          unoptimized={true}
                          className={isPast ? '' : 'transition-transform duration-500 group-hover:scale-110'}
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                          <p className="text-gray-500">Sem Imagem</p>
                        </div>
                      )}
                      
                      <div className={`absolute top-4 left-4 w-20 h-20 text-black flex flex-col items-center justify-center rounded-full shadow-lg border-4 border-black ${
                        isPast ? 'bg-zinc-500' : 'bg-yellow-400'
                      }`}>
                        <span className="text-4xl font-black leading-none">{day}</span>
                        <span className="text-sm font-bold uppercase tracking-widest">{month}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      
                      <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-4">
                        {show.name}
                      </h3>
                      
                      <div className="mt-4 pt-4 border-t border-zinc-700 flex justify-between items-center">
                        
                        <div className={`flex items-center font-bold text-lg ${
                          isPast ? 'text-gray-400' : 'text-yellow-400'
                        }`}>
                          <Clock className="w-5 h-5 mr-2" />
                          <span>{time}</span>
                        </div>
                        
                        {precoFormatado && (
                          <div className={`flex items-center text-xl font-black ${
                            isPast ? 'text-gray-500' 
                            : precoFormatado === 'Entrada Franca' 
                              ? 'text-green-400' 
                              : 'text-yellow-400' 
                          }`}>
                            <Ticket className="w-5 h-5 mr-2" />
                            <span>{precoFormatado}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {isPast && (
                      <div className="absolute inset-0 flex items-center justify-center z-10" aria-hidden="true">
                        <div 
                          className="bg-red-600 text-white font-black uppercase tracking-widest text-2xl px-16 py-3 -rotate-[30deg] border-4 border-white shadow-lg"
                        >
                          ENCERRADO
                        </div>
                      </div>
                    )}

                  </MotionDiv>
                );
              })}
              
            </div>
          ) : (
            <MotionDiv 
              className="text-center py-24 bg-zinc-800/50 rounded-lg border-2 border-zinc-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-yellow-400 text-3xl font-bold mb-4">🎸</p>
              <p className="text-2xl font-bold mb-2">Agenda em Atualização</p>
              <p className="text-gray-400 text-lg">Nenhum show cadastrado no momento. Volte em breve!</p>
            </MotionDiv>
          )}
          
        </div>
      </MotionSection>

    </div>
  );
}