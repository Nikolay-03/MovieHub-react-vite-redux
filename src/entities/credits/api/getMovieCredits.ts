import {$host} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IMovieCredits} from "@/entities/credits";


export const getMovieCredits = async (id:string | undefined):Promise<AxiosResponse<IMovieCredits>> => {
    const response = await $host.get(`/movie/${id}/credits`)
    return response
}