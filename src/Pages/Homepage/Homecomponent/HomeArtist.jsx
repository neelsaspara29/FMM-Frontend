import React from "react";
import SwiperArtist from "../../../Components/Swiper/SwiperArtist";
import { useSwiper } from "swiper/react";

function HomeArtist() {
  const swiper = useSwiper();
  return (
    <>
      <section class="artists-section">
        <div class="container">
          <h2 class="section-title">
            artists in demand
            <a href="#" class="view-all-link">
              View All
            </a>
          </h2>
          <div class="artists-section-inner">
            <div class="swiper main-artists-slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div class="swiper-wrapper">
                <SwiperArtist />
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    d="M20.0315 10.874L11.8636 16.7841C11.8296 16.8086 11.802 16.8407 11.7829 16.878C11.7638 16.9152 11.7539 16.9564 11.7539 16.9983C11.7539 17.0401 11.7638 17.0813 11.7829 17.1186C11.802 17.1558 11.8296 17.188 11.8636 17.2124L20.0315 23.1226C20.2075 23.2488 20.4532 23.1226 20.4532 22.9068V21.3495C20.4532 21.0109 20.2905 20.6888 20.0149 20.4896L15.1872 16.9999L20.0149 13.507C20.2905 13.3077 20.4532 12.989 20.4532 12.647V11.0898C20.4532 10.874 20.2075 10.7478 20.0315 10.874Z"
                    fill="#FF385C"
                  />
                  <path
                    d="M17 2.125C8.78555 2.125 2.125 8.78555 2.125 17C2.125 25.2145 8.78555 31.875 17 31.875C25.2145 31.875 31.875 25.2145 31.875 17C31.875 8.78555 25.2145 2.125 17 2.125ZM17 29.3516C10.1801 29.3516 4.64844 23.8199 4.64844 17C4.64844 10.1801 10.1801 4.64844 17 4.64844C23.8199 4.64844 29.3516 10.1801 29.3516 17C29.3516 23.8199 23.8199 29.3516 17 29.3516Z"
                    fill="#FF385C"
                  />
                </g>
              </svg>
            </div>
            <div class="swiper-button-next" onClick={() => swiper.slideNext()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    d="M13.9685 23.126L22.1364 17.2159C22.1704 17.1914 22.198 17.1593 22.2171 17.122C22.2362 17.0848 22.2461 17.0436 22.2461 17.0017C22.2461 16.9599 22.2362 16.9187 22.2171 16.8814C22.198 16.8442 22.1704 16.812 22.1364 16.7876L13.9685 10.8774C13.7925 10.7512 13.5468 10.8774 13.5468 11.0932V12.6505C13.5468 12.9891 13.7095 13.3112 13.9851 13.5104L18.8128 17.0001L13.9851 20.493C13.7095 20.6923 13.5468 21.011 13.5468 21.353V22.9102C13.5468 23.126 13.7925 23.2522 13.9685 23.126Z"
                    fill="#FF385C"
                  />
                  <path
                    d="M17 31.875C25.2145 31.875 31.875 25.2145 31.875 17C31.875 8.78555 25.2145 2.125 17 2.125C8.78555 2.125 2.125 8.78555 2.125 17C2.125 25.2145 8.78555 31.875 17 31.875ZM17 4.64844C23.8199 4.64844 29.3516 10.1801 29.3516 17C29.3516 23.8199 23.8199 29.3516 17 29.3516C10.1801 29.3516 4.64844 23.8199 4.64844 17C4.64844 10.1801 10.1801 4.64844 17 4.64844Z"
                    fill="#FF385C"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeArtist;
