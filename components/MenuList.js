// /components/MenuList.js
"use client"; 

import { 
  MotionSection, 
  MotionDiv 
} from "@/components/motion";
import { Axe, Beer, UtensilsCrossed, Zap, Drumstick, Star } from 'lucide-react'; 

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

function formatPrice(price) {
  if (price === null || price === undefined) {
    return null; 
  }
  if (price === 0) {
    return 'Cortesia';
  }
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function getCategoryIcon(category) {
  const map = {
    'CERVEJAS': { icon: Beer, color: 'bg-yellow-400' },
    'DRINKS CLÁSSICOS': { icon: Zap, color: 'bg-red-600' },
    'DRINKS DA CASA': { icon: Star, color: 'bg-blue-400' },
    'CHOPES': { icon: Axe, color: 'bg-yellow-400' },
    'SEM ÁLCOOL': { icon: Drumstick, color: 'bg-gray-400' },
    'PETISCOS': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'HAMBÚRGUERES': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'PORÇÕES FRITAS': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'PORÇÕES ESPECIAIS': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'PORÇÕES FRIAS': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'ESPETINHOS': { icon: UtensilsCrossed, color: 'bg-yellow-400' },
    'DESTILADOS': { icon: Zap, color: 'bg-red-600' },
    'CLÁSSICOS DE BAR': { icon: Star, color: 'bg-yellow-400' },
  };
  return map[category] || { icon: Axe, color: 'bg-zinc-600' };
}


export default function MenuList({ groupedMenu }) {
  
  const categories = Object.keys(groupedMenu);

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
            CARDÁPIO
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Matando a sua fome e a sua sede com o melhor do Rock 'n' Roll.
          </p>
        </div>
      </MotionSection>
      
      <MotionSection
        className="px-4 md:px-8 py-16 md:py-24"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto">
          
          {categories.length > 0 ? (
            
            categories.map(category => {
              const { icon: Icon, color } = getCategoryIcon(category);
              
              return (
                <MotionDiv 
                    key={category} 
                    className="mb-16"
                    initial="hidden" 
                    animate="visible"
                    variants={{
                        visible: { 
                            transition: { 
                                staggerChildren: 0.05 
                            } 
                        }
                    }}
                >
                  
                  {/* TÍTULO DA CATEGORIA */}
                  <div className={`relative mb-12 py-3 px-4 ${color} text-black shadow-2xl`}>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-widest flex items-center">
                      <Icon className="inline-block w-6 h-6 md:w-8 md:h-8 mr-3" />
                      {category}
                    </h2>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-white/50"></div>
                  </div>

                  {/* Grid de Itens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

                    {groupedMenu[category].map(item => (
                      <MotionDiv key={item.id} variants={itemVariants}> 
                        
                        {/* Layout do item */}
                        <div className="flex flex-col justify-between pt-1 pb-4 border-b border-zinc-700">
                          
                          {/* Nome e Preço */}
                          <div className="flex justify-between items-baseline gap-4">
                            {/* Nome do Item */}
                            <h3 className="text-lg font-extrabold uppercase tracking-wide text-gray-200">
                              {item.name}
                            </h3>
                            
                            {/* Preço */}
                            <span className="text-lg font-black text-yellow-400 whitespace-nowrap">
                              {formatPrice(item.preco)}
                            </span>
                          </div>

                          {/* Descrição */}
                          {item.descricao && (
                            <p className="text-sm text-gray-400 mt-1 italic">
                              {item.descricao}
                            </p>
                          )}

                        </div>
                      </MotionDiv>
                    ))}
                    
                  </div>
                </MotionDiv>
              );
            })

          ) : (
            <MotionDiv 
              className="text-center py-24 bg-zinc-800/50 rounded-lg border-2 border-zinc-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-yellow-400 text-3xl font-bold mb-4">🍔</p>
              <p className="text-2xl font-bold mb-2">Cardápio em Construção</p>
              <p className="text-gray-400 text-lg">Estamos preparando novidades. Volte em breve!</p>
            </MotionDiv>
          )}
          
        </div>
      </MotionSection>

    </div>
  );
}