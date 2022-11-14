import React, { useEffect } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hide = false }) {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart, "cart");

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="image">
        <img
          className="checkoutProduct_image"
          src={image}
          alt="product image"
        />
      </div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hide && <button onClick={removeFromCart}>Remove from Cart</button>}{" "}
      </div>
    </div>
  );
}

export default CheckoutProduct;
