import {IGenre, ProductionCompany} from "@/shared/types";
import {IEpisode, ISeason} from "@/entities/series";

export interface ISeries{
    backdrop_path: string,
    created_by: [
        {
            id: number,
            original_name: string,
            profile_path: string
        }
    ],
    first_air_date: string,
    genres: IGenre[],
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air:IEpisode
    next_episode_to_air: null | string,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[]
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompany[],
    seasons: ISeason[]
    status: string,
    tagline: string,
    vote_average:number,
    vote_count: number
}
export interface ISeriesDto{
    backdrop_path: string,
    id: number,
    original_language: string,
    original_name: string,
    origin_country: string[],
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
}
export interface ISeriesList{
    page:number,
    results:ISeriesDto[],
    total_pages: number,
    total_results: number
}