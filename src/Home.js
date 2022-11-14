import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function Home() {
  // const [productList, setProductList] = useState([]);

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      dispatch({
        type: "SET_PRODUCT_LIST",
        item: products.data.products,
      });
    };
    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/617XAVvdAuL._SX3000_.jpg"
          alt="Home Image"
        />
        <div className="home_row">
          {state.product?.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price * 100}
              image={product.thumbnail}
              rating={5}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
