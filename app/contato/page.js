// /app/contato/page.js
"use client";

import { MapPin, Mail, Mic, MessageSquare, Headset, Link as LinkIcon, Instagram } from 'lucide-react'; 
import { 
  MotionSection, 
  MotionDiv,
  MotionP
} from "@/components/motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 } 
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

const inputStyle = "w-full bg-zinc-800 border border-zinc-700 p-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors duration-200";

const BookingForm = ({ itemVariants }) => (
  <MotionDiv variants={itemVariants} className="p-6 md:p-8 bg-zinc-800 border-2 border-yellow-400 shadow-xl">
    <h2 className="text-3xl font-black uppercase tracking-wider mb-2 flex items-center">
      <Mic className="w-7 h-7 mr-3 text-yellow-400" />
      Booking: Quero Tocar!
    </h2>
    <p className="text-sm text-gray-400 mb-6">
      Sua banda é foda e quer botar fogo no nosso palco? Mande seu portfólio.
    </p>

    <form 
      action="https://formspree.io/f/mblqdaqo" 
      method="POST" 
      className="space-y-4"
    >
      
      {/* Nome da Banda */}
      <div>
        <label htmlFor="bandName" className="block text-sm font-bold text-white mb-2">Nome da Banda/Artista <span className="text-yellow-400">*</span></label>
        <input type="text" id="bandName" name="bandName" required placeholder="Ex: Black Riffs" className={inputStyle} />
      </div>

      {/* Gênero e Contato */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="genre" className="block text-sm font-bold text-white mb-2">Gênero</label>
          <input type="text" id="genre" name="genre" placeholder="Ex: Stoner Rock" className={inputStyle} />
        </div>
        <div>
          <label htmlFor="bookingEmail" className="block text-sm font-bold text-white mb-2">Email de Contato <span className="text-yellow-400">*</span></label>
          <input type="email" id="bookingEmail" name="_replyto" required placeholder="booking@suabanda.com" className={inputStyle} />
        </div>
      </div>
      
      <div className="space-y-3 pt-2">
        <label htmlFor="bandInsta" className="block text-sm font-bold text-white mb-2 flex items-center"><Instagram className="w-4 h-4 mr-1 text-yellow-400" /> Instagram Handle <span className="text-yellow-400">*</span></label>
        <input 
          type="text" 
          id="bandInsta" 
          name="instagram_handle" 
          required 
          placeholder="@suabanda" 
          className={inputStyle} 
        />
        
        <label htmlFor="bandPortfolio" className="block text-sm font-bold text-white mb-2 flex items-center"><LinkIcon className="w-4 h-4 mr-1 text-yellow-400" /> Link de Portfolio/YouTube</label>
        <input type="url" id="bandPortfolio" name="portfolio" placeholder="Link de vídeo, Spotify, etc." className={inputStyle} />
      </div>

      {/* Informações Adicionais */}
      <div>
        <label htmlFor="bandMessage" className="block text-sm font-bold text-white mb-2">Release / Info Adicional</label>
        <textarea id="bandMessage" name="release" rows="4" placeholder="Breve resumo sobre a banda, cidade, e o que estão procurando." className={inputStyle}></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase tracking-widest py-3 transition-colors duration-200 shadow-md"
      >
        Enviar Proposta
      </button>
      
      <input type="hidden" name="_subject" value="Nova Proposta de Banda (Relicário Rock Bar)" />
      <input type="hidden" name="_next" value="https://relicariorockbar.com.br/contato/sucesso" /> 

    </form>
  </MotionDiv>
);

const GeneralContactForm = ({ itemVariants }) => (
  <MotionDiv variants={itemVariants} className="p-6 md:p-8 bg-zinc-900 border-2 border-zinc-700 shadow-xl">
    <h2 className="text-3xl font-black uppercase tracking-wider mb-2 flex items-center">
      <Headset className="w-7 h-7 mr-3 text-white" />
      Contato Geral / Imprensa
    </h2>
    <p className="text-sm text-gray-400 mb-6">
      Para dúvidas, imprensa, patrocínios ou outras solicitações.
    </p>

    <form 
      action="https://formspree.io/f/xnnljblv" 
      method="POST" 
      className="space-y-4"
    >
      
      {/* Nome e Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="generalName" className="block text-sm font-bold text-white mb-2">Nome</label>
          <input type="text" id="generalName" name="name" placeholder="Seu Nome" className={inputStyle} />
        </div>
        <div>
          <label htmlFor="generalEmail" className="block text-sm font-bold text-white mb-2">Email</label>
          <input type="email" id="generalEmail" name="_replyto" required placeholder="seuemail@exemplo.com" className={inputStyle} />
        </div>
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">Assunto <span className="text-yellow-400">*</span></label>
        <input type="text" id="subject" name="_subject" required placeholder="Ex: Solicitação de Patrocínio" className={inputStyle} />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="generalMessage" className="block text-sm font-bold text-white mb-2">Mensagem</label>
        <textarea id="generalMessage" name="message" rows="6" placeholder="Sua mensagem detalhada aqui..." className={inputStyle}></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-black uppercase tracking-widest py-3 transition-colors duration-200 shadow-md"
      >
        Enviar Mensagem
      </button>

      <input type="hidden" name="_next" value="https://relicariorockbar.com.br/contato/sucesso" /> 

    </form>
  </MotionDiv>
);

export default function ContatoPage() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 } 
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
  
  return (
    <div className="overflow-x-hidden">

      <MotionSection
        className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center py-12 md:py-16 text-center overflow-hidden" 
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
            <h1 
              className="text-5xl md:text-7xl font-black my-4 tracking-wider uppercase" 
              style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }} 
            >
              FALE CONOSCO
            </h1>
          </MotionDiv>
          <MotionP variants={itemVariants} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ouvir sua banda ou sua proposta.
          </MotionP>
        </div>
      </MotionSection>
      
      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24 bg-zinc-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            <BookingForm itemVariants={itemVariants} />
            
            <GeneralContactForm itemVariants={itemVariants} />
            
          </div>
          
          <MotionDiv variants={itemVariants} className="mt-16 p-8 bg-zinc-800 border-t-4 border-yellow-400 text-center">
            <h3 className="text-2xl font-black uppercase tracking-wider mb-3">VISITE-NOS</h3>
            <p className="text-lg text-gray-300 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
              Rua Manoel de lima, 178 - Jordanópolis, SP
            </p>
            <p className="text-lg text-gray-300 mt-2 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2 text-yellow-400" />
              relicario.rock.bar@gmail.com
            </p>
          </MotionDiv>

        </div>
      </MotionSection>
    </div>
  );
}