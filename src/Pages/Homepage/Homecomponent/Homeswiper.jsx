import React, { useState } from "react";
import SwiperHome from "../../../Components/Swiper/SwiperHome";

function Homeswiper() {
  const [swiperActiveidx, setSwiperActiveidx] = useState(0);
  return (
    <>
      <section class="hero-slider-section">
        <div class="main-hero-slider swiper">
          <div class="swiper-wrapper">
            <SwiperHome setSwiperActiveidx={setSwiperActiveidx} />
          </div>
          <div class="pagination-section swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              class={`swiper-pagination-bullet  ${
                swiperActiveidx % 3 == 0
                  ? " swiper-pagination-bullet-active"
                  : ""
              } `}
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span>
            <span
              class={`swiper-pagination-bullet  ${
                swiperActiveidx % 3 == 1
                  ? " swiper-pagination-bullet-active"
                  : ""
              } `}
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
            ></span>
            <span
              class={`swiper-pagination-bullet  ${
                swiperActiveidx % 3 == 2
                  ? " swiper-pagination-bullet-active"
                  : ""
              } `}
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeswiper;
