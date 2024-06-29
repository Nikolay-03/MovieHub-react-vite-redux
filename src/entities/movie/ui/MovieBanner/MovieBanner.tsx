import styles from './movieBanner.module.css'
import {getImg} from "@/shared/api";
import {Duration} from "@/shared/ui";
import {IGenre} from "@/entities/movie";

interface IMovieBannerProps{
    original_title: string,
    backdrop_path: string,
    duration: number,
    release_date: string,
    genres?: IGenre[],
}

export const MovieBanner = ({original_title, backdrop_path, duration, genres, release_date}: IMovieBannerProps) => {
    return (
        <div className={styles.movie__banner__wrapper}>
            {backdrop_path && <img src={getImg + backdrop_path} alt={original_title}/>}
            <div className={styles.movie__banner__content}>
                {original_title && <h1>{original_title}</h1>}
                <div className={styles.movie__banner__main__info}>
                    {duration !== 0 && <Duration runtime={duration}/>}
                    {release_date && <span>{release_date.slice(0, 4)}</span>}
                    {genres && genres.map(genre =>
                        <span className={styles.movie__banner__genres}>
                                    <h3>•</h3>
                                    <span>{genre.name}</span>
                                </span>
                    )}
                </div>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
};

