import {$host} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IMovieList} from "@/entities/movie";

export const getMovieList = async (url:string):Promise<AxiosResponse<IMovieList>> => {
    const response = await $host.get<IMovieList>(url)
    return response
}