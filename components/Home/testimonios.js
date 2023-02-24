import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CardTest from "./card-test";
import "swiper/css/navigation";

function Testimonios() {
  return (
    <div className="conteiner-testimonios">
      <h2 className="title-section text-4xl w-8/12 sm:w-8/12 md:w-96 tests relative">
        <b style={{ color: "#06aed5" }}>Trusted</b> by&nbsp; 100&apos;s of
        clients{" "}
        <img className="peoples m-auto static md:absolute right-4 bottom-0" src="/assets/testimonios.png" alt="peoples" />
      </h2>
      <div className="slider-2">
        <Swiper
          slidesPerView={"3"}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay
          navigation={true}
          modules={[Pagination, Navigation]}
          watchOverflow={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides:true
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 50,
              centeredSlides:true
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1150: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <CardTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardTest />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonios;
