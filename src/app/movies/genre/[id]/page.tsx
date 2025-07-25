export const dynamic = 'force-static'
import { MovieProps } from '@/utils/types/movie';
import { getGenreList, getMoviesByGenre } from '@/utils/get-data';
import MovieCard from '@/components/moviecard';
import { Genre } from '@/utils/types/details';
import { notFound } from 'next/navigation'
import LoadMore from '@/components/loadmore';
import { uniqueById } from '@/utils/helpers';
import MoviesWrapper from '@/components/movieswrapper';

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
  const movieprops: MovieProps = await getMoviesByGenre(1, parseInt(id))
  const movies: MovieProps['results'] = uniqueById(movieprops.results)
  const totalPages: MovieProps['total_pages'] = movieprops.total_pages

  return (
    <MoviesWrapper>
      {movies?.length === 0 && notFound()}
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} />
        )
      })}
      {
        totalPages > 1 &&
        <LoadMore mode="Genre" url={parseInt(id)} pageOneData={movies}/>
      }      
    </MoviesWrapper>
  )
}