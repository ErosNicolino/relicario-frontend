// /components/ScrollTopButton.js
"use client"; // ESSENCIAL!

import { ArrowUp } from 'lucide-react';

export default function ScrollTopButton() {
  return (
    <a 
      href="#" 
      className="fixed bottom-8 right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-yellow-500 border-2 border-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 z-50 shadow-lg" 
      aria-label="Voltar ao topo da página"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ArrowUp className="w-6 h-6 md:w-8 md:h-8 text-black" />
    </a>
  );
}