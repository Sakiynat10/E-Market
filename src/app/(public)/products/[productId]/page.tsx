import Image from 'next/image';
import React, { Fragment } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

import "./style.scss"

const ProductPage = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <a href="/">Home</a>
          <div className="product">
            <div className="product-image">
              <Image fill src="/logo.png" alt="product-img"/>
            </div>
            <div className="product-infos">
              <div className="product-infos-titles">
                <h3>Sold: 123</h3>
                <div className="title-image">
                  Add to favourite
                  <FaRegHeart  />
                </div>
              </div>
              <h1>description aergergtrhrbdgdfsgf fgb f</h1>
              <div className="product-infos-subtitles">
                <h4>Brand:</h4>
                <a href='/products/${productId}/categoryProducts'>BrandName</a>
              </div>
              <div className="product-infos-deliver">
                <h3>Yetkazib berish
                <IoInformationCircleOutline />
                </h3>
                <p>one day , free</p>
              </div>
              <span></span>
              <div className="product-infos-prices">
                <p>Price: 12354 sum</p>
                <p>Oyiga 1234 sum muddatli to`lov</p>
              </div>
              <div className="cart-info">
                <div className="cart-btns">
                  <button>-</button>
                  <button>1</button>
                  <button>+</button>
                </div>
                <h3>On Sale : <span>124 dona</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
};

export default ProductPage