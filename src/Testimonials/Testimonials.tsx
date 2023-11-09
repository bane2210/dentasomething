import React from "react";
import TestimonialItem from "./TestimonialItem";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={classes.containerBackground}>
      <div className={classes.container}>
        <TestimonialItem
          name="Maja"
          text="Ja sam oduševljena, konačno u svom kraju mogu negde da na miru popijem kafu dok se moja deca bezbrižno igraju."
        />
        <TestimonialItem
          name="Ljubica"
          text="Prelepo. Ljubazni domaćini, redovno dovodim svog unuka."
        />
        <TestimonialItem
          name="Aca i Brankica"
          text="Slavili smo ćerkici rođendan i veoma smo prijatno iznenađeni. Preporučujemo svima!"
        />
        <TestimonialItem
          name="Dragan"
          text="Nemam decu ali rado dođem ovde da popijem kafu, Miša sprema sjajan kapućino."
        />
      </div>
    </section>
  );
};

export default Testimonials;
