import React from "react";

function Progressbar({ stage }) {
  console.log("stg", stage);
  return (
    <div class="login-tab-section">
      <div class="container">
        <ul>
          <li class={"main-tab" + (stage >= 1 ? " active" : null)}>
            <a href="#">
              <span class="number">1</span>
              <div class="tab-title">Profile</div>
            </a>
          </li>
          <li class={"main-tab" + (stage >= 2 ? " active" : null)}>
            <a href="#">
              <span class="number">2</span>
              <div class="tab-title">Address Details</div>
            </a>
          </li>
          <li class={"main-tab" + (stage >= 3 ? " active" : null)}>
            <a href="#">
              <span class="number">3</span>
              <div class="tab-title">Services</div>
            </a>
          </li>
          <li class={"main-tab" + (stage >= 4 ? " active" : null)}>
            <a href="#">
              <span class="number">4</span>
              <div class="tab-title">Presaging</div>
            </a>
          </li>
          <li class={"main-tab" + (stage >= 5 ? " active" : null)}>
            <a href="#">
              <span class="number">5</span>
              <div class="tab-title">Portfolio</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Progressbar;
