import React from "react";
import logo from "./../assets/logo.png";
import cart from "./../assets/cart.png";
import favorites from "./../assets/favorites.png";
import search from "./../assets/search.png";
import {Link, NavLink} from "react-router-dom";
import "./homePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"homepage-main"}>
          <div className={"main-nav"}>
            <div className={"nav-brand"}>
              <Link to={"/"}><img src={logo} alt="Logo"/></Link>
            </div>
            <div className={"nav-links"}>
              <ul>
                <li className={"nav-links-home"}>
                  <NavLink to="/" active>HOME</NavLink>
                </li>
                <li className={"nav-links-shop"}>
                  <NavLink to="/shop">SHOP</NavLink>
                </li>
                <li className={"nav-links-product"}>
                  <NavLink to="/product">PRODUCT</NavLink>
                </li>
                <li className={"nav-links-cart"}>
                  <NavLink to="/cart">CART</NavLink>
                </li>
                <li className={"nav-links-checkout"}>
                  <NavLink to="/checkout">CHECKOUT</NavLink>
                </li>
              </ul>
            </div>
            <div className={"nav-btns"}>
              <button type={"button"} className={"btn-discount"}>%Discount%</button>
              <button type={"button"} className={"btn-news"}>New this week</button>
            </div>
            <div className={"nav-option-links"}>
              <Link className={"nav-cart"}>
                <img src={cart} alt=""/>
                <span className={"nav-label"}>CART</span>
                <span className={"nav-cart-count"}>(0)</span>
              </Link>
              <Link className={"nav-favourite"}>
                <img src={favorites} alt=""/>
                <span className={"nav-label"}>FAVOURITES</span>
              </Link>
              <Link className={"nav-search"}>
                <img src={search} alt=""/>
                <span className={"nav-label"}>SEARCH</span>
              </Link>
            </div>
            <div className={"nav-socials"}>
              <i className="fab fa-pinterest"/>
              <i className="fab fa-instagram"/>
              <i className="fab fa-facebook-f"/>
              <i className="fab fa-twitter"/>
            </div>
          </div>
          <div className={"main-products"}>
            <div className="products-col-1"></div>
            <div className="products-col-2"></div>
            <div className="products-col-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage
