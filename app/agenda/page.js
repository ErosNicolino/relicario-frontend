// /app/agenda/page.js
import AgendaList from '@/components/AgendaList';

async function getShows() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
  try {

    const res = await fetch(`${strapiUrl}/api/agendas?populate=capa&sort=data:desc&pagination[limit]=6`, {
      next: { revalidate: 300 } 
    }); 
    
    if (!res.ok) {
      console.error('Erro na API:', res.status);
      return [];
    }
    const { data } = await res.json();
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar shows:', error);
    return []; 
  }
}

export const metadata = {
  title: "Agenda de Shows - Relica's Rock Bar",
  description: "Confira a programação completa de shows ao vivo no Relica's Rock Bar. Não perca as melhores bandas de rock de São Paulo.",
  openGraph: {
    title: "Agenda de Shows - Relica's Rock Bar",
    description: 'A agenda de rock mais quente de SP.',
    images: ['/fund-madeira.jpg'], 
  },
};

export default async function AgendaPage() {
  const shows = await getShows();
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

  return (
    <AgendaList shows={shows} strapiUrl={strapiUrl} />
  );
}