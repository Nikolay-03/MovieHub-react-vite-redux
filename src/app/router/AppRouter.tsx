import {createBrowserRouter} from "react-router-dom";
import {MAIN} from "@/app/router/routes.ts";
import {CustomSlider} from "@/widgets/customSlider/ui/slider.tsx";
import {TopRatedMoviesList} from "@/widgets";

export const AppRouter = createBrowserRouter([
    {
        path: MAIN,
        element: (
            <TopRatedMoviesList/>
    )},

])