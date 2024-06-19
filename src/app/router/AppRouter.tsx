import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import {TopRatedMoviesList} from "@/widgets";

export const AppRouter = createBrowserRouter([
    {
        path: MAIN,
        element: (
            <TopRatedMoviesList/>
    )},

])