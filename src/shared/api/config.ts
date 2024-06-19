import axios from "axios";

export const $host = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL
})
$host.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMThmODdiMTgxMGRlMjhjZTQyODM2Y2Q4NTgxZWM0MiIsInN1YiI6IjY1NzVhZGExNGJmYTU0MDExYmRjNDgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EWCvW1MOaLWu1WyDo6c5oAttS707kLWt24i0iKV6Hi8"
    return config
})
