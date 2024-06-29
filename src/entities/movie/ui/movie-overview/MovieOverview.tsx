import styles from './MovieOverview.module.css'

interface MovieOverviewProps{
    overview:string
}
export const MovieOverview = ({overview}:MovieOverviewProps) => {
    return (
        <div className={styles.movie__overview__wrapper}>
            <h3>Story Line</h3>
            <span className={styles.movie__overview__content}>{overview}</span>
        </div>
    );
};

