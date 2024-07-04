import {getImg} from "@/shared/api";
import styles from './ActorCard.module.css'
import DefaultProfileIcon from '../../../../shared/assets/icons/profile-icon.jpg'
interface ActorCardProps {
    image_path: string,
    original_name: string,
    character_name: string
}

export const ActorCard = ({image_path, original_name, character_name}: ActorCardProps) => {
    return (
        <div className={styles.actor__card__wrapper}>
            <img src={image_path? (getImg+image_path) : DefaultProfileIcon} alt="" className={styles.actor__card__image}/>
            <div className={styles.actor__card__content}>
                <span className={styles.actor__card__character__name}>{character_name}</span>
                <span className={styles.actor__card__original__name}>{original_name}</span>
            </div>
        </div>
    );
};

