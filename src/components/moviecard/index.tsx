import styles from './styles.module.scss';
import { IMG_BASE_URL } from "@/utils/tmdb";
import Link from "next/link";

export default function MovieCard(props: { id: number, title: string, img: string }) {


  return (
    <article className={styles.movieCard} key={props.id}>
      <img src={`${IMG_BASE_URL}/original${props.img}`} alt={props.title} />
      <Link className={styles.tooltip} href={`/movie/${props.id}`}>
        {props.title}
        <span className={styles.tooltiptext}>View Details</span>
      </Link>
    </article>
  )
}