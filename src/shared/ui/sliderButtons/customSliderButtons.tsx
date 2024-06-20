import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './buttons.module.css'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const NextButton = (props) => {
    const { onClick,slideCount,currentSlide,slidesToShow} = props;
    return (
        <div>
            {slideCount && slideCount !== currentSlide+slidesToShow? (
                <div className={styles.next__button__wrapper}
                     onClick={onClick}>

                    <div className={styles.next__button__content__wrapper}>
                        <ArrowForwardIosIcon sx={{fontSize:14}}/>
                    </div>
                </div>
            ):null}
        </div>
    );
};

export const PrevButton = (props) => {
    const { onClick, currentSlide} = props;
    return (
        <div>
            {currentSlide !== 0? (
                <div className={styles.prev__button__wrapper}
                     onClick={onClick}>

                    <div className={styles.prev__button__content__wrapper}>
                        <ArrowBackIosNewIcon sx={{fontSize:14}}/>
                    </div>
                </div>
            ):null}
        </div>
    );
};
