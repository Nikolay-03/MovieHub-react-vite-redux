import {useFetching} from "@/shared/hooks";
import {getMovieInfo} from "@/entities/movie/api/getMovieInfo.ts";
import {$image_host} from "@/shared/api";

export const MovieCard = () => {
    const {response, isLoading, error} = useFetching(async () =>
        await getMovieInfo()
    )
    return (
        <div>
        </div>
    );
};

export default MovieCard;