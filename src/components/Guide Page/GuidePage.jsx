import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GuidePage.css";

const GuidePage = () => {
  return (
    <div className="guide-page py-5">
      {/* Title Section */}
      <h1 className="guide-page-title text-center">
        Unlock the Power of Pure, <span>99.8% Organic Skincare</span>
      </h1>

      {/* Guide Section */}
      <div className="guide-section row mt-4">
        {/* First Column */}
        <div className="guide-column col-lg-4 col-md-6 col-12">
          <h2 className="guide-section-title">DAILY ROUTINE</h2>
          <p>
            We encourage you to make our organic skincare products a part of
            your daily routine. Regular use, especially morning and night, helps
            maintain the skin’s natural balance and maximizes the long-term
            benefits of the organic ingredients.
          </p>
        </div>

        {/* Second Column */}
        <div className="guide-column col-lg-4 col-md-6 col-12 border-start border-end">
          <h2 className="guide-section-title">PROPER APPLICATION ORDER</h2>
          <p>
            For the best results, we suggest applying our products in the
            correct order: start with the cleanser, follow with the toner, then
            apply the serum, and finish with the moisturizer. This method
            ensures that each layer works effectively, giving your skin the full
            benefit of our organic ingredients.
          </p>
        </div>

        {/* Third Column */}
        <div className="guide-column col-lg-4 col-md-6 col-12">
          <h2 className="guide-section-title">PERSONALIZED SKINCARE</h2>
          <p>
            We advise performing a patch test before fully integrating any new
            product into your skincare routine. This simple step helps you
            understand how your skin reacts, allowing for personalized use and
            avoiding any potential sensitivities, especially with highly potent
            organic ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
