"use client";

import { Genre } from '@/utils/types/details';
import React, { ReactNode } from "react";
import { GenresContext } from "./genrescontext";

interface IProps {
  genres: Genre[];
  children: ReactNode;
}

const GenresContextProvider = ({ genres, children }: IProps) => {
  const genreList: Genre[] = genres;

  return (
    <GenresContext.Provider
      value={{
       genreList
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export default GenresContextProvider;