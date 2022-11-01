import React from "react";

function Preseginglogin() {
  return (
    <>
      <div class="main-presaging-section">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="col-wrapper">
                <h2 class="presaging-title">Presaging</h2>
              </div>
              <div class="presaging-form-section">
                <form class="presaging-form" action="" method="post">
                  <div class="input-field">
                    <label for="services">Services starting at (in ₹)*</label>
                    <input
                      type="text"
                      placeholder="Price, eg: ₹500"
                      name="services"
                      required
                    />
                  </div>
                  <div class="input-field-checkbox checkbox-input">
                    <input
                      type="checkbox"
                      id="certified"
                      name="certified"
                      value="certified"
                    />
                    <label for="certified">Are you certified?</label>
                  </div>
                  <div class="field-button">
                    <div class="input-field">
                      <label for="uploadcertificate">
                        Upload your certificate
                      </label>
                      <input
                        type="text"
                        placeholder="File name would come here"
                        name="uploadcertificate"
                        required
                      />
                    </div>
                    <button class="upload">upload</button>
                  </div>
                  <div class="input-field">
                    <label for="experience">Experience*</label>
                    <select name="experience">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="input-field-checkbox checkbox-input">
                    <input
                      type="checkbox"
                      id="style"
                      name="style"
                      value="style"
                    />
                    <label for="style">Do you offer Hair Styling?</label>
                  </div>
                  <div class="input-field">
                    <select name="state">
                      <option value="none" selected>
                        Select states
                      </option>
                      <option value="Bihar">Bihar</option>
                      <option value="Assam">Assam</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>
                  <div class="input-field">
                    <label for="state">What brands do you use?</label>
                    <select name="state">
                      <option value="none" selected>
                        Select Your Product
                      </option>
                      <option value="Amora">Amora</option>
                      <option value="Bata">Bata</option>
                      <option value="Amora">Amora</option>
                    </select>
                  </div>
                  <div class="input-field-checkbox">
                    <input
                      type="checkbox"
                      id="profile"
                      name="profile"
                      value="Bike"
                    />
                    <label for="profile">
                      I dont want to show this in my profile
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-6">
              <div class="image-section">
                <img src="assets/images/presaging-img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preseginglogin;
