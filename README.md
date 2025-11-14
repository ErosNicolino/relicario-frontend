# Relicário Rock Bar -- Frontend (Next.js)

Este repositório contém o código do site oficial do Relicário Rock Bar.
O frontend foi construído com Next.js, oferecendo alto desempenho, SEO
sólido e integração direta com o Strapi CMS.

------------------------------------------------------------------------

## Visão Geral

O objetivo do frontend é:

-   Exibir agenda de shows.
-   Apresentar cardápio completo do bar.
-   Mostrar fotos, informações e identidade visual premium.
-   Integrar diretamente com o backend via API REST.

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   Next.js (App Router)
-   React
-   Tailwind CSS
-   Framer Motion
-   fetch API para comunicação com o Strapi
-   Vercel (Deploy)

------------------------------------------------------------------------

## Estrutura

    frontend/
      app/
      components/
      lib/
      public/
      styles/

Páginas dinâmicas são carregadas automaticamente a partir do CMS.

------------------------------------------------------------------------

## Como Rodar Localmente

1.  Instale dependências:

```{=html}
<!-- -->
```
    npm install

2.  Crie o arquivo `.env.local`:

```{=html}
<!-- -->
```
    NEXT_PUBLIC_STRAPI_URL=http://127.0.0.1:1337

3.  Execute o servidor:

```{=html}
<!-- -->
```
    npm run dev

4.  Abra o navegador em:

```{=html}
<!-- -->
```
    http://localhost:3000

------------------------------------------------------------------------

## Deploy na Vercel

1.  Suba o frontend para um repositório GitHub.
2.  Na Vercel, importe o repositório.
3.  Configure a variável de ambiente:
    -   NEXT_PUBLIC_STRAPI_URL
4.  Deploy automático.

------------------------------------------------------------------------

## Estrutura de Comunicação

O frontend consome endpoints públicos do Strapi como:

    /api/agenda
    /api/cardapio
    /api/upload

A cada atualização publicada no CMS, o site reflete automaticamente.

------------------------------------------------------------------------

## Licença

Uso restrito para o Relicário Rock Bar.
