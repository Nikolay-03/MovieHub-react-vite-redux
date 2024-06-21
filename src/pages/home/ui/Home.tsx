import {TopRatedMoviesList} from "@/widgets/TopRatedMoviesList";
import styles from './home.module.css'
import {HomePageBanners} from "@/widgets/homePageBanners";
import {Header} from "@/widgets/header";
export const Home = () => {
    return (
        <div className={styles.home__page__wrapper}>
            <Header/>
            <HomePageBanners/>
            <TopRatedMoviesList/>
        </div>
    );
};

