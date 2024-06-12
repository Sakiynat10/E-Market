"use client";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Image  from 'next/image';

import "./style.scss"

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

const Categories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const params = {_limit:11}
      let {data} = await axios(
        "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/category" , {params},
      );
      setLoading(true);
      setCategories(data);      
    };
    getCategories();
  }, []);
  return (
    <Fragment>
      {(categories.filter((el) =>  el !== null).slice(0 , 9)).map((category) =>(
        <div key={category._id} className="category-card">
          <div className="category-card-title">
            <p>{category.name}</p>
            <a href="/categories/category">
                more
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
          <div className="category-card-img">
            <Image fill src={category.image.url ? category.image.url : "/logo.svg"} alt={category.name}/>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Categories;
