import {Movie} from "@/entities/movie/model/movie";

export interface ITopRatedMoviesResponse{
    page:number
    results:Movie[]
}