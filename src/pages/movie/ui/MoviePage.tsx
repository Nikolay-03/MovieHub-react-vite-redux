import styles from '../../styles/page.module.css'
import {MoviePageBanner} from "@/widgets/MoviePageBanner";
import {useParams} from "react-router-dom";
import {Header} from "@/widgets/header";
import {useFetching} from "@/shared/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import {getMovieInfo, IMovie, MovieOverview} from "@/entities/movie";
export const MoviePage = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useFetching<IMovie>(async () =>
        await getMovieInfo(id)
    )
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
                <MoviePageBanner
                    original_title={data.original_title}
                    genres={data.genres}
                    release_date={data.release_date}
                    duration={data.runtime}
                    backdrop_path={data.backdrop_path}
                />
            }
            {data && data.overview && <MovieOverview overview={data.overview}/>}
        </div>
    );
};

