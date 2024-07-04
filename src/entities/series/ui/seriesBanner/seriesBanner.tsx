import styles from './seriesBanner.module.css'
import {getImg} from "@/shared/api";
import {IGenre} from "@/shared/types";

interface ISeriesBannerProps {
    backdrop_path:string,
    original_name:string,
    first_air_date:string,
    genres:IGenre[],
    number_of_seasons:number
}

export const SeriesBanner = ({backdrop_path,original_name,first_air_date,genres,number_of_seasons}:ISeriesBannerProps) => {
    return (
        <div className={styles.series__banner__wrapper}>
            {backdrop_path && <img src={getImg + backdrop_path} alt={original_name}/>}
            <div className={styles.series__banner__content}>
                {original_name && <h1>{original_name}</h1>}
                <div className={styles.series__banner__main__info}>
                    <span>{number_of_seasons > 1? `${number_of_seasons} seasons`: `${number_of_seasons} season`}</span>
                    <h3>•</h3>
                    {first_air_date && <span>{first_air_date.slice(0, 4)}</span>}
                    {genres && genres.map(genre =>
                        <span className={styles.series__banner__genres}>
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

