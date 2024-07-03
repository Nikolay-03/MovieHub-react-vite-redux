import {useFetching} from "@/shared/hooks";
import styles from './seriesSlider.module.css'
import {SliderWithButtons} from "@/shared/ui";
import {ViewCard} from "@/shared/consts";
import {ISeriesDto, ISeriesList, SeriesCard} from "@/entities/series";
import {AxiosResponse} from "axios";

interface ISliderProps<T> {
    title: string;
    dataRequest: () => Promise<AxiosResponse<T>>;
    slidesToShow:number;
    slidesToScroll:number;
    view:ViewCard.RECTANGLE | ViewCard.ELONGATED;
}
export const SeriesSlider = <T extends ISeriesList>({ title, dataRequest,slidesToShow,slidesToScroll,view}: ISliderProps<T>) => {
    const { data, isLoading, error } = useFetching<T>(dataRequest);
    return (
        <div className={styles.series__slider__wrapper}>
            {title &&<h3>{title}</h3>}
            {error ? (
                <div>{error}</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data && data.results ? (
                <SliderWithButtons
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToScroll}
                    slides={data.results.map((series: ISeriesDto) => (
                        <SeriesCard
                            original_name={series.original_name}
                            image_path={view === ViewCard.RECTANGLE? series.backdrop_path : series.poster_path}
                            vote_average={series.vote_average}
                            view={view}
                            key={series.id}
                        />
                    ))}
                />
            ) : null}
        </div>
    );
};

