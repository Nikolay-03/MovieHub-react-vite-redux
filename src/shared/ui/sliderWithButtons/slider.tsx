import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import {NextButton, PrevButton} from "@/shared/ui";
interface ISliderWithButtonsProps{
    slides:React.ReactNode[],
    slidesToShow:number,
    slidesToScroll:number
}
export const  SliderWithButtons = ({slides,slidesToShow,slidesToScroll}:ISliderWithButtonsProps) => {
    const settings:Settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
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

