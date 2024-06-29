import {IMovie} from "@/entities/movie/model/movie.ts";


export interface IMovieList{
    page:number
    results:IMovie[]
    total_results: number
    total_pages: number
}