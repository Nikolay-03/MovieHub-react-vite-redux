import {useParams} from "react-router-dom";
import styles from '../../styles/page.module.css'
import {useFetching} from "@/shared/hooks";
import {getSeriesInfo} from "@/entities/series";
import CircularProgress from "@mui/material/CircularProgress";
import {SeriesPageBanner} from "@/widgets/seriesPageBanner";
import {Header} from "@/widgets/header";

export const SeriesPage = () => {
    const {seriesId} = useParams()
    const {data,isLoading,error} = useFetching(async () => getSeriesInfo(seriesId),[seriesId])
    if (isLoading){
        return (
            <div className={styles.page__loading}>
                <CircularProgress color="inherit"/>
            </div>
        )
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div className={styles.page__wrapper}>
            <Header/>
            {data &&
                <SeriesPageBanner
                    backdrop_path={data.backdrop_path}
                    original_name={data.original_name}
                    first_air_date={data.first_air_date}
                    genres={data.genres}
                    number_of_seasons={data.number_of_seasons}
                />}

        </div>
    );
};

