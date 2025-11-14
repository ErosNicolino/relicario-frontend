// /app/cardapio/page.js

import MenuList from '@/components/MenuList';

async function getMenu() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
  
  const fieldsToFetch = ['name', 'preco', 'categoria'];
  const fieldsQuery = fieldsToFetch.map((field, index) => `fields[${index}]=${field}`).join('&');

  try {
    const res = await fetch(
      `${strapiUrl}/api/cardapios?${fieldsQuery}&pagination[limit]=100`, 
      { next: { revalidate: 300 } } 
    ); 

    if (!res.ok) {
      console.error('Erro na API:', res.status);
      return []; 
    }
    const { data } = await res.json();
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar itens do cardápio:', error);
    return []; 
  }
}

export const metadata = {
  title: 'Cardápio - Relicário Rock Bar',
  description: 'Confira nosso cardápio completo com as melhores cervejas, drinks, lanches e porções. Matando sua fome e sua sede com muito rock.',
  openGraph: {
    title: 'Cardápio - Relicário Rock Bar',
    description: 'Cervejas, Lanches, Porções e Drinks.',
    images: ['/hero-background2.jpg'], 
  },
};

export default async function CardapioPage() {
  const items = await getMenu();
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'; 

  const groupedMenu = items.reduce((acc, item) => {
    const category = item.categoria || 'Outros'; 
    
    if (!acc[category]) {
      acc[category] = [];
    }
    
    acc[category].push(item);
    
    return acc;
  }, {}); 

  return (
    <MenuList groupedMenu={groupedMenu} />
  );
}