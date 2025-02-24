import { getMovieDetails } from "@/utils/get-data";
import { MovieDetailsProps } from "@/utils/types/details";
import styles from './styles.module.scss';
import { calcTime } from "@/utils/helpers";
import FavoriteButton from "@/components/favoritebutton";
import { IMG_BASE_URL } from "@/utils/tmdb";


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
    <div className={styles.details}>
      <h1>{movie.title}</h1>
      <img src={`${IMG_BASE_URL}/original${movie.backdrop_path}`} alt={movie.title} />
      <ul>
        <li>{`${movie.release_date.substring(0, 4)} `}<span>|</span></li>
        <li>{`${calcTime(movie.runtime)} `}<span>|</span></li>
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

      <div className={styles.containerButtons}>
        <FavoriteButton id={movie.id.toString()} />
        <div>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Official Trailer`}>
            Trailer
          </a>
        </div>
      </div>

    </div>
  )
}