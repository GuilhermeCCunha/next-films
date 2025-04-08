"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getMovies, getMoviesByGenre, searchMovies } from "@/utils/get-data";
import { MovieProps } from "@/utils/types/movie";
import styles from './styles.module.scss';
import MovieCard from "../moviecard";

type LoadMoreProps = { mode?: string, url?: string | number }

export default function LoadMore(props: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<MovieProps['results']>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2)
  const [totalPages, setTotalPages] = useState<MovieProps['total_pages']>(3)
  const [completed, setCompleted] = useState<boolean>(false)

  const {mode = "Home", url = ""} = props;

  function loadPage(movies: MovieProps['results']) {
    setData([...data, ...movies]);
    setPage(page + 1);
  }
  
  useEffect(() => {
    setCompleted(false);
    setData([]);
    setPage(2);
    if (mode === 'Home'){
      getMovies(page).then((res) => {
        setTotalPages(res?.total_pages);
      });
    }
    if (mode === 'Search' && typeof url === 'string'){
      searchMovies(page, url).then((res) => {
        setTotalPages(res?.total_pages);
      });
    }
    if (mode === 'Genre' && typeof url === 'number'){
      getMoviesByGenre(page, url).then((res) => {
        setTotalPages(res?.total_pages);
      });
    }    
  }, [url]) 

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      if (page > totalPages) {
        setCompleted(true);
      }
      const delay = 1850;

      const timeoutId = setTimeout(() => {
        if (mode === 'Home') {
          getMovies(page).then((res) => {
            loadPage(res.results);
          });     
        }
        if (mode === 'Search' && typeof url === 'string') {
          searchMovies(page, url).then((res) => {
            loadPage(res.results);
          });     
        }
        if (mode === 'Genre' && typeof url === 'number') {
          getMoviesByGenre(page, url).then((res) => {
            loadPage(res.results);
          });     
        }

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
            <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} />
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
