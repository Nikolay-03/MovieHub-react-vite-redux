import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from './Duration.module.css'
import {timeFormation} from "@/shared/utils";
export const Duration = ({runtime}:{runtime:number}) => {
    const {hours,minutes} = timeFormation(runtime)
    return (
        <div className={styles.duration__wrapper}>
            <AccessTimeFilledIcon sx={{ fontSize: 15 , opacity:0.6}}/>
            <span>{`${hours}h ${minutes}min`}</span>
        </div>
    );
};

