import React from "react";
import classes from "./Footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";


const Footer = () => {
  return (
    <footer data-testid="footer-id" className={classes.footer}>
      <section className={classes.cover_container}>
        <h1 className={classes.footerTopTitle}>Bambi Play dečja igraonica</h1>
        <div className={classes.footerBottomContainer}>
          <div className={classes.singleContainer}>
            <h2 className={classes.footerTitle}>Kontakt</h2>
            <p className={classes.footerLogo}>
              <CallIcon color="inherit" fontSize="inherit" />
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Telefon: </span>
              <a href="tel:0600110110">060/011 011 0</a>{" "}
            </p>
          </div>
          <div className={classes.singleContainer}>
            <h2 className={classes.footerTitle}>Radno vreme</h2>
            <p className={classes.footerLogo}>
              <AccessTimeIcon color="inherit" fontSize="inherit" />
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Uto-Pet: </span> 12:00 – 22:00
              h{" "}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Sub-Ned: </span> 10:00 – 22:00
              h{" "}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Pon: </span> Neradan dan
            </p>
          </div>
          <div className={classes.singleContainer}>
            <h2 className={classes.footerTitle}>Adresa</h2>
            <p className={classes.footerLogo}>
              <LocationCityIcon color="inherit" fontSize="inherit" />
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>
                Braće Vučković 27, Bele Vode
              </span>{" "}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
