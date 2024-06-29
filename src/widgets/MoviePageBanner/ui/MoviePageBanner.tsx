import styles from "./MoviePageBanner.module.css";
import {AddToWatchList} from "@/features/movie";
import {IGenre, MovieBanner} from "@/entities/movie";

interface IMovieBannerProps {
    original_title: string,
    backdrop_path: string,
    duration: number,
    release_date: string,
    genres: IGenre[],
}
export const MoviePageBanner = ({original_title, backdrop_path, duration, genres, release_date}:IMovieBannerProps) => {
    return (
        <div className={styles.movie__banner__wrapper}>
            <MovieBanner original_title={original_title} backdrop_path={backdrop_path} duration={duration} genres={genres} release_date={release_date}/>
            <div className={styles.action__buttons}>
                <AddToWatchList className={styles.add__to__watchlist}/>
            </div>
        </div>
    );
};

