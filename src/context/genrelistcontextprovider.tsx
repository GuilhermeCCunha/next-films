"use client";

import { Genre } from '@/utils/types/details';
import React, { ReactNode } from "react";
import { GenreListContext } from "./genrelistcontext";

interface IProps {
  genres: Genre[];
  children: ReactNode;
}

const GenreListContextProvider = ({ genres, children }: IProps) => {
  const genreList: Genre[] = genres;

  return (
    <GenreListContext.Provider
      value={{
       genreList
      }}
    >
      {children}
    </GenreListContext.Provider>
  );
};

export default GenreListContextProvider;