// /components/Footer.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { 
  MotionSection, 
  MotionDiv 
} from "@/components/motion";

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

export default function Footer() {
  const dividerColor = '#464648'; 

  return (
    <MotionSection
      id="contato" 
      className="px-4 md:px-8 py-12 border-t-4 border-yellow-400 bg-black/50" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          <MotionDiv variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Navegação</h3>
            <div className="space-y-3 flex flex-col items-center md:items-start"> 
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Início</Link>
              <Link href="/sobre" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Sobre o Bar</Link>
              <Link href="/agenda" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Agenda</Link>
              <Link href="/cardapio" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Cardápio</Link>
            </div>
          </MotionDiv>

          <MotionDiv variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-6">
              <div 
                className="relative w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border"
                style={{ borderColor: dividerColor }}
              >
                <Image 
                  src="/logo.png" 
                  alt="Logo Relica's Rock Bar"
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://facebook.com/relicasrockbar" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Siga-nos no Facebook"
                className="flex items-center space-x-3 group"
              >
                <Facebook className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
              </a>
              <a 
                href="https://instagram.com/relicasrockbar" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Siga-nos no Instagram"
                className="flex items-center space-x-3 group"
              >
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
              </a>
            </div>
          </MotionDiv>

          <MotionDiv variants={itemVariants} id="localizacao" className="flex flex-col items-center md:items-end md:text-right"> 
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Endereço</h3>
            <address className="not-italic text-sm text-gray-400 mb-4">
              Rua Manoel de lima, 178<br />
              Jordanópolis, SP
            </address>
            <p className="text-sm text-gray-400">
              <a href="tel:+5511911460550" className="hover:text-yellow-400 transition-colors duration-200">
                (11) 91146-0550
              </a>
            </p>
          </MotionDiv>
        </div>

        <div className="border-t border-zinc-800 pt-12">
          <MotionDiv variants={itemVariants} className="max-w-md mx-auto flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Receba a agenda e promoções direto no seu e-mail.
            </p>
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email para newsletter</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 bg-zinc-800 border border-zinc-700 px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                aria-label="Digite seu email"
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 px-4 text-black font-bold"
                aria-label="Inscrever-se na newsletter"
              >
                →
              </button>
            </form>
          </MotionDiv>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Relica's Rock Bar. Todos os direitos reservados.
        </div>
      </div>
    </MotionSection>
  );
}