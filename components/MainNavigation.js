// /components/MainNavigation.js
"use client"; 

import Image from 'next/image';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import { useState } from 'react'; 
import { Menu, X } from 'lucide-react';

const dividerColor = '#464648';

export default function MainNavigation() {
  
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const activeClasses = "text-yellow-400 border-b-2 border-yellow-400 pb-1 whitespace-nowrap transition-colors duration-200";
  const inactiveClasses = "text-gray-400 hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap";

  const mobileActiveClasses = "text-3xl font-black uppercase text-yellow-400";
  const mobileInactiveClasses = "text-3xl font-black uppercase text-gray-400 hover:text-yellow-400 transition-all duration-200";

  return (
    <>
      <nav className="sticky top-0 bg-zinc-900/95 backdrop-blur-md z-50 py-2" role="navigation" aria-label="Menu principal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative h-16">
          
          <div className="hidden md:flex items-center justify-center h-full space-x-4 lg:space-x-6 text-xs uppercase font-bold tracking-widest">
            <Link 
              href="/" 
              className={pathname === '/' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              INÍCIO
            </Link>
            <div className="w-px h-4 bg-zinc-700"></div>
            <Link 
              href="/sobre" 
              className={pathname === '/sobre' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/sobre' ? 'page' : undefined}
            >
              SOBRE O BAR
            </Link>
            <div className="w-px h-4 bg-zinc-700"></div>
            <Link 
              href="/agenda" 
              className={pathname === '/agenda' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/agenda' ? 'page' : undefined}
            >
              AGENDA
            </Link>
            
            <div className="w-[120px] h-full flex-shrink-0"></div> 
            
            <Link 
              href="/cardapio" 
              className={pathname === '/cardapio' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/cardapio' ? 'page' : undefined}
            >
              CARDÁPIO
            </Link>
            <div className="w-px h-4 bg-zinc-700"></div>
            <Link 
              href="/localizacao" 
              className={pathname === '/localizacao' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/localizacao' ? 'page' : undefined}
            >
              LOCALIZAÇÃO
            </Link>
            <div className="w-px h-4 bg-zinc-700"></div>
            <Link 
              href="/contato" 
              className={pathname === '/contato' ? activeClasses : inactiveClasses}
              aria-current={pathname === '/contato' ? 'page' : undefined}
            >
              CONTATO
            </Link>
          </div>
          
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-4rem)] h-px"
            style={{ backgroundColor: dividerColor }} 
            aria-hidden="true"
          ></div>
          
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border"
              style={{ borderColor: dividerColor }}
            >
              <Image 
                src="/logo.png" 
                alt="Logo Relicário Rock Bar" 
                fill 
                sizes="(max-width: 1024px) 80px, 96px"
                style={{ objectFit: 'contain' }} 
                priority
                unoptimized={true}
              />
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between h-full">
            <Link href="/" className="relative w-12 h-12 z-10">
              <Image 
                src="/logo.png" 
                alt="Logo Relicário Rock Bar" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
                unoptimized={true}
              />
            </Link>
            
            <button 
              onClick={() => setIsOpen(true)} 
              aria-label="Abrir menu"
              className="p-2 z-10"
            >
              <Menu className="w-8 h-8 text-white" />
            </button>
          </div>

        </div>
      </nav>

      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black z-[100] p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-16">
            <Link href="/" className="relative w-12 h-12" onClick={() => setIsOpen(false)}>
              <Image src="/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} unoptimized={true} />
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Fechar menu" className="p-2">
              <X className="w-10 h-10 text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 flex-1">
            <Link href="/" className={pathname === '/' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>INÍCIO</Link>
            <Link href="/sobre" className={pathname === '/sobre' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>SOBRE O BAR</Link>
            <Link href="/agenda" className={pathname === '/agenda' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>AGENDA</Link>
            <Link href="/cardapio" className={pathname === '/cardapio' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>CARDÁPIO</Link>
            <Link href="/localizacao" className={pathname === '/localizacao' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>LOCALIZAÇÃO</Link>
            <Link href="/contato" className={pathname === '/contato' ? mobileActiveClasses : mobileInactiveClasses} onClick={() => setIsOpen(false)}>CONTATO</Link>
          </div>
        </div>
      )}
    </>
  );
}