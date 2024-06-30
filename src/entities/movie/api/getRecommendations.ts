import {$host} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IMovieList} from "@/entities/movie";

export const getRecommendations = async (id:string | undefined):Promise<AxiosResponse<IMovieList>> => {
    const response = await $host.get(`/movie/${id}/recommendations`)
    return response
}