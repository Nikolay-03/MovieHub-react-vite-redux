
export interface IActor{
    id: number,
    original_name: string,
    profile_path: string,
    character: string,
    known_for_department:string
}
export interface ICrew{
    id: number,
    original_name: string,
    profile_path: string,
    department:string
    job:string
}
export interface IMovieCredits{
    id:number,
    cast:IActor[]
    crew:ICrew[]
}