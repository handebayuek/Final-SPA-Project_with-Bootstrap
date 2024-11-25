import { useAddToCart } from "../../hooks/useAddToCart";
import { CartContext } from "../../contexts/CartContext";
import React, { useContext } from "react";
import "./Product.css";

export default function Product() {
  const { state } = useContext(CartContext);
  const addToCart = useAddToCart();

  return (
    <div className="product-cart">
      <div className="row">
        {state.map((product) =>
          Math.floor((product.id - 1) / 2) % 2 === 0 ? (
            <div className="col-lg-6 col-md-6 col-12 mb-4" key={product.id}>
              <div className="product-container row">
                <div className="col-12 col-md-6 description">
                  <h2>{product.product_name}</h2>
                  <h6>{product.bulk}</h6>
                  <p>{product.description}</p>
                  <p className="product-price">{product.price}€</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-product"
                  >
                    Add to Bag
                  </button>
                </div>
                <div className="col-12 col-md-6 description-img">
                  <img
                    className="img- fluid m-4"
                    src={product.image}
                    alt={product.product_name}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6 col-md-6 col-12 mb-4" key={product.id}>
              <div className="product-container row">
                <div className="col-12 col-md-6 description-img">
                  <img
                    className="img-fluid m-4"
                    src={product.image}
                    alt={product.product_name}
                  />
                </div>
                <div className="col-12 col-md-6 description">
                  <h2>{product.product_name}</h2>
                  <h6>{product.bulk}</h6>
                  <p>{product.description}</p>
                  <p className="product-price">{product.price}€</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-product"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
