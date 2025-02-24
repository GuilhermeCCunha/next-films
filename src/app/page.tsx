import { MovieProps } from '@/utils/types/movie'
import styles from "./page.module.scss";
import Link from 'next/link';
import { getMovies } from '@/utils/get-data';
import { IMG_BASE_URL } from '@/utils/tmdb';

export default async function Home(){
  const movies: MovieProps[] = await getMovies()

  return(
    <div>
      <div className={styles.containerMovies}>
        {movies.map((movie) => {
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`${IMG_BASE_URL}/original${movie.backdrop_path}`} alt={movie.title} />
              <Link href={`/movie/${movie.id}`}>View Details</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
