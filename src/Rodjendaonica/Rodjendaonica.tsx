import React from "react";
import { Link } from "react-router-dom";
import classes from "./Rodjendaonica.module.css";
import { motion } from "framer-motion";

const Rodjendaonica = () => {
  return (
    <motion.section
    key="rodjen-animation"
      
      className={classes.containerOut}
    >
      <div className={classes.container}>
        <h1>Dnevna igraonica</h1>
        <h3>
          Kada nemamo organizovane rođendane možete dovesti vašu decu da se
          bezbrižno igraju u našoj veseloj igraonici. Prostor igraonice je
          pregledan i možete uvek vaše mališane držati na oku dok se opuštate u
          našem kafiću. Cena dnevne Bambi Play karte je samo 300 rsd.
        </h3>
      </div>
      <div className={classes.container}>
        <h1>Proslava rođendana</h1>
        <h3>
          Organizujte rođendan kod nas i priredite vašoj deci i gostima
          nezaboravne trenutke. Raspolažemo sa 55 sedećih mesta za odrasle i do 40
          za mališane. Cene proslave rođendana u Bambi Play igraonici su
          najpovoljnije u gradu i možete ih pogledati u našem cenovniku.
        </h3>

        <div className={classes.cenovnik}>
          <Link className={classes.cenovnikLink} to="/price-list">
            Pogledajte cenovnik
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Rodjendaonica;
