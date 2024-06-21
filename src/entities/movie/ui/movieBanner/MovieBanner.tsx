import styles from './movieBanner.module.css'
import {useFetching} from "@/shared/hooks";
import {Movie} from "@/entities/movie/model/movie.ts";
import {getMovieInfo} from "@/entities/movie/api/getMovieInfo.ts";
import {getImg} from "@/shared/api";
export const MovieBanner = ({id}) => {
    const {data, isLoading, error} = useFetching<Movie>(async () =>
        await getMovieInfo(id)
    )
    return (
        <div className={styles.movie__banner__wrapper}>
            <img src={getImg+data?.backdrop_path} alt={data?.original_title}/>
        </div>
    );
};

