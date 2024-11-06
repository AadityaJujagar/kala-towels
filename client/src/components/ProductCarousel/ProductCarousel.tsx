import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./productcarousel.css";
import { EffectFade, Autoplay } from "swiper/modules";
import Beach from "../../../public/assets/products carousel/b.jpg";
import Dobby from "../../../public/assets/products carousel/d.jpg";
import Hotel from "../../../public/assets/products carousel/h.jpg";
import Jacquartd from "../../../public/assets/products carousel/j.jpg";
import Kitchen from "../../../public/assets/products carousel/k.jpg";
import Napkins from "../../../public/assets/products carousel/n.jpg";
import Pool from "../../../public/assets/products carousel/p.jpg";
import Velour from "../../../public/assets/products carousel/v.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ProductCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="mySwiperSlider">
        <img src={Hotel} alt="carousel-hotel" />
        <div className="product-headers">
          <span>Hotel-Grade Luxury Towels</span>
          <p>
            Premium quality towels crafted for durability and comfort, ideal for
            home or hospitality.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Beach} alt="carousel-beach" />
        <div className="product-headers">
          <span>Sun-Ready Beach Towels</span>
          <p>
            Bold, vibrant, and extra-large—perfect for beach days and poolside
            lounging.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Kitchen} alt="carousel-kitchen" />
        <div className="product-headers">
          <span>Versatile Kitchen Towels</span>
          <p>
            Soft, durable, and absorbent—perfect for handling all your kitchen
            needs.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Dobby} alt="carousel-dobby" />
        <div className="product-headers">
          <span>Elegant Dobby Towels</span>
          <p>
            Classic, sophisticated patterns with soft, absorbent comfort for
            everyday luxury.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Jacquartd} alt="carousel-jacquartd" />
        <div className="product-headers">
          <span>Artisan Jacquard Towels</span>
          <p>
            Intricate patterns woven with care, adding a touch of elegance to
            any space.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Velour} alt="carousel-velour" />
        <div className="product-headers">
          <span>Luxurious Velour Towels</span>
          <p>
            Ultra-soft and plush, these velour towels offer a touch of
            indulgence with every use.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Pool} alt="carousel-pool" />
        <div className="product-headers">
          <span>Quick-Dry Pool Towels</span>
          <p>
            Designed for outdoor use with fast-drying fabrics to keep you
            comfortable by the water.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Napkins} alt="carousel-napkins" />
        <div className="product-headers">
          <span>Elegant Napkin Towels</span>
          <p>
            Perfect for dining or decor, these towels add charm and refinement
            to your table.
          </p>
          <KeyboardDoubleArrowRightIcon style={{ fontSize: "48px" }} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
