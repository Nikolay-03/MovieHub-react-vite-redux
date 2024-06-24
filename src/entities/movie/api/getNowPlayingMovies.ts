import {$host} from "@/shared/api";
import {NowPlaying} from "@/shared/api/consts.ts";


export const getNowPlayingMovies = async () => {
    const response = await $host.get(NowPlaying)
    return response
}