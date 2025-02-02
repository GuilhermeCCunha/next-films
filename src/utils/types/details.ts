import { MovieProps } from "./movie";

export interface MovieDetailsProps extends MovieProps {
    genres: genre[];
    overview: string;
    vote_average: number;
    release_date: string; 
}

export interface genre {
    id: number;
    name: string;
}