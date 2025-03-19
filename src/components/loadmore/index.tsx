"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getMovies } from "@/utils/get-data";
import { MovieProps } from "@/utils/types/movie";
import styles from './styles.module.scss';
import MovieCard from "../moviecard";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<MovieProps['results']>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2)
  const [totalPages, setTotalPages] = useState<MovieProps['total_pages']>(3)
  const [completed, setCompleted] = useState<boolean>(false)
  
  useEffect(() => {
    setCompleted(false);
    setData([]);
    setPage(2);
    getMovies(page).then((res) => {
      setTotalPages(res?.total_pages);
    });
  }, []) 

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      if (page > totalPages) {
        setCompleted(true);
      }
      const delay = 1850;

      const timeoutId = setTimeout(() => {
        getMovies(page).then((res) => {
          let movies = res.results
          setData([...data, ...movies]);
          setPage(page + 1);
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section>
        {data.map((movie) => {
          return (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.backdrop_path} />
          )
        })}
      </section>
      <section>
        {!completed ?
          <div ref={ref}>
            {inView && isLoading && (
              <p className={styles.blink}>Loading...</p>
            )}
          </div>
          : <p className={styles.message}>No more movies to load</p>
        } 
      </section>
    </>
  );
}
