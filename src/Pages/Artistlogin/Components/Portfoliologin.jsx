import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { artistlogin } from "../../../Redux/Auth/ArtistAuth/actionCreator";
import { Slide, toast, ToastContainer, Zoom } from "react-toastify";
import { ApiPost } from "../../../Helpers/API/ApiData";

function Portfoliologin({ prevStage, formikprops, nextStage }) {
  console.log("fp", formikprops);
  const dispatch = useDispatch();
  const [imageArray, setImageArray] = useState([]);
  const [videoArray, setVideoArray] = useState([]);
  const navigate = useNavigate();
  const loginArtist = () => {
    ApiPost("artist/update/profile", {
      ...formikprops.values,
      profileStatus: 4,
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const previewImage = (evt) => {
    const file = evt.target.files[0];
    let allowedExtensions = /(\/jpg|\/jpeg|\/png|\/gif)$/i;

    // const element = document.getElementById("imageprev");
    // const imageuploadelement = document.getElementById("imageuploadelement");
    // console.log(imageuploadelement);
    // if (file) {
    //   let imgElement = document.createElement("img");
    //   imgElement.src = URL.createObjectURL(file);
    //   while (imageuploadelement.hasChildNodes()) {
    //     imageuploadelement.removeChild(imageuploadelement.firstChild);
    //   }
    //   imageuploadelement.appendChild(imgElement);
    // }
    console.log(file);
    if (allowedExtensions.exec(file.type)) {
      setImageArray((olddata) => {
        return [...olddata, URL.createObjectURL(file)];
      });
      let temp_photo = [...imageArray, URL.createObjectURL(file)];
      formikprops.setValues((data) => {
        return { ...data, photos: temp_photo };
      });
    } else {
      let id = toast.error("Invalid File ! Plz Upload Image File", {
        theme: "dark",
        icon: true,
        pauseOnFocusLoss: false,
        toastId: "custom-id-yes", // for Prevent duplicate
      });
      // toast.update(id, {
      //   render: "New Content",
      //   type: toast.TYPE.INFO,
      //   //Here the magic
      //   delay: 1000,
      //   autoClose: 3000,
      // });
      console.log(id);
    }
  };
  const previewVideo = (evt) => {
    const file = evt.target.files[0];
    console.log("vf", file.type);
    let allowedExtensions = /(\/x-matroska|\/mp4|\/mkv|\.gif)$/i;
    if (allowedExtensions.exec(file.type)) {
      setVideoArray((olddata) => {
        return [...olddata, URL.createObjectURL(file)];
      });
      let temp_video = [...videoArray, URL.createObjectURL(file)];
      formikprops.setValues((data) => {
        return { ...data, videos: temp_video };
      });
    } else {
      let id = toast.error("Invalid File ! Plz Upload Video File", {
        theme: "dark",
        icon: true,
        pauseOnFocusLoss: false,
        toastId: "custom-id-yes", // for Prevent duplicate
      });
    }
  };
  const removeImg = (id) => {
    let tempArr = imageArray;
    tempArr = tempArr.filter((data, idx) => idx != id);
    setImageArray(tempArr);
    formikprops.setValues((data) => {
      return { ...data, photos: tempArr };
    });
  };
  const removeVid = (id) => {
    let tempArr = videoArray;
    tempArr = tempArr.filter((data, idx) => idx != id);
    setVideoArray(tempArr);
    formikprops.setValues((data) => {
      return { ...data, videos: tempArr };
    });
  };

  return (
    <>
      <div className="portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="col-wrapper">
                <h2 className="presaging-title">Portfolio</h2>
              </div>
              <div className="portfolio-inner-section">
                <p className="sub-title">
                  Photos<span>(upto 3)</span>
                </p>
                <div id="imageuploadelement" className="file-uploder">
                  <div className="file-upload-img">
                    <img id="imageprev" src="assets/images/upload-img.png" />
                  </div>
                  <div className="file-upload-img">
                    <label
                      htmlFor="portfoliophotos"
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      <img src="assets/images/add-upload-img.png" />
                    </label>
                  </div>
                  <div className="img-upload-text">
                    <label htmlFor="portfoliophotos">
                      <p
                        className="sub-img-title "
                        style={{ cursor: "pointer" }}
                      >
                        Drag or drop a photo <span>Browse</span>
                      </p>
                    </label>{" "}
                    <input
                      type="file"
                      name="portfoliophotos"
                      id="portfoliophotos"
                      hidden
                      onChange={previewImage}
                      accept="image/**"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                {imageArray.map((imgurl, idx) => {
                  return (
                    <div className="image-thumb">
                      <img src={imgurl} />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeImg(idx)}
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15"
                          fill="#FF385C"
                          stroke="#323232"
                          strokeOpacity="0.2"
                          strokeWidth="0.5"
                        />
                        <path
                          d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  );
                })}

                {imageArray.length <= 2 && (
                  <div className="image-thumb text-image-tumb">
                    <span>Add Image</span>
                  </div>
                )}
              </div>
              <div className="portfolio-inner-section video-section">
                <p className="sub-title">
                  Videos<span>(upto 1)</span>
                </p>
                <div className="file-uploder">
                  <div className="file-upload-img">
                    <img src="assets/images/upload-img.png" />
                  </div>
                  <div className="file-upload-img">
                    <img src="assets/images/add-upload-img.png" />
                  </div>

                  <div className="img-upload-text">
                    <label
                      htmlFor="portfoliovideos"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="sub-img-title">
                        Drag or drop a Video <span>Browse</span>
                      </p>
                    </label>
                  </div>
                  <input
                    type="file"
                    name="portfoliovideos"
                    id="portfoliovideos"
                    hidden
                    onChange={previewVideo}
                  />
                </div>
              </div>
              <div className="row">
                {videoArray.map((videourl, idx) => {
                  return (
                    <div className="image-thumb">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        onClick={() => removeVid(idx)}
                        style={{ cursor: "pointer" }}
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15"
                          fill="#FF385C"
                          stroke="#323232"
                          strokeOpacity="0.2"
                          strokeWidth="0.5"
                        />
                        <path
                          d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  );
                })}

                {videoArray.length <= 2 && (
                  <div className="image-thumb text-image-tumb">
                    <span>Add Video</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="image-section">
                <img src="assets/images/Skincare-bro 1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-section">
        <button
          type="button"
          className="next-button back-button"
          onClick={prevStage}
        >
          Back
        </button>
        <button type="button" className="next-button" onClick={loginArtist}>
          Finish
        </button>
      </div>
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={true}
      />
    </>
  );
}

export default Portfoliologin;
