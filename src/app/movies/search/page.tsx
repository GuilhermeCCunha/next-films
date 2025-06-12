import { MovieProps } from '@/utils/types/movie'
import styles from "./styles.module.scss";
import { searchMovies } from '@/utils/get-data';
import MovieCard from '@/components/moviecard';
import LoadMore from '@/components/loadmore';
import { uniqueById } from '@/utils/helpers';
import MoviesWrapper from '@/components/movieswrapper';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ name: string }> }) {

  return {
    title: `${(await searchParams).name} | Search`,
  };
}

export default async function Search({ searchParams }: { searchParams: Promise<{ name: string }> }) {

  const search = await searchParams
  const movieprops: MovieProps = await searchMovies(1, search.name)
  const movies: MovieProps['results'] = uniqueById(movieprops.results)
  const totalPages: MovieProps['total_pages'] = movieprops.total_pages

  return (
    <MoviesWrapper>
      {movies?.length === 0 && <span className={styles.message}>Nothing has been found</span>}
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} />
        )
      })}
      {
        totalPages > 1 &&
        <LoadMore mode="Search" url={search.name} pageOneData={movies}/>
      }
    </MoviesWrapper>
  )
}
