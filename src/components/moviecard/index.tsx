import styles from './styles.module.scss';
import { IMG_BASE_URL } from "@/utils/tmdb";
import Link from "next/link";

export default function MovieCard(props: {id: number, title: string, img: string}) {

  return (
    <article className={styles.movieCard} key={props.id}>
      <strong>{props.title}</strong>
      <img src={`${IMG_BASE_URL}/original${props.img}`} alt={props.title} />
      <Link href={`/movie/${props.id}`}>View Details</Link>
    </article>
  )
}