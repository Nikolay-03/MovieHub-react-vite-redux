import {AxiosResponse} from "axios";
import {IGenresList} from "@/entities/movie";
import {$host} from "@/shared/api";
import {MovieListGenres} from "@/shared/api/consts.ts";


export const getMovieListGenres = async ():Promise<AxiosResponse<IGenresList>> => {
    const response = await $host.get(MovieListGenres)
    return response
}