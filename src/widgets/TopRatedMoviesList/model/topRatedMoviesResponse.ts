import {Movie} from "@/entities/movie/model/movie.ts";

export interface TopRatedMoviesResponse{
    page:number
    results:Movie[]
}