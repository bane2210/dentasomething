import React from "react";
import classes from "./HeaderTop.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const HeaderTop = () => {
  return (
    <section className={classes.container}>
      <h1>Dečja igraonica <span>Bele Vode</span></h1>
      
      <div>
        <span>Telefon: </span>
        <PhoneIcon color="inherit" fontSize="inherit" />
        <a href="tel:0600110110" style={{ marginLeft: "3px" }}>
        060/011 011 0
        </a>
      </div>
      <div>
        {/* <span style={{ marginRight: "5px" }}>
          <a style={{color:"#010170"}} href="https://facebook.com" target="_blank" rel="noreferrer">
            
            <FacebookIcon color="inherit" fontSize="inherit" />
          </a>
        </span> */}
        <span>Instagram </span>

        <a href="https://www.instagram.com/igraonica.bambi/" target="_blank" rel="noreferrer">
          <div className={classes.instaLogo}>
            
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeaderTop;
