import {ICrew} from "@/entities/credits";

export interface IEpisode{
    id: number,
    name: string,
    overview: string,
    vote_average: number,
    vote_count: number,
    air_date: string,
    runtime: number,
    season_number: number,
    still_path: string
}
export interface IEpisodeAllDetails extends IEpisode{
    crew:ICrew[]
}