# Next Films
[![Vercel Deploy][vercel-status]][vercel-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Movie search bar
- Infinite scrolling

## Tech Stack

- Next.js
- React
- TypeScript

## Getting Started

You will need a [TMDB account](https://www.themoviedb.org/signup) and an API key. In the project root folder, rename the file `.env.local.example` to `.env.local`:

Inside this file, you will see this line: 

```dotenv  
NEXT_PUBLIC_API_KEY=********************************
```
Replace the asterisks with your personal API key.

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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