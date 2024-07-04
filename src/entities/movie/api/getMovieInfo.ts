import {$host} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IMovie} from "@/entities/movie";
export const getMovieInfo = async (id:number | string | undefined):Promise<AxiosResponse<IMovie>> => {
    const response = await $host.get<IMovie>(`/movie/${id}`)
    return response
}