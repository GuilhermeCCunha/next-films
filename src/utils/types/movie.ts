
export interface MovieProps{
    results: Movie[]
    total_pages: number
}

export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;       
    poster_path: string;         
}