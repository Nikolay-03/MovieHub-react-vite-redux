import {$host} from "@/shared/api/config.ts";
import {UpcomingMovies} from "@/shared/api/consts.ts";

export const getUpcomingMovies = async () => {
    const response = await $host.get(UpcomingMovies)
    return response
}