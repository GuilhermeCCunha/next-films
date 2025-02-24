import { redirect } from "next/navigation";
import { API_KEY, API_URL } from "./tmdb";

export async function getMovies() {
  try{
    const res = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en&page=1`, { next: { revalidate: 320 } })
    const data = await res.json() 
    const movies = data.results.slice(0, 12)
      // console.log(movies)
    return movies
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getMovieDetails(id: string) { 
  const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en`, { next: { revalidate: 320 } })
  const movie = await res.json() 
    // console.log(movie)

  if (!res.ok) {
    redirect("/");
  }

  return movie  
}