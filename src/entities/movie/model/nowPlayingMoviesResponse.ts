import {IMovie} from "@/entities/movie/model/movie.ts";


export interface INowPlayingMoviesResponse{
    page:number,
    results:IMovie[]
}