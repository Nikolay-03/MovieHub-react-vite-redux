import {$host} from "@/shared/api";

export const getMovieInfo = async () => {
    const response = await $host.get("movie/top_rated")
    return response
}