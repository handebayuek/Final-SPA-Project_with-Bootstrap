import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="row">
        {/* Left Side */}
        <div className="col-lg-6 col-md-12 left-side">
          <h1 className="about-header text-uppercase text-decoration-underline">
            ABOUT OUR PRODUCTS
          </h1>
          <h3 className="about-explain">
            Our organic skincare line offers a range of natural, eco-friendly
            products designed to nourish and rejuvenate your skin without the
            use of harmful chemicals. Made from the finest botanical
            ingredients, each product is carefully crafted to enhance your
            skin's natural beauty while promoting overall health and wellness.
          </h3>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 right-side">
          <div className="about-container1 d-flex align-items-center border-bottom pb-3 ">
            <h4 className="about-container-h4 ">safe and gentle</h4>
            <p className=" about-page-para">
              Unlike conventional skincare products that often contain harsh
              chemicals and synthetic ingredients, our organic products are free
              from toxins, making them safe for all skin types, including
              sensitive skin.
            </p>
          </div>

          <div className="about-container2 d-flex align-items-center border-bottom pb-3">
            <h4 className="about-container-h4">eco-friendly</h4>
            <p className=" about-page-para">
              Our commitment to sustainability ensures that our products are not
              only good for your skin but also for the planet. We use
              environmentally responsible packaging and ethically sourced
              ingredients.
            </p>
          </div>

          <div className="about-container3 d-flex align-items-center border-bottom pb-3">
            <h4 className="about-container-h4">nutrient-rich</h4>
            <p className=" about-page-para">
              Organic skincare ingredients are packed with vitamins,
              antioxidants, and essential fatty acids that help repair and
              protect your skin, giving you a healthy, radiant glow.
            </p>
          </div>

          <div className="about-container4 d-flex align-items-center border-bottom pb-3">
            <h4 className="about-container-h4">ethical and cruelty-free</h4>
            <p className=" about-page-para">
              We prioritize ethical practices, ensuring our products are
              cruelty-free, vegan, and not tested on animals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
