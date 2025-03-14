import { Movie } from "./movie";

export interface MovieDetailsProps extends Movie {
    genres: Genre[];
    overview: string;
    vote_average: number;
    release_date: string;
    runtime: number; 
}

export interface Genre {
    id: number;
    name: string;
}