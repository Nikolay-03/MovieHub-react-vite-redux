import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import {NextButton, PrevButton} from "@/shared/ui";

export const  CustomSlider = (props) => {
    const {slides} = props
    const settings:Settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <PrevButton />
    };
    settings.nextArrow = <NextButton slidesToShow={settings.slidesToShow}/>
    return (
        <div className='slider__wrapper'>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div>
    );
}

