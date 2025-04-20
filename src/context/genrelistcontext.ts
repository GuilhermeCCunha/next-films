import { Genre } from '@/utils/types/details';
import { createContext, useContext } from "react";

interface IGenreListContext {
  genreList: Genre[];
}

export const GenreListContext = createContext<IGenreListContext>({
  genreList: []
});

export const useGenreListContext = () => useContext(GenreListContext);