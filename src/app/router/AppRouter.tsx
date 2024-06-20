import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import {TopRatedMoviesList} from "@/widgets/TopRatedMoviesList";
import {Header} from "@/widgets/header/ui/header.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: MAIN,
        element: (
            <Header/>
    )},
    {
        path: '/top_rated',
        element: (
            <Header/>
        )},
    {
        path: '/popular',
        element: (
            <Header/>
        )},

])