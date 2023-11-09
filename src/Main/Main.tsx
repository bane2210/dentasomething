import React from "react";
import Map from "../Map/Map";
import Rodjendaonica from "../Rodjendaonica/Rodjendaonica";
import SliderTop from "../Sliders/SliderTop";
import Testimonials from "../Testimonials/Testimonials";
import classes from "./Main.module.css";
import {motion} from 'framer-motion'
import { animateLeftRight } from "../animate/animate";


const Main = () => {
  
  return (
    <motion.main key="main-animation" {...animateLeftRight('x', -100)} className={classes.main}>
      <SliderTop />
      <Rodjendaonica />
      <Testimonials />
      <Map />
    </motion.main>
  );
};

export default Main;
