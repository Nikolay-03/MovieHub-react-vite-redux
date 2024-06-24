import {$host} from "@/shared/api";
import {TopRatedMovies} from "@/shared/api/consts.ts";


export const getTopRatedMovies = async () => {
    const response = await $host.get(TopRatedMovies)
    return response
}