import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './autoPlaySlider.css'
export const AutoPlaySlider = (props:any) => {
    const {slides} = props
    const settings:Settings = {
        dots: true,
        pauseOnHover: true,
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 5000,
    };
    return (
        <div className='auto__play__slider__wrapper'>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    );
}

