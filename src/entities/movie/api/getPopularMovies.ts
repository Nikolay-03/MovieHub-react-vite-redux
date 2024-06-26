import {$host} from "@/shared/api";
import {Popular} from "@/shared/api/consts.ts";

export const getPopularMovies = async () => {
    const response = await $host.get(Popular)
    return response
}