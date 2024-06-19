import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {timeFormation} from "@/shared/utils/timeFormation.ts";
import styles from './Duration.module.css'
export const Duration = ({runtime}:{runtime:number}) => {
    const {hours,minutes} = timeFormation(runtime)
    return (
        <div className={styles.duration__wrapper}>
            <AccessTimeFilledIcon sx={{ fontSize: 15 }}/>
            <span>{`${hours}h ${minutes}min`}</span>
        </div>
    );
};

