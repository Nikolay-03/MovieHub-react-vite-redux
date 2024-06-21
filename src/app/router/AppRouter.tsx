import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import {Header} from "@/widgets/header/ui/header.tsx";
import {Home} from "@/pages/home";

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