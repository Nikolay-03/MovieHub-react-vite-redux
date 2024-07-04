import styles from './seriesCard.module.css'
import {ViewCard} from "@/shared/consts";
import clsx from "clsx";
import {getImg} from "@/shared/api";
import {Rating} from "@/shared/ui";
import {useNavigate} from "react-router-dom";

interface ISeriesCardProps{
    id:number,
    original_name:string,
    image_path:string,
    vote_average:number,
    view:ViewCard.ELONGATED | ViewCard.RECTANGLE
}
export const SeriesCard = ({original_name,image_path,vote_average,view,id}:ISeriesCardProps) => {
    const navigate = useNavigate()
    return (
        <div
            className={clsx(
                styles.movie__card__wrapper,
                view === ViewCard.ELONGATED? styles.series__card__wrapper__elongated : styles.series__card__wrapper__rectangle
            )}
            onClick={() => navigate('/series/'+id)}
        >
            <img src={getImg+image_path} alt={original_name} className={styles.series__card__image}/>
            <div className={styles.series_name}>
                {original_name}
            </div>
            <div className={styles.series__info}>
                <Rating vote_average={vote_average}/>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
};

