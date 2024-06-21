import {MovieCard} from "@/entities/movie";
import {useFetching} from "@/shared/hooks";
import styles from './TopRatedMoviesList.module.css'
import {SliderWithButtons} from "../../sliderWithButtons";
import {getTopRatedMovies} from "@/shared/api";
import {TopRatedMoviesResponse} from "@/shared/types";

export const TopRatedMoviesList = () => {
    const {data, isLoading, error} = useFetching<TopRatedMoviesResponse>(async () =>
        await getTopRatedMovies()
    )
    return (
        <div className={styles.top__movies__list}>
            <h1>The best movies of all time</h1>
                {error ? (
                    <div>{error}</div>
                ) : isLoading ? (
                    <div>Loading...</div>
                ) : data && data.results ? (
                    <SliderWithButtons slides={data.results.map(movie =>
                            <MovieCard id={movie.id} key={movie.id}/>
                    )}/>
                ) : null}
        </div>
    );
};

