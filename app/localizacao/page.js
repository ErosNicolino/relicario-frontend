// /app/localizacao/page.js
"use client"; 

import { MapPin, Clock, Car, Bus, Users, Mail } from 'lucide-react';
import { 
  MotionSection, 
  MotionDiv 
} from "@/components/motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function LocalizacaoPage() {

  const address = 'Rua Manoel de lima, 178 - Jordanópolis, SP';
  const hours = [
    { day: 'Quarta à Quinta', time: '19h30 - 02h00' },
    { day: 'Sexta à Sábado', time: '19h30 - 05h00' },
    { day: 'Domingo', time: 'Fechado' },
    { day: 'Segunda e Terça', time: 'Fechado' },
  ];
  
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
            <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          </MotionDiv>
          <MotionDiv variants={itemVariants}>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black my-4 tracking-wider uppercase" 
              style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }} 
            >
              ONDE ESTAMOS
            </h1>
          </MotionDiv>
          <MotionDiv variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Seu refúgio de rock no coração de São Paulo. Encontre o Relica's.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>
      
      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24 bg-black/50"
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <MotionDiv variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-4xl font-black uppercase tracking-wider mb-6 text-white">
              <MapPin className="inline w-7 h-7 mr-2 text-yellow-400" />
              Nosso Endereço
            </h2>
            
            <div className="relative w-full h-[400px] border-4 border-zinc-700 shadow-xl overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Localização do Relicário Rock Bar no mapa"
              ></iframe>
            </div>

            <MotionDiv variants={itemVariants} className="mt-6 p-4 bg-zinc-900 border border-zinc-700">
              <address className="not-italic text-lg text-gray-300 font-bold flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                {address}
              </address>
              <a 
                href={mapLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-yellow-400 font-bold hover:text-white transition-colors underline"
              >
                Abrir no Google Maps
              </a>
            </MotionDiv>
          </MotionDiv>

          <div className="flex flex-col gap-12">
            
            <MotionDiv variants={itemVariants} className="p-6 border-2 border-zinc-700 bg-zinc-900 shadow-lg">
              <h3 className="text-3xl font-black uppercase tracking-wider mb-6 text-white flex items-center">
                <Clock className="w-6 h-6 mr-3 text-yellow-400" />
                Horários
              </h3>
              <ul className="space-y-3">
                {hours.map((item) => (
                  <li key={item.day} className={`flex justify-between font-bold ${item.time === 'Fechado' ? 'text-red-500' : 'text-gray-300'}`}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-700 text-sm text-gray-400 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Chegue cedo para garantir seu lugar no show!
              </div>
            </MotionDiv>

            <MotionDiv variants={itemVariants} className="p-6 border-2 border-zinc-700 bg-zinc-900 shadow-lg">
              <h3 className="text-3xl font-black uppercase tracking-wider mb-6 text-white">
                Acesso
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300 font-bold">
                  <Car className="w-6 h-6 mr-3 text-yellow-400" />
                  Estacionamento: Ruas laterais e estacionamentos próximos.
                </li>
              </ul>
            </MotionDiv>

          </div>
        </div>
      </MotionSection>

    </div>
  );
}