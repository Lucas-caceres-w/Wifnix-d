import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";

function Slider() {
  return (
    <div className="container-fluid slider">
      <Swiper
        slidesPerView={"2"}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slideNextClass="no-visible"
        slidePrevClass="no-visible"
        modules={[Pagination, Navigation, Autoplay]}
        watchOverflow={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="slider-item">
          <div className="conteiner-item">
            <Image
              src="/assets/camara.jpg"
              className="img-slider"
              fill={true}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <div className="conteiner-item">
            <Image
              src="/assets/cam-security.jpg"
              className="img-slider"
              fill={true}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <div className="conteiner-item">
            <Image
              src="/assets/compu.jpg"
              className="img-slider"
              fill={true}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <div className="conteiner-item">
            <Image
              src="/assets/mujer-playa.jpg"
              className="img-slider"
              fill={true}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <div className="conteiner-item">
            <Image
              src="/assets/personas.jpg"
              className="img-slider"
              fill={true}
              alt="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
