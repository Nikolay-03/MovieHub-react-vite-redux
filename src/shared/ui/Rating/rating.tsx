import styles from './rating.module.css'
import RatingImg from '../../assets/icons/rating.png'
interface RatingProps{
    vote_average:number
}
export const Rating = ({vote_average}:RatingProps) => {
    const rating:string = (vote_average / 2).toFixed(1)
    return (
        <div className={styles.rating__wrapper}>
            <img src={RatingImg} className={styles.rating__image} alt=''/>
            <span className={styles.rating_value}>{rating}</span>
        </div>
    );
};

