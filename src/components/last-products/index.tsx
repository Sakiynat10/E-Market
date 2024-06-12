"use client";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import "./style.scss";


interface Image {
  public_id?: string;
  url: string;
}

interface CategoriesType {
  _id: string;
  name: string;
  image: Image;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface ProductsType {
  _id: string;
  checked: boolean;
  sold: number;
  title: string;
  image: Image;
  price: number;
  description: string;
  quantity: number;
  category: CategoriesType;
}

const LastProducts = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const params = { _limit: 11 , _total:10 };
      let { data } = await axios(
        "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/last-products",
        { params }
      );
      setLoading(true);
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <Fragment>
      {(products.filter((el) =>  el !== null).slice(0 , 8)).map((product) => (
        <div key={product?._id} className="product-card">
          <div className="product-card-img">
            <Image
              fill
              src={product?.image?.url ? product?.image?.url : "/logo.svg"}
              alt={product?.title}
            />
          </div>
          <div className="product-card-title">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <div className="product-price">
              <h3>{product?.price} sum</h3>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </div>
          <FaRegHeart />
        </div>
      ))}
    </Fragment>
  );
};

export default LastProducts;
