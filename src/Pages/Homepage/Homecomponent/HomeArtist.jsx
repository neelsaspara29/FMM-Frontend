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
            
                <SwiperArtist />
              {/* </div>
              <div class="swiper-pagination"></div>
            </div> */}
      
            
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeArtist;
