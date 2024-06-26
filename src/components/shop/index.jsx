import React from "react";
import shopImg from "../../assets/images/shop.svg";
import "./shop.scss";

const Shop = () => {
  return (
    <section className="shop container">
      <div className="shop__cards">
        <div className="shop__card">
          <h2 className="shop__title">
            Shop Premium Tempered Glass in wholesale Price !
          </h2>
          <p className="shop__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.  LKR : 299а
          </p>
          <button className="shop__btn">Shop Tempered Glass </button>
        </div>
        <div className="shop__card">
          <img src={shopImg} alt="" />
        </div>
        <div className="shop__box"></div>
      </div>
    </section>
  );
};

export default Shop;
