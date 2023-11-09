import React from "react";
import classes from "./Map.module.css";

const Map: React.FC<{}> = () => (
  <section className={classes.container}>
    <h2>Gde se nalazimo?</h2>
    <div
      className={classes.map}
      dangerouslySetInnerHTML={{
        __html: `<iframe title="a" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11333.187216820834!2d20.4099717!3d44.7543613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68066463cd3acef4!2sBambi%20Play%20Igraonica!5e0!3m2!1ssr!2srs!4v1670368513300!5m2!1ssr!2srs" style="border:0; width: 95%; max-width: 600px; height: 300px; margin: 10px auto;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      }}
    ></div>
  </section>
);

export default Map;
