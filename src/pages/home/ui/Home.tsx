import styles from './home.module.css'
import {HomePageBanners} from "@/widgets/homePageBanners";
import {Header} from "@/widgets/header";
import {NowPlayingMoviesSlides} from "@/widgets/NowPlayingMoviesSlides";
import {TopRatedMoviesSlides} from "@/widgets/TopRatedMoviesSlides";
import {PopularMoviesSlides} from "@/widgets/PopularMoviesSlides";
export const Home = () => {
    return (
        <div className={styles.home__page__wrapper}>
            <Header/>
            <HomePageBanners/>
            <NowPlayingMoviesSlides/>
            <TopRatedMoviesSlides/>
            <PopularMoviesSlides/>
        </div>
    );
};

