import styles from './slider.module.css';
import { SliderWithButtons } from "@/shared/ui";
import { ViewCard } from "@/shared/consts";
import { useFetching } from "@/shared/hooks";
import { AxiosResponse } from "axios";
import {IMovie, MovieCard} from "@/entities/movie";

interface ISliderProps<T> {
    title: string;
    dataRequest: () => Promise<AxiosResponse<T>>;
    slidesToShow:number;
    slidesToScroll:number;
    view:ViewCard;
}

export const MovieSlider = <T extends { results: IMovie[] }>({ title, dataRequest,slidesToShow,slidesToScroll,view}: ISliderProps<T>) => {
    const { data, isLoading, error } = useFetching<T>(dataRequest);
    return (
        <div className={styles.movie__slider__wrapper}>
            <h3>{title}</h3>
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
