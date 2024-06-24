import styles from './NowPlayingMoviesSlides.module.css'
import {useFetching} from "@/shared/hooks";
import {getNowPlayingMovies, INowPlayingMoviesResponse, MovieCard} from "@/entities/movie";
import {SliderWithButtons} from "@/shared/ui";
import {ViewCard} from "@/shared/consts";

export const NowPlayingMoviesSlides = () => {
    const {data,isLoading,error} = useFetching<INowPlayingMoviesResponse>(async () =>
        await getNowPlayingMovies()
    )
    return (
        <div className={styles.now__playing__movies__slides__wrapper}>
            <h3>Now playing movies</h3>
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

