import {$host, UpcomingMovies} from "@/shared/api";

export const getUpcomingMovies = async () => {
    const response = await $host.get(UpcomingMovies)
    return response
}