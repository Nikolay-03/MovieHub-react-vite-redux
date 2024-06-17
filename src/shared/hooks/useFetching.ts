import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";

export const useFetching = (requestCallback:()=>Promise<AxiosResponse>) => {
    const [response,setResponse] = useState<null|any>(null)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    useEffect(() => {
        const fetching = async () => {
            setIsLoading(true)
            try{
                await requestCallback().then(res => setResponse(res.data))

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
    return {response,isLoading,error}
}