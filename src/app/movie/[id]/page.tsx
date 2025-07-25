export const dynamic = 'force-static'
import { getMovieDetails } from "@/utils/get-data";
import { MovieDetailsProps } from "@/utils/types/details";
import styles from './styles.module.scss';
import { calcTime, formatAverage } from "@/utils/helpers";
import FavoriteButton from "@/components/favoritebutton";
import { IMG_BASE_URL } from "@/utils/tmdb";
import Link from "next/link";
import VideoLink from "@/components/videolink";
import ButtonsWrapper from "@/components/buttonswrapper";
import DetailsWrapper from "@/components/detailswrapper";


export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; 
  const movie: MovieDetailsProps = await getMovieDetails(parseInt(id)) 
 
  return {
    title: movie.title,
  };
}

export default async function Movie(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;    
  const movie: MovieDetailsProps = await getMovieDetails(parseInt(id))
  const genres = movie.genres

  return(
    <DetailsWrapper>
      <h1>{movie.title}</h1>
      {movie.backdrop_path ?
        <img src={`${IMG_BASE_URL}/original${movie.backdrop_path}`} alt={movie.title} />
        : <img src="/backdrop-placeholder.jpeg" alt={movie.title} />
      }
      <ul>
        <li>{`${movie.release_date.substring(0, 4)} `}<span>|</span></li>
        <li>{`${calcTime(movie.runtime)} `}<span>|</span></li>
        {genres.map((genre, index) => {
          let isEndofArray: boolean = index === genres.length - 1
          return(
            <li key={genre.id}>
              <Link className={styles.genres} href={`/movies/genre/${genre.id}`}>
                {genre.name}
              </Link>
              {isEndofArray ? '' : ', '}
            </li>
          )
        })} 
      </ul>      

      <h3>Overview</h3>
      <span>{movie.overview}</span>
      <strong>⭐ {formatAverage(movie.vote_average)} / 10</strong>

      <ButtonsWrapper>
        <FavoriteButton id={movie.id} />
        <VideoLink id={movie.id} />
      </ButtonsWrapper>

    </DetailsWrapper>
  )
}