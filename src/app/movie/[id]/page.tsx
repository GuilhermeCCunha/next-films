import { getMovieDetails } from "@/utils/get-data";
import { MovieDetailsProps } from "@/utils/types/details";


export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; 
  const movie: MovieDetailsProps = await getMovieDetails(id) 
 
  return {
    title: movie.title,
  };
}

export default async function Movie(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;    
  const movie: MovieDetailsProps = await getMovieDetails(id)
  const genres = movie.genres
  
  return(
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <ul>
        {genres.map((genre, index) => {
          let isEndofArray: boolean = index === genres.length - 1
          return(
            <li key={genre.id}>
              {genre.name}
              {isEndofArray ? '' : ', '}
            </li>
          )
        })} 
      </ul>     
      
      <h3>Overview</h3>
      <span>{movie.overview}</span>
      <strong>⭐ {movie.vote_average} / 10</strong>

      <div>
        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Official Trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}