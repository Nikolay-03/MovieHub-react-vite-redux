import {$host} from "@/shared/api";


export const getSeriesList = async (url:string) => {
    const response = await $host.get(url)
    return response
}