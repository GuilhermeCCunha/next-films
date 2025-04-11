import { MovieProps } from "@/utils/types/movie";
import { createContext, useContext } from "react";

interface IDataContext {
  data: MovieProps['results'];
  setData: (movies: MovieProps['results']) => void;
  page: number;
  setPage: (number: number) => void;
  oldUrl: string | number; 
  setOldUrl: (url: string | number) => void;
  completed: boolean;
  setCompleted: (completed: boolean) => void;
}

export const DataContext = createContext<IDataContext>({
  data: [],
  setData() {},
  page: 2,
  setPage() {},
  oldUrl: "",
  setOldUrl() {},
  completed: false,
  setCompleted() {},
});

export const useDataContext = () => useContext(DataContext);