// /components/MainNavigation.js
"use client"; 

import Image from 'next/image';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

const dividerColor = '#464648';

export default function MainNavigation() {
  
  const pathname = usePathname(); 

  const activeClasses = "text-yellow-400 border-b-2 border-yellow-400 pb-1 whitespace-nowrap transition-colors duration-200";
  const inactiveClasses = "text-gray-400 hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap";

  return (
    <nav className="sticky top-0 bg-zinc-900/95 backdrop-blur-md z-50 py-2" role="navigation" aria-label="Menu principal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative h-auto md:h-16">
        
        <div className="flex flex-col md:flex-row items-center justify-center h-full space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-xs uppercase font-bold tracking-widest py-4 md:py-0">
          
          <Link 
            href="/" 
            className={pathname === '/' ? activeClasses : inactiveClasses} 
            aria-label="Ir para início" 
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            INÍCIO
          </Link>
          <div className="hidden md:block w-px h-4 bg-zinc-700"></div>
          <Link 
            href="/sobre" 
            className={pathname === '/sobre' ? activeClasses : inactiveClasses} 
            aria-label="Ir para sobre o bar"
            aria-current={pathname === '/sobre' ? 'page' : undefined}
          >
            SOBRE O BAR
          </Link>
          <div className="hidden md:block w-px h-4 bg-zinc-700"></div>
          <Link 
            href="/agenda" 
            className={pathname === '/agenda' ? activeClasses : inactiveClasses}
            aria-label="Ir para agenda de shows"
            aria-current={pathname === '/agenda' ? 'page' : undefined}
          >
            AGENDA
          </Link>
          
          <div className="hidden md:block w-[120px] h-full flex-shrink-0"></div>
          
          <Link 
            href="/cardapio" 
            className={pathname === '/cardapio' ? activeClasses : inactiveClasses} 
            aria-label="Ir para cardápio"
            aria-current={pathname === '/cardapio' ? 'page' : undefined}
          >
            CARDÁPIO
          </Link>
          <div className="hidden md:block w-px h-4 bg-zinc-700"></div>
          <Link 
            href="/localizacao" 
            className={pathname === '/localizacao' ? activeClasses : inactiveClasses} 
            aria-label="Ir para localização"
            aria-current={pathname === '/localizacao' ? 'page' : undefined}
          >
            LOCALIZAÇÃO
          </Link>
          <div className="hidden md:block w-px h-4 bg-zinc-700"></div>
          <Link 
            href="/contato" 
            className={pathname === '/contato' ? activeClasses : inactiveClasses} 
            aria-label="Ir para contato"
            aria-current={pathname === '/contato' ? 'page' : undefined}
          >
            CONTATO
          </Link>
        </div>
        
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-px"
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
              alt="Logo Relica's Rock Bar" 
              fill 
              sizes="(max-width: 1024px) 80px, 96px"
              style={{ objectFit: 'contain' }} 
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}