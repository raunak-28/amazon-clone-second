import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      setProductList(products.data);
    };
    getProducts();
  }, []);
  useEffect(() => {
    console.log(productList, "list");
  }, [productList]);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/617XAVvdAuL._SX3000_.jpg"
          alt="Home Image"
        />
        <div className="Product_list">
          <div className="home_row">
            <Product
              id="12321341"
              title="HP Deskjet 2332 Colour Printer, Scanner, Copier."
              price={154900}
              image="https://m.media-amazon.com/images/I/71-bAHPkOXL._SX679_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Philips kMix Stand Mixer for Baking, Stylish Kitchen Mixer."
              price={1200}
              image="https://m.media-amazon.com/images/I/31eyLyEftOL._SX300_SY300_QL70_FMwebp_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="49538095"
              title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
              price={36999}
              image="https://m.media-amazon.com/images/I/914hFeTU2-L._SX425_.jpg"
              rating={4}
            />
            <Product
              id="49538096"
              title="Samsung 253 L 2 Star Frost-Free Double Door Refrigerator."
              price={23990}
              image="https://m.media-amazon.com/images/I/61wTWb4vE1L._SY445_.jpg"
              rating={3}
            />
            <Product
              id="49538097"
              title="Havells Festiva 1200mm Dust Resistant Ceiling Fan (Gold Mist)"
              price={2999}
              image="https://m.media-amazon.com/images/I/51YgSJNbfnL._SX425_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="49538098"
              title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55C1PTZ (Dark Steel Silver) (OLED55C1PTZ)"
              price={124990}
              image="https://m.media-amazon.com/images/I/71tU03UNI1L._SX679_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
      {/* <div className="product_items">
        {productList?.products?.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price * 100}
            image={product.thumbnail}
            rating={5}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Home;
