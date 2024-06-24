import {$host, NowPlaying} from "@/shared/api";


export const getNowPlayingMovies = async () => {
    const response = await $host.get(NowPlaying)
    return response
}