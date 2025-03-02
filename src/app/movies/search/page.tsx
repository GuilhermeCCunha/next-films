import { MovieProps } from '@/utils/types/movie'
import styles from "./styles.module.scss";
import Link from 'next/link';
import { searchMovies } from '@/utils/get-data';
import { IMG_BASE_URL } from '@/utils/tmdb';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ name: string }> }) {
 
  return {
    title: `${(await searchParams).name} | Search`,
  };
}

export default async function Search({ searchParams }: { searchParams: Promise<{ name: string }> }) {
 
  const search = await searchParams
  const movies: MovieProps[] = await searchMovies(search.name)

  return (
    <div className={styles.containerMovies}>
      {movies?.length === 0 && <span>Nothing has been found</span>}
      {movies.map((movie) => {
        return (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`${IMG_BASE_URL}/original${movie.backdrop_path}`} alt={movie.title} />
            <Link href={`/movie/${movie.id}`}>View Details</Link>
          </article>
        )
      })}
    </div>
  )
}
