import {useFetching} from "@/shared/hooks";
import styles from './MovieCard.module.css'
import {Duration} from "@/shared/ui";
import {IMovie} from "@/entities/movie/model/movie.ts";
import clsx from "clsx";
import {ViewCard} from "@/shared/consts";
import {getImg} from "@/shared/api";
import {useNavigate} from "react-router-dom";
import {getMovieInfo} from "@/entities/movie";

interface IMovieCardProps{
    id:number,
    view:ViewCard.ELONGATED | ViewCard.RECTANGLE
}
export const MovieCard = ({id,view}:IMovieCardProps) => {
    const {data} = useFetching<IMovie>(async () =>
        await getMovieInfo(id)
    )
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/movie/`+id)}
            className={clsx(
            styles.movie__card__wrapper,
            view === ViewCard.ELONGATED ? styles.movie__card__wrapper__elongated : styles.movie__card__wrapper__rectangle
        )}>
            {data?.poster_path && data.backdrop_path? (
                    <img src={view === ViewCard.RECTANGLE? getImg+data.backdrop_path : getImg+data.poster_path} alt="" className={styles.movie__card__image}/>
            ) : null}
            {data?.original_title?(
                <div className={styles.movie_name}>{data.original_title}</div>
            ):null}
            {data?.runtime?(
                <div className={styles.movie__info}>
                    <Duration runtime={data?.runtime}/>
                </div>
            ):null}
            <div className={styles.overlay}></div>
        </div>
    );
};

