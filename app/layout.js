// /app/layout.js
import { Inter } from 'next/font/google';
import './globals.css'; 

import MainNavigation from '@/components/MainNavigation';
import Footer from '@/components/Footer';
import ScrollTopButton from '@/components/ScrollTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://relicariorockbar.com.br'),
  title: 'Relicário Rock Bar - Shows ao Vivo em São Paulo',
  description: 'O melhor do rock em São Paulo. Shows ao vivo, cerveja gelada e porções incríveis. Venha curtir música de qualidade na Vila Madalena.',
  keywords: 'rock bar, shows ao vivo, São Paulo, Vila Madalena, música ao vivo, cerveja artesanal',
  openGraph: {
    title: 'Relicário Rock Bar',
    description: 'O melhor do rock em São Paulo',
    images: ['/hero-background2.jpg'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-900 text-white min-h-screen`} style={{
        backgroundImage: 'url("/back.jpg")', 
        backgroundRepeat: 'repeat'
      }}>
        
        <MainNavigation />
        
        <main>
          {children} 
        </main>
        
        <Footer />
        
        <ScrollTopButton />
        
      </body>
    </html>
  );
}