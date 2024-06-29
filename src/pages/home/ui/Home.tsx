import styles from '../../styles/page.module.css'
import {HomePageBanners} from "@/widgets/homePageBanners";
import {Header} from "@/widgets/header";
import {MovieSlider} from "@/widgets/slider";
import {getMovieList} from "@/entities/movie";
import {NowPlayingMovies, TopRatedMovies, UpcomingMovies} from "@/shared/api";
import {ViewCard} from "@/shared/consts";

export const Home = () => {
    return (
        <div className={styles.page__wrapper}>
            <Header/>
            <HomePageBanners/>
            <MovieSlider
                title={'Upcoming movies'}
                dataRequest={() =>getMovieList(UpcomingMovies)}
                slidesToShow={6}
                slidesToScroll={6}
                view={ViewCard.ELONGATED}
            />
            <MovieSlider
                title={'Top rated movies'}
                dataRequest={() =>getMovieList(TopRatedMovies)}
                slidesToShow={4}
                slidesToScroll={4}
                view={ViewCard.RECTANGLE}
            />
            <MovieSlider
                title={'Now playing movies'}
                dataRequest={() =>getMovieList(NowPlayingMovies)}
                slidesToShow={4}
                slidesToScroll={4}
                view={ViewCard.RECTANGLE}
            />
        </div>
    );
};

