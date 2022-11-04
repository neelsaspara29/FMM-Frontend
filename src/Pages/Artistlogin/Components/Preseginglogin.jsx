import { ErrorMessage, Field, Form } from "formik";
import React from "react";

function Preseginglogin({ formikprops, nextStage, prevStage }) {
  console.log("fp", formikprops);
  const validateProfile = () => {
    formikprops.setTouched({
      price: true,
      experience: true,
    });
    formikprops.validateField("price");
    formikprops.validateField("experience");
    if (!(formikprops.errors["price"] || formikprops.errors["experience"])) {
      nextStage();
    }
  };
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
                <Form class="presaging-form">
                  <div class="input-field">
                    <label for="services">Services starting at (in ₹)*</label>
                    <ErrorMessage name="price">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Price, eg: ₹500"
                      name="price"
                      required
                    />
                  </div>
                  <div class="input-field-checkbox checkbox-input">
                    <Field
                      type="checkbox"
                      id="certified"
                      name="certified"
                      value="certified"
                    />
                    <label for="certified">Are you certified?</label>
                    <ErrorMessage name="certified">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div class="field-button">
                    <div class="input-field">
                      <label for="uploadcertificate">
                        Upload your certificate
                      </label>
                      <ErrorMessage name="uploadcertificate">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                      <Field
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
                    <ErrorMessage name="experience">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="experience">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </Field>
                  </div>
                  <div class="input-field-checkbox checkbox-input">
                    <Field
                      type="checkbox"
                      id="style"
                      name="style"
                      value="style"
                    />
                    <label for="style">Do you offer Hair Styling?</label>
                    <ErrorMessage name="style">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div class="input-field">
                    <ErrorMessage name="workingstate">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="workingstate">
                      <option value="none" selected>
                        Select states
                      </option>
                      <option value="Bihar">Bihar</option>
                      <option value="Assam">Assam</option>
                      <option value="Gujarat">Gujarat</option>
                    </Field>
                  </div>
                  <div class="input-field">
                    <label for="state">What brands do you use?</label>
                    <ErrorMessage name="brand">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="brand">
                      <option value="none" selected>
                        Select Your Product
                      </option>
                      <option value="Amora">Amora</option>
                      <option value="Bata">Bata</option>
                      <option value="Amora">Amora</option>
                    </Field>
                  </div>
                  <div class="input-field-checkbox">
                    <Field
                      type="checkbox"
                      id="profile"
                      name="profile"
                      value="Bike"
                    />
                    <label for="profile">
                      I dont want to show this in my profile
                    </label>
                    <ErrorMessage name="profile">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </Form>
              </div>
            </div>
            <div class="col-6">
              <div class="image-section">
                <img src="assets/images/presaging-img.png" alt="image" />
              </div>
            </div>
            <div class="button-section">
              <button
                type="button"
                class="next-button back-button"
                onClick={prevStage}
              >
                Back
              </button>
              <button
                type="button"
                class="next-button"
                onClick={validateProfile}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preseginglogin;
