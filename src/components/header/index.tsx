"use client"

import NavLink from "../navlink";
import "./style.scss";
import Image from "next/image";
import SearchInput from "./../search-input/index";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsShrunk(true);
        } else {
          setIsShrunk(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <header className={isShrunk ? "shadow"  : ""}>
      <nav className={isShrunk ? "none-top-nav top-nav container" : "top-nav container"}>
        <div className="top-nav-left">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/payment">Shipping & Payment</NavLink>
          <NavLink href="/return">Return</NavLink>
          <NavLink href="/guarantee">Guarantee</NavLink>
          <NavLink href="/contact">Contacts</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
        <div className="top-nav-right">
          <p>(+998)93-755-04-12</p>
          <p>Request a call</p>
        </div>
      </nav>
      <nav className="main-nav container">
        <NavLink className="nav-logo" href="/">
          <Image width={40} height={40} src="/logo.svg" alt="logo" />
          <p>E-Market</p>
        </NavLink>
        <SearchInput />
        <div className="nav-menu">
          <NavLink href="/products">Products</NavLink>
          <NavLink className="favourite" href="/favourite">
            <FaRegHeart />
          </NavLink>
          <NavLink className="cart" href="/cart">
            <span>0</span>
            <FaShoppingCart />
          </NavLink>
          <div className="login-group">
            <NavLink className="login" href="/login">
              Login
            </NavLink>
            <NavLink className="register" href="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
