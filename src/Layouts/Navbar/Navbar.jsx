import React from "react";

function Navbar() {
  return (
    <>
      <div class="menu-overlay"></div>
      <header>
        <div class="main-header">
          <div class="container">
            <div class="row">
              <div class="mobile-menu">
                <div class="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 384 384"
                    // style="enable-background:new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="mobile-menu-drawer">
                <svg
                  class="close-menu"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnsSvgjs="http://svgjs.com/svgjs"
                  width="16"
                  height="16"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  //   style="enable-background:new 0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g id="_02_User" data-name="02 User">
                      <path
                        d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
                <ul class="menu-wrapper">
                  <li>
                    <a href="#">Explore Makeup Artists</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Artist corner</a>
                  </li>
                </ul>
              </div>
              <div class="logo">
                <img src="assets/images/logo.png" alt="Logo Image" />
              </div>
              <div class="search-bar">
                <input
                  class="search-box-input"
                  type="text"
                  placeholder="Search.."
                  id="search"
                  name="search"
                />
                <button class="search-box-button" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.8162 16C15.029 16 16.8228 14.2091 16.8228 12C16.8228 9.79086 15.029 8 12.8162 8C10.6034 8 8.80957 9.79086 8.80957 12C8.80957 14.2091 10.6034 16 12.8162 16Z"
                      fill="#FF385C"
                    />
                    <path
                      d="M13.818 4.069V2H11.8147V4.069C10.0521 4.29368 8.41407 5.09617 7.15759 6.35057C5.90111 7.60497 5.09729 9.2403 4.87224 11H2.7998V13H4.87224C5.09696 14.7598 5.90067 16.3953 7.15722 17.6498C8.41376 18.9043 10.052 19.7066 11.8147 19.931V22H13.818V19.931C15.5809 19.7068 17.2192 18.9045 18.4757 17.65C19.7323 16.3955 20.536 14.7599 20.7605 13H22.833V11H20.7605C20.5358 9.24017 19.7321 7.60466 18.4756 6.3502C17.219 5.09574 15.5808 4.29335 13.818 4.069V4.069ZM12.8164 18C9.5019 18 6.80644 15.309 6.80644 12C6.80644 8.691 9.5019 6 12.8164 6C16.1309 6 18.8263 8.691 18.8263 12C18.8263 15.309 16.1309 18 12.8164 18Z"
                      fill="#FF385C"
                    />
                  </svg>
                </button>
              </div>
              <div class="menu-section">
                <ul class="menu-wrapper">
                  <li>
                    <a href="#">Explore Makeup Artists</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Artist corner</a>
                  </li>
                </ul>
              </div>
              <div class="login-button">
                <a href="#" class="button">
                  login
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
