import {IGenre} from "@/entities/movie";


export interface IMovie{
    backdrop_path:string
    budget:number
    genres:IGenre[]
    id:number
    origin_country:string[]
    original_language:string
    original_title:string
    overview:string
    popularity:number
    poster_path:string
    release_date:string
    runtime:number
    vote_average:number
    vote_count:number
}