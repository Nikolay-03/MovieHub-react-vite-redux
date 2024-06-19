import {$host} from "@/shared/api";


export const getTopRatedMovies = async () => {
    const response = await $host.get('movie/top_rated')
    return response
}