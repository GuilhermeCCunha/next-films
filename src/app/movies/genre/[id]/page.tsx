import { MovieProps } from '@/utils/types/movie';
import styles from "./styles.module.scss";
import { getGenreList, getMoviesByGenre } from '@/utils/get-data';
import MovieCard from '@/components/moviecard';
import { Genre } from '@/utils/types/details';
import { notFound } from 'next/navigation'

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const genrelist: Genre[] = await getGenreList()
  const { id } = await props.params; 
  let genre = genrelist.find(genre => genre.id === parseInt(id));

  return {
    title: `${genre?.name} | Genre`,
  };
}

export default async function MovieGenre(props: { params: Promise<{ id: string }> }) {

  const { id } = await props.params;
  const movies: MovieProps['results'] = await getMoviesByGenre(parseInt(id))

  return (
    <div className={styles.moviesContainer}>
      {movies?.length === 0 && notFound()}
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.backdrop_path} />
        )
      })}
    </div>
  )
}