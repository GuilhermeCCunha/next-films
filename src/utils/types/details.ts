import { MovieProps } from "./movie";

export interface MovieDetailsProps extends MovieProps {
    genres: genre[]
    overview: string
    vote_average: number 
}

export interface genre {
    id: number;
    name: string;
}