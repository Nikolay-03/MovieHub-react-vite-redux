import {useFetching} from "@/shared/hooks";
import {getUpcomingMovies} from "@/shared/api";
import {UpcomingMoviesResponse} from "@/shared/types/upcomingMoviesResponse.ts";
import styles from './homePageBanners.module.css'
export const HomePageBanners = () => {
    const {data,isLoading,error} = useFetching<UpcomingMoviesResponse>(async () =>
        await getUpcomingMovies()
    )
    return (
        <div className={styles.home__page__banners__wrapper}>
        </div>
    );
};

