import { Genre } from '@/utils/types/details';
import { createContext, useContext } from "react";

interface IGenresContext {
  genreList: Genre[];
}

export const GenresContext = createContext<IGenresContext>({
  genreList: []
});

export const useGenresContext = () => useContext(GenresContext);