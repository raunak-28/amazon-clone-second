import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  console.log(state, "raunak");
  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <img
        onClick={(e) => navigate("/")}
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* </Link> */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* <div className="search_icon"> */}
        <SearchIcon className="header_searchIcon" />
        {/* </div> */}
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
