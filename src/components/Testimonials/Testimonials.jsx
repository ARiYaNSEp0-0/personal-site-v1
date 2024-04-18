import { Heading, Paragraph } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";

import pic1 from "../../assets/demo-images/profile1.jpg";
import pic2 from "../../assets/demo-images/profile2.jpg";
import pic3 from "../../assets/demo-images/profile3.jpg";
import pic4 from "../../assets/demo-images/profile4.jpg";

import "./Testimonials.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const clients = [
    {
      id: 1,
      avatar: pic1,
      review: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ`,
    },
    {
      id: 2,
      avatar: pic2,
      review: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ`,
    },
    {
      id: 3,
      avatar: pic3,
      review: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ`,
    },
    {
      id: 4,
      avatar: pic4,
      review: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ`,
    },
  ];
  return (
    <section className="testimonials">
      <div className="container container-md">
        <div className="testimonials__inner">
          <div className="testimonials__intro">
            <Heading level="h2" className="section-heading">
              مشتریان همیشه <b className="highlight-text">کار های استثنایی</b>{" "}
              از من دریافت می کنند ...
            </Heading>
          </div>
          <div className="testimonials__slider">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id} className="flex-center">
                  <div className="testimonials__slide">
                    <img src={client.avatar} alt="" />
                    <Paragraph>{client.review}</Paragraph>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
