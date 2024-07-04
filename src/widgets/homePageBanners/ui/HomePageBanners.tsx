import {useFetching} from "@/shared/hooks";
import styles from './homePageBanners.module.css'
import {getMovieList, IMovieList, MoviePreviewBanner} from "@/entities/movie";
import {AutoPlaySlider} from "@/shared/ui";
import {AddToWatchList} from "@/features/movie";
import {UpcomingMovies} from "@/shared/api";
export const HomePageBanners: React.FC = () => {
    const {data,isLoading,error} = useFetching<IMovieList>(async () =>
        await getMovieList(UpcomingMovies)
    )
    return (
        <div className={styles.home__page__banners__wrapper}>
            {error && <div>{error}</div>}
            {isLoading? <div>Loading...</div>
                : data && data.results && <AutoPlaySlider slides={data.results.map(movie =>
                    <div className={styles.movie_banner}>
                        <MoviePreviewBanner id={movie.id} key={movie.id}/>
                        <div className={styles.action__buttons}>
                            <AddToWatchList className={styles.add__to__watchlist} key={movie.id}/>
                        </div>
                    </div>
                )}/>
            }
        </div>
    );
};

