import { Fragment } from "react"
import Image from "next/image";

import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

import "./style.scss";

const Favourite = () => {
  return (
    <Fragment>
        <div className="cart-card">
          <div className="cart-card-img">
            <Image
              fill
              src="/logo.svg"
              alt="logo"
            />
          </div>
          <div className="cart-card-title">
            <div className="subtitle">
              <h1>Title</h1>
              <p>Description</p>
            </div>
            <div className="cart-price">
              <div className="price">
                <p>1000 sum/month</p>
                <h3>12000 sum</h3>
              </div>
              <button>
              <TbShoppingBagPlus />
              </button>
            </div>
          </div>
          <button className="favourite-icon">
            <FaRegHeart  />
          </button>
        </div>
        <div className="cart-card">
          <div className="cart-card-img">
            <Image
              fill
              src="/logo.svg"
              alt="logo"
            />
          </div>
          <div className="cart-card-title">
            <div className="subtitle">
              <h1>Title</h1>
              <p>Description</p>
            </div>
            <div className="cart-price">
              <div className="price">
                <p>1000 sum/month</p>
                <h3>12000 sum</h3>
              </div>
              <button>
              <TbShoppingBagPlus />
              </button>
            </div>
          </div>
          <button className="favourite-icon">
            <FaRegHeart  />
          </button>
        </div>
    </Fragment>
  )
}

export default Favourite