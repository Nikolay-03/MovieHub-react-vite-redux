import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import {Home} from "@/pages/home";
import {Header} from "@/widgets/header";

export const AppRouter = createBrowserRouter([
    {
        path: MAIN,
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

])