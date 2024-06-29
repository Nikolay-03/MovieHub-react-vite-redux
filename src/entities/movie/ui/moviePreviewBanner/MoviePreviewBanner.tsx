import styles from './moviePreviewBanner.module.css'
import {useFetching} from "@/shared/hooks";
import {IMovie} from "@/entities/movie/model/movie.ts";
import {getMovieInfo} from "@/entities/movie/api/getMovieInfo.ts";
import {getImg} from "@/shared/api";
import {Duration} from "@/shared/ui";

export const MoviePreviewBanner = ({id}:{id:number}) => {
    const {data, isLoading, error} = useFetching<IMovie>(async () =>
        await getMovieInfo(id)
    )
    return (
        <div className={styles.movie__banner__wrapper}>
            {error ? <div>{error}</div> :
                isLoading ? <div>Loading...</div>
                    : data && data.backdrop_path && <img src={getImg + data?.backdrop_path} alt={data?.original_title}/>}
            {data &&
                <div className={styles.movie__banner__content}>
                        {data.original_title && <h1>{data.original_title}</h1>}
                        <div className={styles.movie__banner__main__info}>
                            {data.runtime !==0 && <Duration runtime={data.runtime}/>}
                            {data.release_date && <span>{data.release_date.slice(0, 4)}</span>}
                            {data.genres.map(genre =>
                                <span className={styles.movie__banner__genres}>
                                    <h3>•</h3>
                                    <span>{genre.name}</span>
                                </span>
                            )}
                        </div>
                        {data.overview && <div className={styles.movie__overview}>{data.overview}</div>}
                    </div>
            }

            <div className={styles.overlay}></div>
        </div>
    );
};

