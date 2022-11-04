import React from "react";

const NewsLatter = () => {
    return (
        <>
   <section class="newsletter-section blog-newsletter">
        <div class="container">
            <h2>Subscribe to our <span>news letter!</span></h2>
            <form method="post" class="newsletter-form">
                <input type="email" name="email" id="email" placeholder="Enter your Email ID here" class="newsletter-input" required />
                <button type="submit" class="subscribe-button">
                   Subscribe
                </button>
            </form>
        </div>
    </section>
        </>
    )
}

export default NewsLatter