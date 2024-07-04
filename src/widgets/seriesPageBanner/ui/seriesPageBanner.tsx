import {AddToWatchList} from "@/features/movie";
import {IGenre} from "@/shared/types";
import {SeriesBanner} from "@/entities/series";
import styles from './seriesPageBanner.module.css'
interface ISeriesBannerProps {
    backdrop_path:string,
    original_name:string,
    first_air_date:string,
    genres:IGenre[],
    number_of_seasons:number
}
export const SeriesPageBanner = ({original_name, backdrop_path, number_of_seasons, genres, first_air_date}:ISeriesBannerProps) => {
    return (
        <div className={styles.series__banner__wrapper}>
            <SeriesBanner
                backdrop_path={backdrop_path}
                original_name={original_name}
                first_air_date={first_air_date}
                genres={genres}
                number_of_seasons={number_of_seasons}
            />
            <div className={styles.action__buttons}>
                <AddToWatchList className={styles.add__to__watchlist}/>
            </div>
        </div>
    );
};

