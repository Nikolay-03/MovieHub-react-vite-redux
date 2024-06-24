import {IMovie} from "@/entities/movie/model/movie";

export interface ITopRatedMoviesResponse{
    page:number
    results:IMovie[]
}