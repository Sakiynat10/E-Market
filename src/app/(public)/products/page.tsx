import { Fragment } from "react"
import AllProducts from "@/components/products"

import "../products/style.scss"
import "./style.scss"

const ProductsPage = () => {
  return (
    <Fragment>
        <section id="last-products">
            <div className="container">
                <div className="product-cards">
                    <AllProducts/>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default ProductsPage