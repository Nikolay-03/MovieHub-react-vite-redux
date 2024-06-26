import {getTopRatedMovies, ITopRatedMoviesResponse, MovieCard} from "@/entities/movie";
import {useFetching} from "@/shared/hooks";
import styles from './TopRatedMoviesSlides.module.css'
import {SliderWithButtons} from "@/shared/ui";
import {ViewCard} from "@/shared/consts";

export const TopRatedMoviesSlides = () => {
    const {data, isLoading, error} = useFetching<ITopRatedMoviesResponse>(async () =>
        await getTopRatedMovies()
    )
    return (
        <div className={styles.top__movies__list}>
            <h3>The best movies of all time</h3>
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

