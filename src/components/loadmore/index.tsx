"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getMovies, getMoviesByGenre, searchMovies } from "@/utils/get-data";
import { MovieProps } from "@/utils/types/movie";
import styles from './styles.module.scss';
import MovieCard from "../moviecard";
import { useDataContext } from "@/context/datacontext";
import { uniqueById } from "@/utils/helpers";

type LoadMoreProps = {
  mode?: "Home";
  url?: string | number;
  pageOneData: MovieProps["results"]
} | {
  mode: "Search";
  url: string;
  pageOneData: MovieProps["results"]
} | {
  mode: "Genre";
  url: number;
  pageOneData: MovieProps["results"]
};

export default function LoadMore(props: LoadMoreProps) {
  const MAX_PAGES = 500; // See error code 22 at https://developer.themoviedb.org/docs/errors 
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState<boolean>(true);         

  const {mode = "Home", url = "", pageOneData = []} = props;

  const { data } = useDataContext();
  const { setData } = useDataContext();
  const { page } = useDataContext();
  const { setPage } = useDataContext();
  const { oldUrl } = useDataContext();
  const { setOldUrl } = useDataContext();
  const { completed } = useDataContext();
  const { setCompleted } = useDataContext();
  const { totalPages } = useDataContext();
  const { setTotalPages } = useDataContext();
  const { pageOneSize } = useDataContext();
  const { setPageOneSize } = useDataContext();
  const { clearData } = useDataContext();
    
  function loadPage(movies: MovieProps['results']) {
    setData(uniqueById([...data, ...movies]));
    setPage(page + 1);    
  }
   
  useEffect(() => {
    if (oldUrl !== url) {
      clearData();
    }
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
      if (page > totalPages || page > MAX_PAGES) {
        setCompleted(true);
      }
      setOldUrl(url);

      if (page === 2 && pageOneSize === 0) {
        setPageOneSize(pageOneData.length);
        setData([...data, ...pageOneData]);
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
        {data.slice(pageOneSize).map((movie) => {
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
