import {Movie} from "@/entities/movie/model/movie.ts";

export interface UpcomingMoviesResponse{
    page:number
    results:Movie[]
}