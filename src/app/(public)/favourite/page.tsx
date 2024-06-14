import Favourite from "@/components/favourite"

import "./style.scss"

const CartPage = () => {
  return (
    <section id="cart">
      <div className="container">
        <h1 className="cart-title">Favourite products<span>0</span></h1>
        <div className="cart-cards">
          <Favourite/>
        </div>
      </div>
    </section>
  )
}

export default CartPage