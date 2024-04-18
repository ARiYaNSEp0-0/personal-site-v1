import Heading from "../Heading/Heading";

import "./Works.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import pic1 from "../../assets/images/sidebar.png";
import pic2 from "../../assets/images/ecommerce.png";
import pic3 from "../../assets/images/hoc.png";
import pic4 from "../../assets/images/musicapp.png";

import { Navigation } from "swiper/modules";

const Works = () => {
  return (
    <section className="works">
      <div className="container container-md">
        <div className="works__inner">
          <div className="works__intro">
            <Heading level="h2" className="section-heading">
              نمونه کار ها
            </Heading>
          </div>
          <div className="works__slider">
            <Swiper
              
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={pic1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pic2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pic3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pic4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
