import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import About from "../About/About";
import { Carousel } from "react-bootstrap";
import {
  Carousel1,
  Carousel2,
  Carousel3,
} from "./CarouselImage/CarouselImage.jsx";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GuidePage from "../Guide Page/GuidePage.jsx";

function HomePage() {
  const { data } = useFetch("./data.json");

  const bestsellers = data.filter((product) => product.isBestseller);

  return (
    <>
      <div className="homepage">
        <h1 className="brand-name">BotaniPure.</h1>
        <div className="homepage-container">
          <Carousel>
            <Carousel.Item>
              <Carousel1 />
              <Carousel.Caption>
                <h3 className="carousel-h3">Nourishing Cleanser</h3>
                <p className="carousel-p">
                  Gently cleanses for refreshed, glowing skin.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel2 />
              <Carousel.Caption>
                <h3 className="carousel-h3">Hydrating Toner</h3>
                <p className="carousel-p">
                  Balances and revitalizes for a healthy complexion.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel3 />
              <Carousel.Caption>
                <h3 className="carousel-h3">Vegan & Cruelty-Free</h3>
                <p className="carousel-p">
                  Ethically made, supporting a clean and conscious beauty
                  routine.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="homepage-body-bottom ">
            <div className="row align-items-center ">
              {/* Slogan Section */}
              <div className="col-md-9">
                <div className="slogan-container">
                  <div className="homepage-box">
                    <h1>99.8 %</h1>
                    <h2 className="h2-1">Organic.</h2>
                    <h2 className="h2-2">
                      <span className="span-h2">100%</span> You.
                    </h2>
                  </div>
                  <div className="homepage-body-p">
                    <p>
                      Our products – and the formulas that make them up – work
                      hard. They only contain ingredients that are essential to
                      their effectiveness, never unnecessary extras and never
                      irritating preservatives.
                    </p>
                  </div>
                </div>
              </div>
              {/* Bestsellers Section */}
              <div className="col-md-6 col-lg-2 m-3">
                <div className="bestsellers-container row ">
                  {bestsellers.slice(0, 2).map((product) => (
                    <div
                      key={product.id}
                      className="col-12 col-sm-6 col-md-6 mb-3"
                    >
                      <Card className="h-100  smaller-card">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.product_name}
                          className="img-fluid"
                          style={{ height: "6rem", objectFit: "cover" }}
                        />
                        <div className="bestseller-label">Bestseller</div>
                        <Card.Body>
                          <Card.Title className="h6">
                            {product.product_name}
                          </Card.Title>
                          <Card.Text>
                            {Array.from({ length: product.rating }, (_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                          </Card.Text>
                          <Link to={`/product`}>
                            <Button size="sm" className="custom-button">
                              View Product
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <GuidePage />
      </div>
    </>
  );
}

export default HomePage;
