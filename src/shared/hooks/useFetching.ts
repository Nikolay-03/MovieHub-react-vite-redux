import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";

export const useFetching = <T>(requestCallback:()=>Promise<AxiosResponse>) => {
    const [data,setData] = useState<null| T>(null)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    useEffect(() => {
        const fetching = async () => {
            setIsLoading(true)
            try{
                await requestCallback().then(res => setData(res.data))

            }
            catch (e:any){
                setError(e.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetching()
    }, []);
    return {data,isLoading,error}
}