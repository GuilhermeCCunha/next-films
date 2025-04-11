"use client";
import { MovieProps } from "@/utils/types/movie";
import React, { ReactNode, useState } from "react";
import { DataContext } from "./datacontext";

interface IProps {
  children: ReactNode;
}

const DataContextProvider = ({ children }: IProps) => {
  const [data, setData] = useState<MovieProps['results']>([]);
  const [page, setPage] = useState<number>(2);
  const [oldUrl, setOldUrl] = useState<string | number>("");
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
       data,
       setData, 
       page,
       setPage,
       oldUrl, 
       setOldUrl,
       completed, 
       setCompleted,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;