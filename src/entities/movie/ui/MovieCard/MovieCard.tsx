import {useFetching} from "@/shared/hooks";
import {getMovieInfo} from "@/entities/movie/api/getMovieInfo.ts";
import {Movie} from "@/entities/movie/model/movie";
import styles from './movieCard.module.css'
import {getImg} from "@/shared/api";
import {Duration} from "@/shared/ui";

export const MovieCard = ({id}) => {
    const {data, isLoading, error} = useFetching<Movie>(async () =>
        await getMovieInfo(id)
    )
    return (
        <div className={styles.movie__card__wrapper}>
            {data?.poster_path ? (
                    <img src={getImg + data.poster_path} alt="" className={styles.movie__card__image}/>
            ) : null}
            {data?.original_title?(
                <div className={styles.movie_name}>{data.original_title}</div>
            ):null}
            {data?.runtime?(
                <div className={styles.movie__info}>
                    <Duration runtime={data?.runtime}/>
                </div>
            ):null}
        </div>
    );
};

