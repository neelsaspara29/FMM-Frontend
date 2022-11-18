import React, { useEffect } from "react";
import Swiper from "swiper";

const ArtistInDemand = () => {
  useEffect(() => {
    var artistsSlider = new Swiper(".main-artists-slider", {
      slidesPerView: 4,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
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
      },
    });
  }, []);
  return (
    <>
      <section className="artists-section blog-list-artists">
        <div className="container">
          <h2 className="section-title">
            artists in demand
            <a href="#" className="view-all-link">
              View All
            </a>
          </h2>
          <div className="artists-section-inner">
            <div className="swiper main-artists-slider">
              <div className="swiper-wrapper">
                <div className="slider-item swiper-slide">
                  <div className="slide-wrapper">
                    <div className="image-section">
                      <div className="images">
                        <img
                          src="assets/images/artist-img-1.png"
                          alt="Images"
                        />
                      </div>
                      <div className="reviews">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M4.99756 7.37296L7.77856 9.05146L7.04056 5.88796L9.49756 3.75946L6.26206 3.48496L4.99756 0.501465L3.73306 3.48496L0.497559 3.75946L2.95456 5.88796L2.21656 9.05146L4.99756 7.37296Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heart"
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M5 1C2.7912 1 1 2.61538 1 4.60837C1 6.2172 1.7 10.0355 8.5904 13.8954C8.71383 13.9638 8.85552 14 9 14C9.14448 14 9.28617 13.9638 9.4096 13.8954C16.3 10.0355 17 6.2172 17 4.60837C17 2.61538 15.2088 1 13 1C10.7912 1 9 3.18689 9 3.18689C9 3.18689 7.2088 1 5 1Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content-section">
                      <h3 className="title">
                        Sweety Khanna
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="green-icon"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M13.0566 6.99999L13.9562 5.39166C14.0477 5.22608 13.9914 5.01771 13.829 4.92069L12.2442 3.97876L12.2207 2.13495C12.2181 1.94351 12.0635 1.78899 11.8722 1.78635L10.0284 1.76281L9.08402 0.170999C8.98699 0.00857785 8.77862 -0.0476634 8.61305 0.0437952L6.99999 0.943365L5.39166 0.0437952C5.22608 -0.0476634 5.01771 0.00857785 4.92069 0.170999L3.97876 1.75578L2.13495 1.77933C1.94351 1.78185 1.78899 1.93649 1.78635 2.12782L1.76281 3.97163L0.170999 4.91598C0.00857785 5.01301 -0.0476634 5.22138 0.0437952 5.38695L0.943365 7.00001L0.0437952 8.60834C-0.0476634 8.77392 0.00857785 8.98229 0.170999 9.07931L1.75578 10.0212L1.77933 11.8651C1.78185 12.0565 1.93649 12.211 2.12782 12.2136L3.97163 12.2372L4.91356 13.822H4.91366C5.0107 13.9844 5.21896 14.0406 5.38463 13.9491L6.99998 13.0567L8.60832 13.9562C8.7741 14.0464 8.98151 13.9904 9.07928 13.829L10.0212 12.2442L11.865 12.2207C12.0565 12.2182 12.211 12.0635 12.2136 11.8722L12.2372 10.0284L13.8219 9.08647V9.08637C13.9844 8.98933 14.0406 8.78107 13.949 8.6154L13.0566 6.99999ZM9.67269 5.35161C8.53702 6.49003 7.51855 7.73964 6.63268 9.08165C6.57528 9.17658 6.47688 9.23924 6.3665 9.25111H6.33118C6.23278 9.25175 6.13869 9.21064 6.07215 9.1381L4.32021 7.23543C4.21561 7.08952 4.23716 6.88832 4.37025 6.76772C4.50345 6.64725 4.70582 6.64588 4.8406 6.76447L6.29354 8.3257C7.15158 7.08973 8.11254 5.92863 9.16642 4.85483C9.30487 4.71837 9.52721 4.71837 9.66567 4.85483C9.73264 4.91969 9.77101 5.00852 9.77227 5.10177C9.77363 5.19501 9.73779 5.2849 9.67271 5.35165L9.67269 5.35161Z"
                            fill="#00C853"
                          />
                        </svg>
                      </h3>
                      <div className="location">
                        <span className="location-section">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="location-svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M3 0C2.20464 0.000860118 1.44212 0.290868 0.879718 0.806406C0.317313 1.32195 0.000941501 2.02092 3.19169e-06 2.75C-0.000949414 3.34581 0.211361 3.92545 0.604366 4.4C0.604366 4.4 0.686184 4.49875 0.699548 4.513L3 7L5.30154 4.51175C5.31354 4.4985 5.39563 4.4 5.39563 4.4L5.39591 4.39925C5.78872 3.9249 6.00093 3.34553 6 2.75C5.99906 2.02092 5.68269 1.32195 5.12028 0.806406C4.55788 0.290868 3.79536 0.000860118 3 0ZM3 3.75C2.78424 3.75 2.57332 3.69135 2.39392 3.58147C2.21453 3.47159 2.0747 3.31541 1.99213 3.13268C1.90956 2.94996 1.88796 2.74889 1.93005 2.55491C1.97215 2.36093 2.07605 2.18275 2.22861 2.04289C2.38118 1.90304 2.57556 1.8078 2.78717 1.76921C2.99879 1.73063 3.21813 1.75043 3.41747 1.82612C3.61681 1.90181 3.78719 2.02998 3.90706 2.19443C4.02693 2.35888 4.09091 2.55222 4.09091 2.75C4.09055 3.01512 3.9755 3.26928 3.77099 3.45674C3.56648 3.64421 3.28922 3.74967 3 3.75Z"
                              fill="#FF385C"
                            />
                          </svg>
                          NEW DELHI,IND
                        </span>
                        <span className="km">1.2 KM</span>
                      </div>
                      <div className="tag">
                        <span>Certified Artist</span>
                        <span>Photoshoot Makeup</span>
                        <span>Hair Styling</span>
                        <span>Studio</span>
                        <span>Travels to venue</span>
                      </div>
                      <div className="services-text">
                        Services Starting at : ₹5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-item swiper-slide">
                  <div className="slide-wrapper">
                    <div className="image-section">
                      <div className="images">
                        <img
                          src="assets/images/artist-img-2.png"
                          alt="Images"
                        />
                      </div>
                      <div className="reviews">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M4.99756 7.37296L7.77856 9.05146L7.04056 5.88796L9.49756 3.75946L6.26206 3.48496L4.99756 0.501465L3.73306 3.48496L0.497559 3.75946L2.95456 5.88796L2.21656 9.05146L4.99756 7.37296Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heart"
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M5 1C2.7912 1 1 2.61538 1 4.60837C1 6.2172 1.7 10.0355 8.5904 13.8954C8.71383 13.9638 8.85552 14 9 14C9.14448 14 9.28617 13.9638 9.4096 13.8954C16.3 10.0355 17 6.2172 17 4.60837C17 2.61538 15.2088 1 13 1C10.7912 1 9 3.18689 9 3.18689C9 3.18689 7.2088 1 5 1Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content-section">
                      <h3 className="title">
                        Sweety Khanna
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="green-icon"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M13.0566 6.99999L13.9562 5.39166C14.0477 5.22608 13.9914 5.01771 13.829 4.92069L12.2442 3.97876L12.2207 2.13495C12.2181 1.94351 12.0635 1.78899 11.8722 1.78635L10.0284 1.76281L9.08402 0.170999C8.98699 0.00857785 8.77862 -0.0476634 8.61305 0.0437952L6.99999 0.943365L5.39166 0.0437952C5.22608 -0.0476634 5.01771 0.00857785 4.92069 0.170999L3.97876 1.75578L2.13495 1.77933C1.94351 1.78185 1.78899 1.93649 1.78635 2.12782L1.76281 3.97163L0.170999 4.91598C0.00857785 5.01301 -0.0476634 5.22138 0.0437952 5.38695L0.943365 7.00001L0.0437952 8.60834C-0.0476634 8.77392 0.00857785 8.98229 0.170999 9.07931L1.75578 10.0212L1.77933 11.8651C1.78185 12.0565 1.93649 12.211 2.12782 12.2136L3.97163 12.2372L4.91356 13.822H4.91366C5.0107 13.9844 5.21896 14.0406 5.38463 13.9491L6.99998 13.0567L8.60832 13.9562C8.7741 14.0464 8.98151 13.9904 9.07928 13.829L10.0212 12.2442L11.865 12.2207C12.0565 12.2182 12.211 12.0635 12.2136 11.8722L12.2372 10.0284L13.8219 9.08647V9.08637C13.9844 8.98933 14.0406 8.78107 13.949 8.6154L13.0566 6.99999ZM9.67269 5.35161C8.53702 6.49003 7.51855 7.73964 6.63268 9.08165C6.57528 9.17658 6.47688 9.23924 6.3665 9.25111H6.33118C6.23278 9.25175 6.13869 9.21064 6.07215 9.1381L4.32021 7.23543C4.21561 7.08952 4.23716 6.88832 4.37025 6.76772C4.50345 6.64725 4.70582 6.64588 4.8406 6.76447L6.29354 8.3257C7.15158 7.08973 8.11254 5.92863 9.16642 4.85483C9.30487 4.71837 9.52721 4.71837 9.66567 4.85483C9.73264 4.91969 9.77101 5.00852 9.77227 5.10177C9.77363 5.19501 9.73779 5.2849 9.67271 5.35165L9.67269 5.35161Z"
                            fill="#00C853"
                          />
                        </svg>
                      </h3>
                      <div className="location">
                        <span className="location-section">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="location-svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M3 0C2.20464 0.000860118 1.44212 0.290868 0.879718 0.806406C0.317313 1.32195 0.000941501 2.02092 3.19169e-06 2.75C-0.000949414 3.34581 0.211361 3.92545 0.604366 4.4C0.604366 4.4 0.686184 4.49875 0.699548 4.513L3 7L5.30154 4.51175C5.31354 4.4985 5.39563 4.4 5.39563 4.4L5.39591 4.39925C5.78872 3.9249 6.00093 3.34553 6 2.75C5.99906 2.02092 5.68269 1.32195 5.12028 0.806406C4.55788 0.290868 3.79536 0.000860118 3 0ZM3 3.75C2.78424 3.75 2.57332 3.69135 2.39392 3.58147C2.21453 3.47159 2.0747 3.31541 1.99213 3.13268C1.90956 2.94996 1.88796 2.74889 1.93005 2.55491C1.97215 2.36093 2.07605 2.18275 2.22861 2.04289C2.38118 1.90304 2.57556 1.8078 2.78717 1.76921C2.99879 1.73063 3.21813 1.75043 3.41747 1.82612C3.61681 1.90181 3.78719 2.02998 3.90706 2.19443C4.02693 2.35888 4.09091 2.55222 4.09091 2.75C4.09055 3.01512 3.9755 3.26928 3.77099 3.45674C3.56648 3.64421 3.28922 3.74967 3 3.75Z"
                              fill="#FF385C"
                            />
                          </svg>
                          NEW DELHI,IND
                        </span>
                        <span className="km">1.2 KM</span>
                      </div>
                      <div className="tag">
                        <span>Certified Artist</span>
                        <span>Photoshoot Makeup</span>
                        <span>Hair Styling</span>
                        <span>Studio</span>
                        <span>Travels to venue</span>
                      </div>
                      <div className="services-text">
                        Services Starting at : ₹5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-item swiper-slide">
                  <div className="slide-wrapper">
                    <div className="image-section">
                      <div className="images">
                        <img
                          src="assets/images/artist-img-3.png"
                          alt="Images"
                        />
                      </div>
                      <div className="reviews">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M4.99756 7.37296L7.77856 9.05146L7.04056 5.88796L9.49756 3.75946L6.26206 3.48496L4.99756 0.501465L3.73306 3.48496L0.497559 3.75946L2.95456 5.88796L2.21656 9.05146L4.99756 7.37296Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heart"
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M5 1C2.7912 1 1 2.61538 1 4.60837C1 6.2172 1.7 10.0355 8.5904 13.8954C8.71383 13.9638 8.85552 14 9 14C9.14448 14 9.28617 13.9638 9.4096 13.8954C16.3 10.0355 17 6.2172 17 4.60837C17 2.61538 15.2088 1 13 1C10.7912 1 9 3.18689 9 3.18689C9 3.18689 7.2088 1 5 1Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content-section">
                      <h3 className="title">
                        Sweety Khanna
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="green-icon"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M13.0566 6.99999L13.9562 5.39166C14.0477 5.22608 13.9914 5.01771 13.829 4.92069L12.2442 3.97876L12.2207 2.13495C12.2181 1.94351 12.0635 1.78899 11.8722 1.78635L10.0284 1.76281L9.08402 0.170999C8.98699 0.00857785 8.77862 -0.0476634 8.61305 0.0437952L6.99999 0.943365L5.39166 0.0437952C5.22608 -0.0476634 5.01771 0.00857785 4.92069 0.170999L3.97876 1.75578L2.13495 1.77933C1.94351 1.78185 1.78899 1.93649 1.78635 2.12782L1.76281 3.97163L0.170999 4.91598C0.00857785 5.01301 -0.0476634 5.22138 0.0437952 5.38695L0.943365 7.00001L0.0437952 8.60834C-0.0476634 8.77392 0.00857785 8.98229 0.170999 9.07931L1.75578 10.0212L1.77933 11.8651C1.78185 12.0565 1.93649 12.211 2.12782 12.2136L3.97163 12.2372L4.91356 13.822H4.91366C5.0107 13.9844 5.21896 14.0406 5.38463 13.9491L6.99998 13.0567L8.60832 13.9562C8.7741 14.0464 8.98151 13.9904 9.07928 13.829L10.0212 12.2442L11.865 12.2207C12.0565 12.2182 12.211 12.0635 12.2136 11.8722L12.2372 10.0284L13.8219 9.08647V9.08637C13.9844 8.98933 14.0406 8.78107 13.949 8.6154L13.0566 6.99999ZM9.67269 5.35161C8.53702 6.49003 7.51855 7.73964 6.63268 9.08165C6.57528 9.17658 6.47688 9.23924 6.3665 9.25111H6.33118C6.23278 9.25175 6.13869 9.21064 6.07215 9.1381L4.32021 7.23543C4.21561 7.08952 4.23716 6.88832 4.37025 6.76772C4.50345 6.64725 4.70582 6.64588 4.8406 6.76447L6.29354 8.3257C7.15158 7.08973 8.11254 5.92863 9.16642 4.85483C9.30487 4.71837 9.52721 4.71837 9.66567 4.85483C9.73264 4.91969 9.77101 5.00852 9.77227 5.10177C9.77363 5.19501 9.73779 5.2849 9.67271 5.35165L9.67269 5.35161Z"
                            fill="#00C853"
                          />
                        </svg>
                      </h3>
                      <div className="location">
                        <span className="location-section">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="location-svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M3 0C2.20464 0.000860118 1.44212 0.290868 0.879718 0.806406C0.317313 1.32195 0.000941501 2.02092 3.19169e-06 2.75C-0.000949414 3.34581 0.211361 3.92545 0.604366 4.4C0.604366 4.4 0.686184 4.49875 0.699548 4.513L3 7L5.30154 4.51175C5.31354 4.4985 5.39563 4.4 5.39563 4.4L5.39591 4.39925C5.78872 3.9249 6.00093 3.34553 6 2.75C5.99906 2.02092 5.68269 1.32195 5.12028 0.806406C4.55788 0.290868 3.79536 0.000860118 3 0ZM3 3.75C2.78424 3.75 2.57332 3.69135 2.39392 3.58147C2.21453 3.47159 2.0747 3.31541 1.99213 3.13268C1.90956 2.94996 1.88796 2.74889 1.93005 2.55491C1.97215 2.36093 2.07605 2.18275 2.22861 2.04289C2.38118 1.90304 2.57556 1.8078 2.78717 1.76921C2.99879 1.73063 3.21813 1.75043 3.41747 1.82612C3.61681 1.90181 3.78719 2.02998 3.90706 2.19443C4.02693 2.35888 4.09091 2.55222 4.09091 2.75C4.09055 3.01512 3.9755 3.26928 3.77099 3.45674C3.56648 3.64421 3.28922 3.74967 3 3.75Z"
                              fill="#FF385C"
                            />
                          </svg>
                          NEW DELHI,IND
                        </span>
                        <span className="km">1.2 KM</span>
                      </div>
                      <div className="tag">
                        <span>Certified Artist</span>
                        <span>Photoshoot Makeup</span>
                        <span>Hair Styling</span>
                        <span>Studio</span>
                        <span>Travels to venue</span>
                      </div>
                      <div className="services-text">
                        Services Starting at : ₹5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-item swiper-slide">
                  <div className="slide-wrapper">
                    <div className="image-section">
                      <div className="images">
                        <img
                          src="assets/images/artist-img-4.png"
                          alt="Images"
                        />
                      </div>
                      <div className="reviews">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M4.99756 7.37296L7.77856 9.05146L7.04056 5.88796L9.49756 3.75946L6.26206 3.48496L4.99756 0.501465L3.73306 3.48496L0.497559 3.75946L2.95456 5.88796L2.21656 9.05146L4.99756 7.37296Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heart"
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M5 1C2.7912 1 1 2.61538 1 4.60837C1 6.2172 1.7 10.0355 8.5904 13.8954C8.71383 13.9638 8.85552 14 9 14C9.14448 14 9.28617 13.9638 9.4096 13.8954C16.3 10.0355 17 6.2172 17 4.60837C17 2.61538 15.2088 1 13 1C10.7912 1 9 3.18689 9 3.18689C9 3.18689 7.2088 1 5 1Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content-section">
                      <h3 className="title">
                        Sweety Khanna
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="green-icon"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M13.0566 6.99999L13.9562 5.39166C14.0477 5.22608 13.9914 5.01771 13.829 4.92069L12.2442 3.97876L12.2207 2.13495C12.2181 1.94351 12.0635 1.78899 11.8722 1.78635L10.0284 1.76281L9.08402 0.170999C8.98699 0.00857785 8.77862 -0.0476634 8.61305 0.0437952L6.99999 0.943365L5.39166 0.0437952C5.22608 -0.0476634 5.01771 0.00857785 4.92069 0.170999L3.97876 1.75578L2.13495 1.77933C1.94351 1.78185 1.78899 1.93649 1.78635 2.12782L1.76281 3.97163L0.170999 4.91598C0.00857785 5.01301 -0.0476634 5.22138 0.0437952 5.38695L0.943365 7.00001L0.0437952 8.60834C-0.0476634 8.77392 0.00857785 8.98229 0.170999 9.07931L1.75578 10.0212L1.77933 11.8651C1.78185 12.0565 1.93649 12.211 2.12782 12.2136L3.97163 12.2372L4.91356 13.822H4.91366C5.0107 13.9844 5.21896 14.0406 5.38463 13.9491L6.99998 13.0567L8.60832 13.9562C8.7741 14.0464 8.98151 13.9904 9.07928 13.829L10.0212 12.2442L11.865 12.2207C12.0565 12.2182 12.211 12.0635 12.2136 11.8722L12.2372 10.0284L13.8219 9.08647V9.08637C13.9844 8.98933 14.0406 8.78107 13.949 8.6154L13.0566 6.99999ZM9.67269 5.35161C8.53702 6.49003 7.51855 7.73964 6.63268 9.08165C6.57528 9.17658 6.47688 9.23924 6.3665 9.25111H6.33118C6.23278 9.25175 6.13869 9.21064 6.07215 9.1381L4.32021 7.23543C4.21561 7.08952 4.23716 6.88832 4.37025 6.76772C4.50345 6.64725 4.70582 6.64588 4.8406 6.76447L6.29354 8.3257C7.15158 7.08973 8.11254 5.92863 9.16642 4.85483C9.30487 4.71837 9.52721 4.71837 9.66567 4.85483C9.73264 4.91969 9.77101 5.00852 9.77227 5.10177C9.77363 5.19501 9.73779 5.2849 9.67271 5.35165L9.67269 5.35161Z"
                            fill="#00C853"
                          />
                        </svg>
                      </h3>
                      <div className="location">
                        <span className="location-section">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="location-svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M3 0C2.20464 0.000860118 1.44212 0.290868 0.879718 0.806406C0.317313 1.32195 0.000941501 2.02092 3.19169e-06 2.75C-0.000949414 3.34581 0.211361 3.92545 0.604366 4.4C0.604366 4.4 0.686184 4.49875 0.699548 4.513L3 7L5.30154 4.51175C5.31354 4.4985 5.39563 4.4 5.39563 4.4L5.39591 4.39925C5.78872 3.9249 6.00093 3.34553 6 2.75C5.99906 2.02092 5.68269 1.32195 5.12028 0.806406C4.55788 0.290868 3.79536 0.000860118 3 0ZM3 3.75C2.78424 3.75 2.57332 3.69135 2.39392 3.58147C2.21453 3.47159 2.0747 3.31541 1.99213 3.13268C1.90956 2.94996 1.88796 2.74889 1.93005 2.55491C1.97215 2.36093 2.07605 2.18275 2.22861 2.04289C2.38118 1.90304 2.57556 1.8078 2.78717 1.76921C2.99879 1.73063 3.21813 1.75043 3.41747 1.82612C3.61681 1.90181 3.78719 2.02998 3.90706 2.19443C4.02693 2.35888 4.09091 2.55222 4.09091 2.75C4.09055 3.01512 3.9755 3.26928 3.77099 3.45674C3.56648 3.64421 3.28922 3.74967 3 3.75Z"
                              fill="#FF385C"
                            />
                          </svg>
                          NEW DELHI,IND
                        </span>
                        <span className="km">1.2 KM</span>
                      </div>
                      <div className="tag">
                        <span>Certified Artist</span>
                        <span>Photoshoot Makeup</span>
                        <span>Hair Styling</span>
                        <span>Studio</span>
                        <span>Travels to venue</span>
                      </div>
                      <div className="services-text">
                        Services Starting at : ₹5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-item swiper-slide">
                  <div className="slide-wrapper">
                    <div className="image-section">
                      <div className="images">
                        <img
                          src="assets/images/artist-img-1.png"
                          alt="Images"
                        />
                      </div>
                      <div className="reviews">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M4.99756 7.37296L7.77856 9.05146L7.04056 5.88796L9.49756 3.75946L6.26206 3.48496L4.99756 0.501465L3.73306 3.48496L0.497559 3.75946L2.95456 5.88796L2.21656 9.05146L4.99756 7.37296Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="heart"
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M5 1C2.7912 1 1 2.61538 1 4.60837C1 6.2172 1.7 10.0355 8.5904 13.8954C8.71383 13.9638 8.85552 14 9 14C9.14448 14 9.28617 13.9638 9.4096 13.8954C16.3 10.0355 17 6.2172 17 4.60837C17 2.61538 15.2088 1 13 1C10.7912 1 9 3.18689 9 3.18689C9 3.18689 7.2088 1 5 1Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content-section">
                      <h3 className="title">
                        Sweety Khanna
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="green-icon"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M13.0566 6.99999L13.9562 5.39166C14.0477 5.22608 13.9914 5.01771 13.829 4.92069L12.2442 3.97876L12.2207 2.13495C12.2181 1.94351 12.0635 1.78899 11.8722 1.78635L10.0284 1.76281L9.08402 0.170999C8.98699 0.00857785 8.77862 -0.0476634 8.61305 0.0437952L6.99999 0.943365L5.39166 0.0437952C5.22608 -0.0476634 5.01771 0.00857785 4.92069 0.170999L3.97876 1.75578L2.13495 1.77933C1.94351 1.78185 1.78899 1.93649 1.78635 2.12782L1.76281 3.97163L0.170999 4.91598C0.00857785 5.01301 -0.0476634 5.22138 0.0437952 5.38695L0.943365 7.00001L0.0437952 8.60834C-0.0476634 8.77392 0.00857785 8.98229 0.170999 9.07931L1.75578 10.0212L1.77933 11.8651C1.78185 12.0565 1.93649 12.211 2.12782 12.2136L3.97163 12.2372L4.91356 13.822H4.91366C5.0107 13.9844 5.21896 14.0406 5.38463 13.9491L6.99998 13.0567L8.60832 13.9562C8.7741 14.0464 8.98151 13.9904 9.07928 13.829L10.0212 12.2442L11.865 12.2207C12.0565 12.2182 12.211 12.0635 12.2136 11.8722L12.2372 10.0284L13.8219 9.08647V9.08637C13.9844 8.98933 14.0406 8.78107 13.949 8.6154L13.0566 6.99999ZM9.67269 5.35161C8.53702 6.49003 7.51855 7.73964 6.63268 9.08165C6.57528 9.17658 6.47688 9.23924 6.3665 9.25111H6.33118C6.23278 9.25175 6.13869 9.21064 6.07215 9.1381L4.32021 7.23543C4.21561 7.08952 4.23716 6.88832 4.37025 6.76772C4.50345 6.64725 4.70582 6.64588 4.8406 6.76447L6.29354 8.3257C7.15158 7.08973 8.11254 5.92863 9.16642 4.85483C9.30487 4.71837 9.52721 4.71837 9.66567 4.85483C9.73264 4.91969 9.77101 5.00852 9.77227 5.10177C9.77363 5.19501 9.73779 5.2849 9.67271 5.35165L9.67269 5.35161Z"
                            fill="#00C853"
                          />
                        </svg>
                      </h3>
                      <div className="location">
                        <span className="location-section">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="location-svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M3 0C2.20464 0.000860118 1.44212 0.290868 0.879718 0.806406C0.317313 1.32195 0.000941501 2.02092 3.19169e-06 2.75C-0.000949414 3.34581 0.211361 3.92545 0.604366 4.4C0.604366 4.4 0.686184 4.49875 0.699548 4.513L3 7L5.30154 4.51175C5.31354 4.4985 5.39563 4.4 5.39563 4.4L5.39591 4.39925C5.78872 3.9249 6.00093 3.34553 6 2.75C5.99906 2.02092 5.68269 1.32195 5.12028 0.806406C4.55788 0.290868 3.79536 0.000860118 3 0ZM3 3.75C2.78424 3.75 2.57332 3.69135 2.39392 3.58147C2.21453 3.47159 2.0747 3.31541 1.99213 3.13268C1.90956 2.94996 1.88796 2.74889 1.93005 2.55491C1.97215 2.36093 2.07605 2.18275 2.22861 2.04289C2.38118 1.90304 2.57556 1.8078 2.78717 1.76921C2.99879 1.73063 3.21813 1.75043 3.41747 1.82612C3.61681 1.90181 3.78719 2.02998 3.90706 2.19443C4.02693 2.35888 4.09091 2.55222 4.09091 2.75C4.09055 3.01512 3.9755 3.26928 3.77099 3.45674C3.56648 3.64421 3.28922 3.74967 3 3.75Z"
                              fill="#FF385C"
                            />
                          </svg>
                          NEW DELHI,IND
                        </span>
                        <span className="km">1.2 KM</span>
                      </div>
                      <div className="tag">
                        <span>Certified Artist</span>
                        <span>Photoshoot Makeup</span>
                        <span>Hair Styling</span>
                        <span>Studio</span>
                        <span>Travels to venue</span>
                      </div>
                      <div className="services-text">
                        Services Starting at : ₹5000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev">
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
              <div className="swiper-button-next">
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
        </div>
      </section>
    </>
  );
};

export default ArtistInDemand;
