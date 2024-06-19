import {$host} from "@/shared/api";

export const getMovieInfo = async (id:number) => {
    const response = await $host.get("movie/"+id)
    return response
}