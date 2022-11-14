import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  const handleSearch = async (searchStr) => {
    const products = await axios.get(
      `https://dummyjson.com/products/search?q=${
        searchStr ? searchStr : searchString
      }`
    );
    dispatch({
      type: "SET_PRODUCT_LIST",
      item: products.data.products,
    });
    console.log(products.data.products, "searchString");
  };

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };

  const handleLogoClick = (e) => {
    setSearchString("");
    navigate("/");
  };

  useEffect(() => {
    const searchProducts = setTimeout(() => {
      handleSearch();
    }, 800);
    return () => clearTimeout(searchProducts);
  }, [searchString]);

  return (
    <div className="header">
      <img
        onClick={(e) => handleLogoClick(e)}
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input
          className="header_searchInput"
          placeholder="Search for products"
          type="text"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
      </div>
      <div className="header_nav">
        <Link onClick={handleAuthentication} to={!state.user && "/login"}>
          <div className="header_option">
            <span className="header_optionLineOne">
              Hello,{state.user ? state.user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {state.user ? "Sign Out" : "sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <span className="header_cart">
              <ShoppingCartCheckoutIcon />
            </span>
            <span className="header_optionLineTwo header_basketCount">
              {state.cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
