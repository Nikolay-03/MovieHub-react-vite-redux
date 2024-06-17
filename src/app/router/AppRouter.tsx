import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import MovieCard from "@/entities/movie/ui/MovieCard/MovieCard.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: MAIN,
        element: (
            <MovieCard/>
    )},

])