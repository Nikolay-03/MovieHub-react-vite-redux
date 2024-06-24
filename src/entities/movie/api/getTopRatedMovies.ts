import {$host, TopRatedMovies} from "@/shared/api";


export const getTopRatedMovies = async () => {
    const response = await $host.get(TopRatedMovies)
    return response
}