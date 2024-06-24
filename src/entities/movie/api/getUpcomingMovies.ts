import {$host} from "@/shared/api/config.ts";
import {UpcomingMovies} from "@/shared/api";

export const getUpcomingMovies = async () => {
    const response = await $host.get(UpcomingMovies)
    return response
}