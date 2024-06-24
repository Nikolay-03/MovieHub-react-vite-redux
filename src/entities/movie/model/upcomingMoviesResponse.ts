import {Movie} from "@/entities/movie/model/movie.ts";

export interface IUpcomingMoviesResponse{
    page:number
    results:Movie[]
}