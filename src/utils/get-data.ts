"use server"
import { redirect } from "next/navigation";
import { API_KEY, API_URL } from "./tmdb";
import { MovieProps } from "./types/movie";
import { Genre, MovieDetailsProps, Video } from "./types/details";

export async function getMovies(page: number): Promise<MovieProps> {
  try{
    const res = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en&page=${page}`, { next: { revalidate: 120 } })
    const data = await res.json() 
    return data
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getMovieDetails(id: number): Promise<MovieDetailsProps> { 
  const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en`, { next: { revalidate: 320 } })
  const movie = await res.json() 
    // console.log(movie)

  if (!res.ok) {
    redirect("/");
  }

  return movie  
}

export async function searchMovies(page: number, name: string): Promise<MovieProps> {
  try{
    const res = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${name}&language=en&page=${page}`)
    const data = await res.json() 
    return data
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getMoviesByGenre(page: number, genreId: number): Promise<MovieProps> {
  try{
    const res = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en&page=${page}`, { next: { revalidate: 120 } })
    const data = await res.json() 
    return data
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getGenreList(): Promise<Genre[]> {
  try{
    const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en`, { next: { revalidate: 60 * 60 * 24 } })
    const data = await res.json() 
    // console.log(data)
    return data.genres
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getVideos(id: number): Promise<Video[]> {
  try{
    const res = await fetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en`, { next: { revalidate: 320 } })
    const data = await res.json()
    return data.results
  }catch (err) {
    throw new Error("Failed to fetch data")
  }
}
