import {getTopRatedMovies, ITopRatedMoviesResponse, MovieCard} from "@/entities/movie";
import {useFetching} from "@/shared/hooks";
import styles from './TopRatedMoviesSlides.module.css'
import {SliderWithButtons} from "@/shared/ui";

export const TopRatedMoviesSlides = () => {
    const {data, isLoading, error} = useFetching<ITopRatedMoviesResponse>(async () =>
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

