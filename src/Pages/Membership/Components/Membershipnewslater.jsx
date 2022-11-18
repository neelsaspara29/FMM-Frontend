import React from "react";

function Membershipnewslater() {
  return (
    <>
      <section className="newsletter-section blog-newsletter">
        <div className="container">
          <h2>
            Subscribe to our <span>news letter!</span>
          </h2>
          <form method="post" className="newsletter-form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email ID here"
              className="newsletter-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Membershipnewslater;
