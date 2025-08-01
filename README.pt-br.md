# Next Films
🌏
[**English**][readme-en] |
Português

[![Vercel Deploy][vercel-status]][vercel-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Este projeto está usando o [App Router](https://nextjs.org/docs/app/building-your-application/routing).

Com o Next Films, você pode pesquisar filmes ou visualizar uma lista de filmes que estão atualmente em cartaz nos cinemas ou com base no gênero selecionado e verificar seus detalhes.

## Tabela de conteúdos

* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Demonstração](#demonstração)
  * [Rolagem](#rolagem)
  * [Busca](#busca)
  * [Telas Médias](#telas-médias)
    * [Barra lateral colapsável](#barra-lateral-colapsável)
    * [Favoritando](#favoritando)
  * [Telas Pequenas](#telas-pequenas)
    * [Links Clicáveis](#links-clicáveis)  
* [Capturas de Tela](#capturas-de-tela)
  * [Página de detalhes do filme](#página-de-detalhes-do-filme)
    * [Padrão](#padrão)
    * [Alternativa](#alternativa)
* [Começando](#começando)
* [Rotas](#rotas)
  * [Resumo da Implantação](#resumo-da-implantação)
* [Informações Adicionais](#informações-adicionais) 
* [Autor](#autor)
* [Mostre seu apoio](#mostre-seu-apoio)
* [Licença](#licença)

## Funcionalidades 

- Barra de pesquisa de filmes
- Rolagem infinita *(infinite scrolling)*
- Barra lateral colapsável
- Página de detalhes do filme com informações sobre o filme, incluindo um link para um vídeo[^1], se houver
- Lista de favoritos usando localStorage
- Estado global usando a Context API

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Sass
- react-intersection-observer
- Back-end: API do The Movie Database (TMDB)

## Demonstração

### Rolagem

![next_films_scrolling_demonstration](https://github.com/user-attachments/assets/6c09a10f-e2f9-4837-90a9-e191cb672172)

### Busca

![next_films_search_demonstration](https://github.com/user-attachments/assets/ef729acd-2d5a-4eeb-abd9-221521e25c08)

### Telas Médias

#### Barra lateral colapsável

![next_films_sidebar_demonstration](https://github.com/user-attachments/assets/67278c53-7e25-40b3-991c-17f4d6b2a9f9)

#### Favoritando

![next_films_favoriting_demonstration](https://github.com/user-attachments/assets/42588b4f-5996-4bcd-8c55-154935bf33e1)

### Telas Pequenas

#### Links Clicáveis

Os gêneros de filmes que aparecem na página de detalhes são links clicáveis

![next_films_mobile_demonstration](https://github.com/user-attachments/assets/0838d8b8-6561-4ad4-af29-4c163531d6c7)

## Capturas de Tela

### Página de detalhes do filme

#### Padrão

<img alt="next_films_details_default_screenshot" src="https://github.com/user-attachments/assets/d1b9d435-dd22-4075-bede-c3596a6c49bc" />

#### Alternativa

<img alt="next_films_details_alternative_screenshot" src="https://github.com/user-attachments/assets/12d11ba8-8a4c-47b4-aef4-c60b1874bef5" />

## Começando

Clone o repositório ou faça o download do arquivo zip:

```bash
git clone https://github.com/GuilhermeCCunha/next-films.git
```

Você precisará de uma [conta TMDB](https://www.themoviedb.org/signup) e uma chave de API. Na pasta raiz do projeto, renomeie o arquivo `.env.local.example` para `.env.local`:

Dentro deste arquivo, você verá esta linha: 

```dotenv  
API_KEY=********************************
```
Substitua os asteriscos pela sua chave de API pessoal.

Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Rotas

_/_ - A *homepage* exibe uma lista dos filmes que estão atualmente em cartaz nos cinemas

_/movies/genre/[genreID]_ - página que exibe filmes com base no genero selecionado

_/movies/search?name=[movieName]_ - página que exibe filmes com base nas pesquisas por seus títulos originais, traduzidos e alternativos

_/movie/[movieID]_ - página que exibe detalhes sobre o filme

_/favorites_ - página que exibe uma lista de filmes favoritos

### Resumo da Implantação

!["next_films_routes_vercel](https://github.com/user-attachments/assets/74e91617-ce4d-448d-b286-17d424a9f259) \
*resumo da implantação (deployment summary) - Vercel*

- ƒ - renderizado pelo servidor sob demanda
- ISR - Regeneração Estática Incremental *(Incremental Static Regeneration)*

## Informações Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)

- [Aprenda Next.js](https://nextjs.org/learn)

- [O repositório GitHub do Next.js](https://github.com/vercel/next.js) 

- [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

- [Documentação de implantação *(deployment)* do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## Autor

- GitHub: [@GuilhermeCCunha](https://github.com/GuilhermeCCunha)

## Mostre seu apoio

Por favor, marque com ⭐️ este repositório se você gostou!

## Licença

Copyright © 2025 [Guilherme Cunha](https://github.com/GuilhermeCCunha).<br />
Este projeto está licenciado sob a licença [MIT](https://github.com/GuilhermeCCunha/next-films/blob/main/LICENSE).

[^1]: A API não fornece links para filmes completos, apenas *trailers/behind the scenes/featurettes*, etc...

[readme-en]: https://github.com/GuilhermeCCunha/next-films/blob/main/README.md
[vercel-status]: https://deploy-badge.vercel.app/vercel/next-films-eight?style=flat-square
[vercel-url]: https://next-films-eight.vercel.app/
[github-img]: https://img.shields.io/github/repo-size/GuilhermeCCunha/next-films?logo=github&style=flat-square
[github-url]: https://github.com/GuilhermeCCunha/next-films
[github-commit]: https://img.shields.io/github/last-commit/GuilhermeCCunha/next-films?logo=github&style=flat-square
