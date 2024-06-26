import styles from './PopularMoviesSlides.module.css'
import {useFetching} from "@/shared/hooks";
import {getPopularMovies, IPopularMoviesResponse, MovieCard} from "@/entities/movie";
import {SliderWithButtons} from "@/shared/ui";
import {ViewCard} from "@/shared/consts";
export const PopularMoviesSlides = () => {
    const {data,isLoading, error} = useFetching<IPopularMoviesResponse>(async () =>
        await getPopularMovies()
    )
    return (
        <div className={styles.popular__movies__slides__wrapper}>
            <h3>Popular movies</h3>
            {error ? (
                <div>{error}</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data && data.results ? (
                <SliderWithButtons slidesToShow={4} slidesToScroll={4} slides={data.results.map(movie =>
                    <MovieCard id={movie.id} key={movie.id} view={ViewCard.RECTANGLE}/>
                )}/>
            ) : null}
        </div>
    );
};

