import React from "react";
import classes from "./PriceList.module.css";
import priceImage from "../assets/new-menu.jpg";

const PriceList: React.FC<{}> = () => {
  window.scroll(0, 0);
  return (
    <div className={classes.container}>
      <h1>Ovde možete pogledati cene svih naših usluga</h1>
      <h4>Cena zakupa igraonice sa satnicama</h4>
      <ul>
        <li>
          <span className={classes.leftSpan}>Pon-Cet (18h-21h)</span>{" "}
          <span className={classes.rightSpan}>8 000 rsd</span>
        </li>
        <li>
          <span className={classes.leftSpan}>Pet (18h-21h)</span>{" "}
          <span className={classes.rightSpan}>9 000 rsd</span>
        </li>
        {/* <li>
          <span className={classes.leftSpan}>Sub-Ned (10h-12h)</span>{" "}
          <span className={classes.rightSpan}>5 000 rsd</span>
        </li> */}
        <li>
          <span className={classes.leftSpan}>
            Sub-Ned (12h - 14h30, 15h-17h30, 18h-20h30)
          </span>{" "}
          <span className={classes.rightSpan}>9 000 rsd</span>
        </li>
      </ul>
      <h4>Cena proslave uključuje</h4>
      <ul className={classes.bottomUL}>
          <li>Zakup igraonice</li>
          <li>Osoblje koje poslužuje roditelje</li>
          <li>Profesionalni animatori (šminkanje i crtanje po licu)</li>
          <li>Pribor za serviranje hrane</li>
          <li>Online pozivnice</li>
        </ul>
      <div className={classes.containerImg}>
        <h4>Naša karta pića</h4>
        <img src={priceImage} alt="price list" />
      </div>
    </div>
  );
};

export default PriceList;
