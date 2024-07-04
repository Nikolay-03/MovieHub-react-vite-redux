import {createBrowserRouter} from "react-router-dom";
import {HOME, MOVIE_PAGE, SERIES_PAGE} from "@/app/router/routes.ts";
import {Home} from "@/pages/home";
import {Header} from "@/widgets/header";
import {MoviePage} from "@/pages/movie";
import {SeriesPage} from "@/pages/series";

export const AppRouter = createBrowserRouter([
    {
        path: HOME,
        element: (
            <Home/>
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
    {
        path:MOVIE_PAGE,
        element:(
            <MoviePage/>
        )
    },
    {
        path:SERIES_PAGE,
        element:<SeriesPage/>
    }

])