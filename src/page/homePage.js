import React from "react";
import logo from "./../assets/logo.png";
import cart from "./../assets/cart.png";
import favorites from "./../assets/favorites.png";
import search from "./../assets/search.png";
import category1 from "./../assets/1.jpg";
import category2 from "./../assets/2.jpg";
import category3 from "./../assets/3.jpg";
import category4 from "./../assets/4.jpg";
import category5 from "./../assets/5.jpg";
import category6 from "./../assets/6.jpg";
import category7 from "./../assets/7.jpg";
import category8 from "./../assets/8.jpg";
import category9 from "./../assets/9.jpg";

import {Link, NavLink} from "react-router-dom";
import "./homePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className={"container"}>
        {/*top of page*/}
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
          <div className={"main-categories"}>
            <div className="category-col-1">
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $180</p>
                      <h4 className={"category-name"}>Modern Chair</h4>
                    </div>
                    <img src={category1} alt="Category 1"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $18</p>
                      <h4 className={"category-name"}>Plant Pot</h4>
                    </div>
                    <img src={category2} alt="Category 2"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $318</p>
                      <h4 className={"category-name"}>Modern Rocking Chair</h4>
                    </div>
                    <img src={category3} alt="Category 3"/>
                  </div>
                </Link>
              </div>
            </div>

            <div className="category-col-2">
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $180</p>
                      <h4 className={"category-name"}>Minimalistic Plant Pot</h4>
                    </div>
                    <img src={category4} alt="Category 4"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $320</p>
                      <h4 className={"category-name"}>Small Table</h4>
                    </div>
                    <img src={category5} alt="Category 5"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $318</p>
                      <h4 className={"category-name"}>Home Deco</h4>
                    </div>
                    <img src={category6} alt="Category 6"/>
                  </div>
                </Link>
              </div>
            </div>
            <div className="category-col-3">
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $180</p>
                      <h4 className={"category-name"}>Modern Chair</h4>
                    </div>
                    <img src={category7} alt="Category 7"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $180</p>
                      <h4 className={"category-name"}>Night Stand</h4>
                    </div>
                    <img src={category8} alt="Category 8"/>
                  </div>
                </Link>
              </div>
              <div className={"category"}>
                <Link className="category-link">
                  <div className="category-description">
                    <div className="category-col-title">
                      <div className="category-line"/>
                      <p className={"category-cost"}>From $318</p>
                      <h4 className={"category-name"}>Metallic Chair</h4>
                    </div>
                    <img src={category9} alt="Category 9"/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*middle of page*/}
        <div className="homepage-subcribe">

        </div>
      </div>
    );
  }
}

export default HomePage
