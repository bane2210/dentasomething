import React, { useEffect, useState } from "react";
import classes from "./NavigationMain.module.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import { motion } from "framer-motion";
import { animateLeftRight } from "../animate/animate";

const NavigationMain = () => {
  const { width } = useWindowDimensions();
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisability = () => {
    setIsVisable((prevState) => !prevState);
  };

  useEffect(() => {
    const temp = width > 680 ? true : false;
    setIsVisable(() => temp);
  }, [width]);

  return (
    <motion.nav key="nav-animation"
      {...animateLeftRight('x', 400)}

      className={classes.container}
    >
      <button className={classes.hamburger} onClick={toggleVisability}>
        <MenuIcon color="inherit" fontSize="inherit" />
      </button>
      <div
        className={classes.navigation_menu}
        style={isVisable ? { display: "flex" } : { display: "none" }}
      >
        <button className={classes.hamburgerClose} onClick={toggleVisability}>
          <CloseIcon color="inherit" fontSize="inherit" />
        </button>
        <ul onClick={width < 680 ? toggleVisability : () => {}}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.activna : classes.notActive
              }
            >
              <span className={classes.navIcons}>
                <HomeIcon fontSize="inherit" />
              </span>
              Početna
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galery"
              className={({ isActive }) =>
                isActive ? classes.activna : classes.notActive
              }
            >
              <span className={classes.navIcons}>
                <CameraAltIcon fontSize="inherit" />
              </span>{" "}
              Galerija
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price-list"
              className={({ isActive }) =>
                isActive ? classes.activna : classes.notActive
              }
            >
              <span className={classes.navIcons}>
                <PriceCheckIcon fontSize="inherit" />
              </span>{" "}
              Cenovnik
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavigationMain;
