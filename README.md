# Next Films
🌏
English |
[**Português**][readme-pt-br]

[![Vercel Deploy][vercel-status]][vercel-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project is using the [App Router](https://nextjs.org/docs/app/building-your-application/routing).

With Next Films, you can search for movies or view a list of movies that are currently in theatres or based on the given genre and check their details.

## Table of contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Demonstration](#demonstration)
  * [Scrolling](#scrolling)
  * [Search](#search)
  * [Medium Screens](#medium-screens)
    * [Collapsible sidebar](#collapsible-sidebar)
    * [Favoriting](#favoriting)
  * [Small Screens](#small-screens)
    * [Clickable Links](#clickable-links)  
* [Screenshots](#screenshots)
  * [Movie details page](#movie-details-page)
    * [Default](#default)
    * [Alternative](#alternative)
* [Getting Started](#getting-started)
* [Routes](#routes)
  * [Deployment Summary](#deployment-summary)
* [Additional Information](#additional-information) 
* [Author](#author)
* [Show your support](#show-your-support)
* [License](#license)

## Features

- Movie search bar
- Infinite scrolling
- Collapsible sidebar
- Movie details page with movie information, including a link to a video[^1] if it exists
- Favorites List using localStorage
- Global state using Context API

## Tech Stack

- Next.js
- React
- TypeScript
- Sass
- react-intersection-observer
- Back-end: The Movie Database (TMDB) API

## Demonstration

### Scrolling

![next_films_scrolling_demonstration](https://github.com/user-attachments/assets/6c09a10f-e2f9-4837-90a9-e191cb672172)

### Search

![next_films_search_demonstration](https://github.com/user-attachments/assets/ef729acd-2d5a-4eeb-abd9-221521e25c08)

### Medium Screens

#### Collapsible sidebar

![next_films_sidebar_demonstration](https://github.com/user-attachments/assets/67278c53-7e25-40b3-991c-17f4d6b2a9f9)

#### Favoriting

![next_films_favoriting_demonstration](https://github.com/user-attachments/assets/42588b4f-5996-4bcd-8c55-154935bf33e1)

### Small Screens

#### Clickable Links

The movie genres that appear on the details page are clickable links

![next_films_mobile_demonstration](https://github.com/user-attachments/assets/0838d8b8-6561-4ad4-af29-4c163531d6c7)

## Screenshots

### Movie details page

#### Default

<img alt="next_films_details_default_screenshot" src="https://github.com/user-attachments/assets/d1b9d435-dd22-4075-bede-c3596a6c49bc" />

#### Alternative

<img alt="next_films_details_alternative_screenshot" src="https://github.com/user-attachments/assets/12d11ba8-8a4c-47b4-aef4-c60b1874bef5" />

## Getting Started

Clone or download zip file

```bash
git clone https://github.com/GuilhermeCCunha/next-films.git
```

You will need a [TMDB account](https://www.themoviedb.org/signup) and an API key. In the project root folder, rename the file `.env.local.example` to `.env.local`:

Inside this file, you will see this line: 

```dotenv  
API_KEY=********************************
```
Replace the asterisks with your personal API key.

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

_/_ - homepage displays a list of movies that are currently in theatres

_/movies/genre/[genreID]_ - page that displays movies based on the given genre

_/movies/search?name=[movieName]_ - page that displays movies based on searches for their original, translated and alternative titles

_/movie/[movieID]_ - page that displays details about the movie

_/favorites_ - page that displays a list of favorite movies

### Deployment Summary

!["next_films_routes_vercel](https://github.com/user-attachments/assets/74e91617-ce4d-448d-b286-17d424a9f259) \
*deployment summary - Vercel*

- ƒ - server-rendered on demand
- ISR - Incremental Static Regeneration

## Additional Information

- [Next.js Documentation](https://nextjs.org/docs)

- [Learn Next.js](https://nextjs.org/learn)

- [The Next.js GitHub repository](https://github.com/vercel/next.js) 

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Author

- GitHub: [@GuilhermeCCunha](https://github.com/GuilhermeCCunha)

## Show your support

Please ⭐️ this repository if you liked it!

## License

Copyright © 2025 [Guilherme Cunha](https://github.com/GuilhermeCCunha).<br />
This project is [MIT](https://github.com/GuilhermeCCunha/next-films/blob/main/LICENSE) licensed.

[^1]: The API doesn't provide any links to actual movies, only trailers/behind the scenes/featurettes, etc...

[readme-pt-br]: https://github.com/GuilhermeCCunha/next-films/blob/main/README.pt-br.md
[vercel-status]: https://deploy-badge.vercel.app/vercel/next-films-eight?style=flat-square
[vercel-url]: https://next-films-eight.vercel.app/
[github-img]: https://img.shields.io/github/repo-size/GuilhermeCCunha/next-films?logo=github&style=flat-square
[github-url]: https://github.com/GuilhermeCCunha/next-films
[github-commit]: https://img.shields.io/github/last-commit/GuilhermeCCunha/next-films?logo=github&style=flat-square
