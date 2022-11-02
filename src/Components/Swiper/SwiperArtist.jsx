import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import demandartistData from "../../Constants/SupportData/demandartistData";
import Demandartistcard from "../Cards/Demandartistcard";
function SwiperArtist() {
  const [swiperActiveidx, setSwiperActiveidx] = useState(4);
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(e) => e.activeIndex}
        loop={true}
        navigation={{
          nextEl: ".next",
        }}
        speed={800}
        autoplay={4000}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
        }}
      >
        {demandartistData.map(({ img }) => {
          return (
            <SwiperSlide>
              <Demandartistcard src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperArtist;
