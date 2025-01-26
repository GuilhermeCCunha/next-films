import { MovieProps } from '@/utils/movie.type'
import styles from "./page.module.scss";
import Link from 'next/link';

async function getFilmes() {
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

export default async function Home(){
  const movies: MovieProps[] = await getFilmes()

  return(
    <div>
      <div className={styles.containerMovies}>
        {movies.map((movie) => {
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
              <Link href={`/movie/${movie.id}`}>View Details</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
