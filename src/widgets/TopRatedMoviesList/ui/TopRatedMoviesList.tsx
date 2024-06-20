import {MovieCard} from "@/entities/movie";
import {useFetching} from "@/shared/hooks";
import {getTopRatedMovies} from "@/widgets/TopRatedMoviesList/api/getTopRatedMovies.ts";
import {TopRatedMoviesResponse} from "@/widgets/TopRatedMoviesList/model/topRatedMoviesResponse.ts";
import styles from './TopRatedMoviesList.module.css'
import {CustomSlider} from "@/widgets";

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
                    <CustomSlider slides={data.results.map(movie =>
                        <MovieCard id={movie.id} key={movie.id}/>
                    )}/>
                ) : null}
        </div>
    );
};

