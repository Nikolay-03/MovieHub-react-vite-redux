import styles from './home.module.css'
import {HomePageBanners} from "@/widgets/homePageBanners";
import {Header} from "@/widgets/header";
import {NowPlayingMoviesSlides} from "@/widgets/NowPlayingMoviesSlides";
import {TopRatedMoviesSlides} from "@/widgets/TopRatedMoviesSlides";
export const Home = () => {
    return (
        <div className={styles.home__page__wrapper}>
            <Header/>
            <HomePageBanners/>
            <TopRatedMoviesSlides/>
            <NowPlayingMoviesSlides/>
        </div>
    );
};

