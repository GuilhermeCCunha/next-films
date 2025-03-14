import { MovieProps } from '@/utils/types/movie'
import styles from "./page.module.scss";
import { getMovies } from '@/utils/get-data';
import MovieCard from '@/components/moviecard';

export default async function Home(){
  const movieprops: MovieProps = await getMovies(1)
  const movies: MovieProps['results'] = movieprops.results

  return(
    <div>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => {
          return(
            <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.backdrop_path} />
          )
        })}
      </div>
    </div>
  )
}
