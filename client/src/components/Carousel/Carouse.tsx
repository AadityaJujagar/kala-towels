import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import carouselImage1 from "../../../public/assets/main slider/carousel-image1.jpg";
import carouselImage2 from "../../../public/assets/main slider/carousel-image2.jpg";
import carouselImage3 from "../../../public/assets/main slider/carousel-image3.jpg";
import carouselImage4 from "../../../public/assets/main slider/carousel-image4.jpg";
import carouselImage5 from "../../../public/assets/main slider/carousel-image5.jpg";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="main-carousel">
          <img src={carouselImage1} alt="carousel image 1" />
          <div className="headers">
            <span>Unmatched Softness, Unparalleled Quality</span>
            <p>
              Crafted for comfort, designed to last - towels that elevate every
              moment.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-carousel">
          <img src={carouselImage2} alt="carousel image 2" />
          <div className="headers">
            <span>Sustainable Luxury in Every Thread</span>
            <p>Eco-conscious towels woven with care, for you and the planet.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-carousel">
          <img src={carouselImage3} alt="carousel image 3" />
          <div className="headers">
            <span>Experience the Art of Softness</span>
            <p>
              Expertly crafted towels, designed to be as gentle on the skin as
              they are durable
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-carousel">
          <img src={carouselImage4} alt="carousel image 4" />
          <div className="headers">
            <span>Craftsmanship That Speaks Comfort</span>
            <p>
              From fibers to finish, each towel tells a story of quality and
              care.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-carousel">
          <img src={carouselImage5} alt="carousel image 5" />
          <div className="headers">
            <span>Craftsmanship That Speaks Comfort</span>
            <p>
              From fibers to finish, each towel tells a story of quality and
              care.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
