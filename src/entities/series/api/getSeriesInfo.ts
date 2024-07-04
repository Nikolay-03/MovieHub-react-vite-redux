import {$host} from "@/shared/api";
import {AxiosResponse} from "axios";
import {ISeries} from "@/entities/series";

export const getSeriesInfo = async (id:string | undefined):Promise<AxiosResponse<ISeries>> => {
    const response = await $host.get('/tv/'+id)
    return response
}