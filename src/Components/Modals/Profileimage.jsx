import React from "react";

function Profileimage({ open,close }) {
  return (
    <div className={`image-model ${open ? " opened" : ""}`}>
      <div className="image-model-wrapper">
        <div className="model-header">
          <h2>Add Profile Image</h2>
          <svg
            className="close-model"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
                      fill="none"
                      onClick={close}
          >
            <path
              d="M1 1L14 14M14 1L1 14L14 1Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="model-center">
          <img src="assets/images/upload-img.png" alt="image" />
          <div className="text">
            Drag or drop a photo <span>Browse</span>
          </div>
        </div>
        <div className="model-footer">
          <button className="upload-button">Uplaod Profile Photo</button>
        </div>
      </div>
    </div>
  );
}

export default Profileimage;
