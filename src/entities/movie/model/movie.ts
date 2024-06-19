
type genre = {
    id:number,
    name:string
}

export interface Movie{
    backdrop_path:string
    budget:number
    genres:genre[]
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