import styles from './styles.module.scss';
import Link  from 'next/link'

export default function Header(){
  return(
    <header className={styles.header}>
      <Link className={styles.logo} href="/">Next Films</Link>
      <Link className={styles.favorites} href="/favorites">Favorites</Link>
    </header>
  )
}
