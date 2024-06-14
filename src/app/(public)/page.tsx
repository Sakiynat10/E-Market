import Image from "next/image";
import { Fragment } from "react";
import Categories from "@/components/categories";
import Products from "@/components/last-products";
import "./style.scss";

import React from 'react';





export default function Home() {
  return (
    <Fragment>
      <section id="hero">
        <div className="container">
          <a href="/products" className="hero-content">
            <div className="content-left">
              <h1>
                Having bought 100 products in a month ,you will get a 50%
                discount on the next product.
              </h1>
              <span>until February 5</span>
            </div>
            <div className="content-right">
              <Image width={100} height={100} src="/hero.png" alt="hero" />
            </div>
          </a>
        </div>
      </section>
      <section id="category">
        <div className="container">
          <div className="category-title">
            <h1>Categories</h1>
            <a href="/categories">
              All categories
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
          <div className="category-cards">
            <Categories />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="about-title">
            <h1>Why E-Market?</h1>
            <a href="/about">
              About market
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
          <div className="about-cards">
            <div className="about-card">
              <div className="about-img">
                <Image fill src="/service-1.svg" alt="img" />
              </div>
              <div className="about-subtitle">
                <h1>Только проверенные бренды</h1>
                <p>Бренды, проверенные временем и качеством</p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-img">
                <Image fill src="/service-2.svg" alt="img" />
              </div>
              <div className="about-subtitle">
                <h1>Самые низкие цены</h1>
                <p>Ниже не будет нигде</p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-img">
                <Image fill src="/service-3.svg" alt="img" />
              </div>
              <div className="about-subtitle">
                <h1>Быстрая доствка</h1>
                <p>Доставляем по всей РФза 1-10 дней</p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-img">
                <Image fill src="/service-4.svg" alt="img" />
              </div>
              <div className="about-subtitle">
                <h1>Большой ассортимент</h1>
                <p>Более 1000 товаров</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-products">
        <div className="container">
          <div className="product-title">
            <h1>Last Products</h1>
            <a href="/lastproducts">
              All Last Products
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
            <Products />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
