import React from "react";
import SwiperBlog from "../../../Components/Swiper/SwiperBlog";

function Blogsection() {
  return (
    <>
      <section class="blog-section">
        <div class="row">
          <div class="col-3">
            <h2 class="section-title">
              Blogs <br /> Of the week
            </h2>
          </div>
          <div class="col-7">
            <div class="blog-slider-section swiper">
              <div class="swiper-wrapper">
                <SwiperBlog />
                {/* <div class="blog-slide swiper-slide">
                  <div class="image-section">
                    <img src="assets/images/blog-img1.png" alt="image" />
                  </div>
                  <div class="blog-content">
                    <div class="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 class="blog-title">Modern Salon</h3>
                    <p class="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div class="main-blog-title">
                      By <span class="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div class="blog-slide swiper-slide">
                  <div class="image-section">
                    <img src="assets/images/blog-img2.png" alt="image" />
                  </div>
                  <div class="blog-content">
                    <div class="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 class="blog-title">Modern Salon</h3>
                    <p class="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div class="main-blog-title">
                      By <span class="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div class="blog-slide swiper-slide">
                  <div class="image-section">
                    <img src="assets/images/blog-img1.png" alt="image" />
                  </div>
                  <div class="blog-content">
                    <div class="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 class="blog-title">Modern Salon</h3>
                    <p class="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div class="main-blog-title">
                      By <span class="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div class="blog-slide swiper-slide">
                  <div class="image-section">
                    <img src="assets/images/blog-img2.png" alt="image" />
                  </div>
                  <div class="blog-content">
                    <div class="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 class="blog-title">Modern Salon</h3>
                    <p class="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div class="main-blog-title">
                      By <span class="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogsection;
