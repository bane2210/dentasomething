import React from "react";
import LogoImage from "../assets/bambi-play-transparent.png";
import classes from "./Logo.module.css";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div key="logo-animation"
    animate={{
        scale: [0.2, 0.5, 0.8, 0.9, 1], 
        rotate: [-45, 45, -45, 45, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}

      transition={{ease:"easeInOut", duration: 2}}
      
      className={classes.container}
    >
      <img src={LogoImage} alt="logo" />
    </motion.div>
  );
};

export default Logo;
