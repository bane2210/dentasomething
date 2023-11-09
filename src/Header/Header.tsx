import React from "react";
import Logo from "../Logo/Logo";
import NavigationMain from "../NavigationMain/NavigationMain";
import classes from "./Header.module.css";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  //
  return (
    <header className={classes.header}>
      <HeaderTop />
      <div className={classes.bottomHeader}>
          <Logo />
          <NavigationMain />
      </div>
    </header>
  );
};

export default Header;
