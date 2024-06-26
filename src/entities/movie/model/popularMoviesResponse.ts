import {IMovie} from "@/entities/movie/model/movie.ts";


export interface IPopularMoviesResponse{
    page:number,
    results:IMovie[]
}