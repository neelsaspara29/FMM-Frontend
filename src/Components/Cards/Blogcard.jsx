import React from "react";

function Blogcard(props) {
  return (
    <>
      <div class="blog-slide swiper-slide">
        <div class="image-section">
          <img src={props.src} alt="image" />
        </div>
        <div class="blog-content">
          <div class="blog-tag">
            <span>SKIN CARE</span>
            <span>BEAUTY</span>
            <span>SKIN CARE</span>
          </div>
          <h3 class="blog-title">Modern Salon</h3>
          <p class="description">
            Modern Salon provides salon professionals with how-to education,
            creative inspiration, and validation of their work and passion
            <span>READ MORE</span>
          </p>
          <div class="main-blog-title">
            By <span class="name">Ayush Arora</span> 3 Days ago
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
