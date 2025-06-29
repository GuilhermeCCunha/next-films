# Next Films
[![Vercel Deploy][vercel-status]][vercel-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

With Next Films, you can search for movies and check their details.

## Features

- Movie search bar
- Infinite scrolling
- Collapsible sidebar
- Movie details page with movie information
- Favorites List using localStorage

## Tech Stack

- Next.js
- React
- TypeScript
- Sass
- Back-end: The Movie Database (TMDB) API

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Routes

_/_ - homepage displays a list of movies that are currently in theatres

_/movies/genre/[genreID]_ - page that displays movies based on the given genre

_/movies/search?name=[movieName]_ - page that displays movies based on searches for their original, translated and alternative titles

_/movie/[movieID]_ - page that displays details about the movie

_/favorites_ - page that displays a list of favorite movies


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

[vercel-status]: https://deploy-badge.vercel.app/vercel/next-films-eight?style=flat-square
[vercel-url]: https://next-films-eight.vercel.app/
[github-img]: https://img.shields.io/github/repo-size/GuilhermeCCunha/next-films?logo=github&style=flat-square
[github-url]: https://github.com/GuilhermeCCunha/next-films
[github-commit]: https://img.shields.io/github/last-commit/GuilhermeCCunha/next-films?logo=github&style=flat-square