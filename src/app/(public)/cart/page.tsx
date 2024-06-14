import  Cart  from '@/components/cart';
import { IoInformationCircleOutline } from "react-icons/io5";

import "./style.scss"


const CartPage = () => {
  return (
    <section id="cart">
      <div className="container">
        <div className="cart-links">
          <a href="/">Home {">"}</a>
          <a href="/products">products {">"}</a>
          <p>Cart</p>
        </div>
        <h1 className="cart-title">Cart<span>0</span></h1>
        <div className="cart-table">
          <ul className="table-titles">
            <li>Photo</li>
            <li>Products</li>
            <li>Description</li>
            <li>Title</li>
            <li>Quantity</li>
          </ul>
          <span className="line"></span>
          <div className="cart-cards">
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
          </div>
        </div>
        <div className="contact-infos">
          <h1>Registration</h1>
          <div className="reg-input">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Telephone" />
            <input type="email" placeholder="Email" />
          </div>
          <span className='line'></span>
          <div className="deliver-input">
            <h1>Deliver</h1>
            <input type="text" placeholder='Location of deliver' />
            <textarea id="" cols="30" rows="10"placeholder='Commentary'></textarea>
          </div>
        </div>
        <div className="payment">
          <h1>Payment</h1>
          <div className="payment-top">
            <div className="top-left">
              <p>Products</p>
              <span>...........................................</span>
              <p>12000 sum</p>
            </div>
            <div className="top-left">
              <p>Deliver</p>
              <span>............................................</span>
              <p>580 sum</p>
            </div>
          </div>
          <h2>12880 sum</h2>
          <div className="payment-bottom">
            <button>Buy</button>
            <p>
              <IoInformationCircleOutline />
              I agree to the processing of my personal data
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage