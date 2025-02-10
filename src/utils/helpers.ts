import { MovieDetailsProps } from "./types/details";

export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
}

export const getsavedMovies = (): Array<MovieDetailsProps>  => { 
  const savedMovies: string = localStorage.getItem("nextfilms") || '[]';
  let movies: Array<MovieDetailsProps>
  return movies = JSON.parse(savedMovies) || [];
}

export const setSavedMovies = (movies: MovieDetailsProps[]) => {
  localStorage.setItem("nextfilms", JSON.stringify(movies))
}