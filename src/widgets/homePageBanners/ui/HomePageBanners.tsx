import {useFetching} from "@/shared/hooks";
import styles from './homePageBanners.module.css'
import {getUpcomingMovies, IUpcomingMoviesResponse, MovieBanner} from "@/entities/movie";
import {AutoPlaySlider} from "@/shared/ui";
import {AddToWatchList} from "@/features/movie";
export const HomePageBanners = () => {
    const {data,isLoading,error} = useFetching<IUpcomingMoviesResponse>(async () =>
        await getUpcomingMovies()
    )
    return (
        <div className={styles.home__page__banners__wrapper}>
            <AutoPlaySlider slides={data?.results.map(movie =>
                <div className={styles.movie_banner}>
                    <MovieBanner id={movie.id}/>
                    <div className={styles.action__buttons}>
                        <AddToWatchList className={styles.add__to__watchlist}/>
                    </div>
                </div>
            )}/>
        </div>
    );
};

