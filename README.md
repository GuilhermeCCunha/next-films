# Next Films
[![Vercel Deploy][vercel-status]][vercel-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

With Next Films, you can search for movies or view a list of movies that are currently in theatres or based on the given genre and check their details.

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

## Additional Information

- [Next.js Documentation](https://nextjs.org/docs)

- [Learn Next.js](https://nextjs.org/learn)

- [the Next.js GitHub repository](https://github.com/vercel/next.js) 

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Author

- GitHub: [@GuilhermeCCunha](https://github.com/GuilhermeCCunha)

## License

Copyright © 2025 [Guilherme Cunha](https://github.com/GuilhermeCCunha).<br />
This project is [MIT](https://github.com/GuilhermeCCunha/next-films/blob/main/LICENSE) licensed.

[^1]: The API doesn't provide any links to actual movies, only trailers/behind the scenes/featurettes, etc...

[vercel-status]: https://deploy-badge.vercel.app/vercel/next-films-eight?style=flat-square
[vercel-url]: https://next-films-eight.vercel.app/
[github-img]: https://img.shields.io/github/repo-size/GuilhermeCCunha/next-films?logo=github&style=flat-square
[github-url]: https://github.com/GuilhermeCCunha/next-films
[github-commit]: https://img.shields.io/github/last-commit/GuilhermeCCunha/next-films?logo=github&style=flat-square