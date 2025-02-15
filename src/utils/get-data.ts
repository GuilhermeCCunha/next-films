import { redirect } from "next/navigation";

export async function getMovies() {
  try{
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en&page=1`, { next: { revalidate: 320 } })
    const data = await res.json() 
    const movies = data.results.slice(0, 12)
      // console.log(movies)
    return movies
  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getMovieDetails(id: string) { 
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en`, { next: { revalidate: 320 } })
  const movie = await res.json() 
    // console.log(movie)

  if (!res.ok) {
    redirect("/");
  }

  return movie  
}