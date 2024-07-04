import styles from './movieSlider.module.css';
import { SliderWithButtons } from "@/shared/ui";
import { ViewCard } from "@/shared/consts";
import { useFetching } from "@/shared/hooks";
import { AxiosResponse } from "axios";
import {IMovie, IMovieList, MovieCard} from "@/entities/movie";

interface ISliderProps<T> {
    title: string;
    dataRequest: () => Promise<AxiosResponse<T>>;
    slidesToShow:number;
    slidesToScroll:number;
    view:ViewCard.ELONGATED | ViewCard.RECTANGLE;
}

export const MovieSlider = <T extends IMovieList>({ title, dataRequest,slidesToShow,slidesToScroll,view}: ISliderProps<T>) => {
    const { data, isLoading, error } = useFetching<T>(dataRequest);
    return (
        <div className={styles.movie__slider__wrapper}>
            {title &&<h3>{title}</h3>}
            {error ? (
                <div>{error}</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data && data.results ? (
                <SliderWithButtons
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToScroll}
                    slides={data.results.map((movie: IMovie) => (
                        <MovieCard id={movie.id} key={movie.id} view={view} />
                    ))}
                />
            ) : null}
        </div>
    );
};
