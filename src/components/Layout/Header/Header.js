import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import mealsImage from "../../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>
          Your Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food table" />
      </div>
    </>
  );
};

export default Header;
