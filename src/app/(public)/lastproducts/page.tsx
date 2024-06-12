import { Fragment } from "react";
import AllLastProducts from "@/components/all-last-products";

import "../products/style.scss";
import "./style.scss";

const ProductsPage = () => {
  return (
    <Fragment>
      <section id="last-products">
        <div className="container">
          <div className="product-title">
            <h1>All Latest Products</h1>
            <a href="/products">
              All Products
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
              </svg>
            </a>
          </div>
          <div className="product-cards">
            <AllLastProducts />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductsPage;
