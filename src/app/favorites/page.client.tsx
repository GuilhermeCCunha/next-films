"use client"
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { removeMovie, getSavedMovies } from '@/utils/helpers';
import { MovieDetailsProps } from '@/utils/types/details';

export default function PageClient() {
  const [movies, setMovies] = useState<MovieDetailsProps[] | null>(null)

  useEffect(() => {
    const savedMovies = getSavedMovies();
    setMovies(savedMovies);
  }, [])

  function deleteMovie(id: number) {
    let filteredMovies = removeMovie(id);
    setMovies(filteredMovies);
  }

  return (
    <div className={styles.favorites}>
      <h1>My movies</h1>

      {movies?.length === 0 && <span>You don't have any favorite movie</span>}

      <ul>
        {movies?.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link href={`/movie/${item.id}`}>View Details</Link>
                <button onClick={() => deleteMovie(item.id)}>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
