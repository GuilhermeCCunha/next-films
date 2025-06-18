import { getMovieDetails } from "./get-data";
import { MovieDetailsProps } from "./types/details";

export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
}

export const formatAverage = (value: number): number => {
  let regex: RegExp = /\.0*$|(\.\d*[1-9])0+$/;
  return Number(value.toFixed(2).replace(regex, '$1'));
}

export const getSavedMovies = (): Array<MovieDetailsProps> => {
  const savedMovies: string = localStorage.getItem("nextfilms") || '[]';
  let movies: Array<MovieDetailsProps>
  try {
    movies = JSON.parse(savedMovies) || [];
  } catch (e) {
    movies = []
  }
  return movies
}

export const setSavedMovies = (movies: MovieDetailsProps[]) => {
  localStorage.setItem("nextfilms", JSON.stringify(movies))
}

export const verifyMovie = (id: number): boolean => {
  const hasMovie: boolean = getSavedMovies().some(
    (savedMovies: { id: number }) => savedMovies.id === id
  )
  return hasMovie
}

export async function addMovie(id: number) {
  const movie: MovieDetailsProps = await getMovieDetails(id)

  if (verifyMovie(id)) {
    return;
  }

  let movies = getSavedMovies();
  movies.push(movie);
  setSavedMovies(movies);
}

export function removeMovie(id: number) {
  let movies = getSavedMovies();
  let filteredMovies = movies.filter((item: { id: number; }) => {
    return (item.id !== id)
  })
  setSavedMovies(filteredMovies);
  return filteredMovies
}

export function uniqueById<T extends { id: number }>(items: T[]): T[] {
  const set = new Set();
  return items.filter((item) => {
    const isDuplicate = set.has(item.id);
    set.add(item.id);
    return !isDuplicate;
  });
}