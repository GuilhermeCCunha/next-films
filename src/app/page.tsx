import { MovieProps } from '@/utils/types/movie'
import styles from "./page.module.scss";
import { getMovies } from '@/utils/get-data';
import MovieCard from '@/components/moviecard';
import LoadMore from '@/components/loadmore';
import { uniqueById } from '@/utils/helpers';

export default async function Home(){
  const movieprops: MovieProps = await getMovies(1)
  const movies: MovieProps['results'] = uniqueById(movieprops.results)
  const totalPages: MovieProps['total_pages'] = movieprops.total_pages

  return (
    <div className={styles.moviesContainer}>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} />
        )
      })}
      {
        totalPages > 1 &&
        <LoadMore pageOneData={movies}/>
      }
    </div>
  )
}
