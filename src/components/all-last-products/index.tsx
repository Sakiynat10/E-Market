"use client";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { FaRegHeart } from "react-icons/fa6";

import "../last-products/style.scss";
import { TbShoppingBagPlus } from 'react-icons/tb';


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

const AllLastProducts = () => {
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
      {products.map((product) => (
                <div key={product?._id} className="product-card">
                <div className="product-card-img">
                  <Image
                    fill
                    src={product?.image?.url ? product?.image?.url : "/logo.svg"}
                    alt={product?.title}
                  />
                </div>
                <div className="product-card-title">
                  <div className="subtitle">
                    <h1>{product?.title}</h1>
                    <p>{product?.description}</p>
                  </div>
                  <div className="product-price">
                    <div className="price">
                      <p>{Math.round(product?.price / 12)} sum/month</p>
                      <h3>{product?.price} sum</h3>
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
      ))}
    </Fragment>
  );
};

export default AllLastProducts;
