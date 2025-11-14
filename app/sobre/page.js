// /app/sobre/page.js
"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { 
  MotionSection, 
  MotionDiv, 
  MotionH2, 
  MotionP 
} from "@/components/motion";
import { ArrowRight, Star, Instagram } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut", 
      staggerChildren: 0.3 
    } 
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};
const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } 
  },
};

export default function SobrePage() {
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
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <MotionDiv variants={itemVariants}>
            <span className="text-yellow-400 font-bold tracking-widest uppercase">A Origem</span>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black my-4 tracking-wider uppercase" 
              style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }} 
            >
              A ALMA DO ROCK EM SÃO PAULO
            </h1>
          </MotionDiv>
          <MotionP variants={itemVariants} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Isto não é só um bar. É um templo. Um refúgio.
            Isto é o Relicário.
          </MotionP>
        </div>
      </MotionSection>
      
      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24 bg-black/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <MotionP variants={itemVariants} className="text-2xl md:text-4xl font-bold leading-relaxed text-gray-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            "Nosso palco não é só um palco. É um <span className="text-yellow-400">altar</span>.
            Nossas paredes não são só paredes. Elas <span className="text-yellow-400">respiram as lendas</span>.
            Cada cerveja gelada é um brinde aos que fizeram história."
          </MotionP>
        </div>
      </MotionSection>

      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <MotionH2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-wider text-center">
            OS GUARDIÕES DO TEMPLO
          </MotionH2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <MotionDiv variants={itemVariants} className="flex flex-col items-center text-center">
              <MotionDiv 
                variants={photoVariants} 
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-zinc-700 shadow-lg"
              >
                <Image 
                  src="/ele.jpg" 
                  alt="Foto do Fundador 1"
                  fill
                  sizes="300px"
                  style={{ objectFit: 'cover' }}
                  unoptimized={true}
                  className="grayscale transition-all duration-500 hover:grayscale-0"
                />
              </MotionDiv>
              <h3 className="text-3xl font-bold mt-6 mb-2 uppercase tracking-wider">O MESTRE</h3>
              <p className="text-yellow-400 font-bold mb-4">Mauricio</p>
              <p className="text-gray-300 max-w-md">
                A lenda por trás da curadoria das bandas e da cerveja sempre no ponto. Ele garante que o som seja puro, alto e autêntico.
              </p>
            </MotionDiv>
            
            <MotionDiv variants={itemVariants} className="flex flex-col items-center text-center">
              <MotionDiv 
                variants={photoVariants} 
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-zinc-700 shadow-lg"
              >
                <Image 
                  src="/ela.jpg" 
                  alt="Foto da Fundadora 2"
                  fill
                  sizes="300px"
                  style={{ objectFit: 'cover' }}
                  unoptimized={true}
                  className="grayscale transition-all duration-500 hover:grayscale-0"
                />
              </MotionDiv>
              <h3 className="text-3xl font-bold mt-6 mb-2 uppercase tracking-wider">A ALMA</h3>
              <p className="text-yellow-400 font-bold mb-4">Camilla</p>
              <p className="text-gray-300 max-w-md">
                A alma do Relicário. Ela transforma clientes em família e garante que cada noite seja uma experiência memorável.
              </p>
            </MotionDiv>
            
          </div>
        </div>
      </MotionSection>
      
      <MotionSection
        id="galeria"
        className="px-4 md:px-8 py-16 md:py-24 bg-black/50 border-t-2 border-zinc-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <MotionH2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-wider text-center">
            MOMENTOS E MEMÓRIAS
          </MotionH2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <MotionDiv variants={itemVariants} className="group relative h-80 overflow-hidden border-2 border-zinc-700 shadow-lg">
              <Image src="/galeria1.jpg" alt="Foto da galeria do bar" fill style={{ objectFit: 'cover' }} unoptimized={true} className="transition-transform duration-500 group-hover:scale-110" />
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="group relative h-80 overflow-hidden border-2 border-zinc-700 shadow-lg md:translate-y-8">
              <Image src="/galeria2.jpg" alt="Foto da galeria do bar" fill style={{ objectFit: 'cover' }} unoptimized={true} className="transition-transform duration-500 group-hover:scale-110" />
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="group relative h-80 overflow-hidden border-2 border-zinc-700 shadow-lg">
              <Image src="/galeria3.jpg" alt="Foto da galeria do bar" fill style={{ objectFit: 'cover' }} unoptimized={true} className="transition-transform duration-500 group-hover:scale-110" />
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="group relative h-80 overflow-hidden border-2 border-zinc-700 shadow-lg md:translate-y-8">
              <Image src="/galeria4.jpg" alt="Foto da galeria do bar" fill style={{ objectFit: 'cover' }} unoptimized={true} className="transition-transform duration-500 group-hover:scale-110" />
            </MotionDiv>
          </div>
          
          <MotionDiv variants={itemVariants} className="text-center mt-12">
            
            <a 
              href="https://instagram.com/relicasrockbar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xl font-bold bg-yellow-400 text-black px-8 py-4 uppercase tracking-widest transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg"
              aria-label="Ver nosso Instagram"
            >
              <Instagram className="w-6 h-6" /> 
              Ver no Instagram 
            </a>

          </MotionDiv>
        </div>
      </MotionSection>

    </div>
  );
}