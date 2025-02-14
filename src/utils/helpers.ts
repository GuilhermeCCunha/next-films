import { getMovieDetails } from "./get-data";
import { MovieDetailsProps } from "./types/details";

export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
}

export const getSavedMovies = (): Array<MovieDetailsProps> => {
  const savedMovies: string = localStorage.getItem("nextfilms") || '[]';
  let movies: Array<MovieDetailsProps>
  return movies = JSON.parse(savedMovies) || [];
}

export const setSavedMovies = (movies: MovieDetailsProps[]) => {
  localStorage.setItem("nextfilms", JSON.stringify(movies))
}

export const verifyMovie = (id: string): boolean => {
  const hasMovie: boolean = getSavedMovies().some(
    (savedMovies: { id: number }) => savedMovies.id === parseInt(id)
  )
  return hasMovie
}

export async function addMovie(id: string) {
  const movie: MovieDetailsProps = await getMovieDetails(id)

  if (verifyMovie(id)) {
    return;
  }

  let movies = getSavedMovies();
  movies.push(movie);
  setSavedMovies(movies);
}