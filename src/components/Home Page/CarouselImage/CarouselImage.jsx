import React from "react";
import image1 from "./CarouselImages/Carousel1.jpg";
import image2 from "./CarouselImages/Carousel2.jpg";
import image3 from "./CarouselImages/Carousel3.jpg";

export const Carousel1 = () => (
  <img
    className="d-block w-100"
    src={image1}
    alt="First Slide"
    style={{ height: "600px", objectFit: "cover" }}
  />
);

export const Carousel2 = () => (
  <img
    className="d-block w-100"
    src={image2}
    alt="Second Slide"
    style={{ height: "600px", objectFit: "cover" }}
  />
);

export const Carousel3 = () => (
  <img
    className="d-block w-100"
    src={image3}
    alt="Third Slide"
    style={{ height: "600px", objectFit: "cover" }}
  />
);
