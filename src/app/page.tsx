import { MovieProps } from '@/utils/types/movie'
import styles from "./page.module.scss";
import Link from 'next/link';
import { getMovies } from '@/utils/get-data';

export default async function Home(){
  const movies: MovieProps[] = await getMovies()

  return(
    <div>
      <div className={styles.containerMovies}>
        {movies.map((movie) => {
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
              <Link href={`/movie/${movie.id}`}>View Details</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
