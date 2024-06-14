import { Fragment } from "react"
import Image from "next/image";

import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./style.scss";

const Cart = () => {
  return (
    <Fragment>
        <div className="cart-image">
            <Image fill src="/logo.png" alt="photo" />
        </div>
        <div className="cart-prices">
            <h3>Title</h3>
            <h3>2000 sum</h3>
        </div>
        <div className="cart-desc">
            <p>desc</p>
        </div>
        <div className="cart-info">
            <p>info</p>
        </div>
        <div className="btns-group">
            <div className="cart-btns">
                <button>-</button>
                <button>1</button>
                <button>+</button>
            </div>
            <button className="del-cart">
            <RiDeleteBin6Line />
            </button>
        </div>
    </Fragment>
  )
}

export default Cart