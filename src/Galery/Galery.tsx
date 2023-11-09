import React, { useEffect, useState } from "react";
import { useSliderImages } from "../SlidersAssets/SliderAssets";
import classes from "./Galery.module.css";
import ImageItem from "./ImageItem/ImageItem";
import CoolLightbox from "./LightBox/CoolLightbox";
import { ImagesListType } from "react-spring-lightbox";
import { useGaleryImages } from "../Hooks/useGaleryImages";

/* {
    src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
    loading: 'lazy',
    alt: 'Windows 10 Dark Mode Setting',
}, */

const Galery = () => {
  const { images } = useGaleryImages();
  const [isLoaded, setIsLoaded] = useState(false);

  const [lightbox, setLightBox] = useState({ isOpen: false, position: 0 });

  let imagesLightBox: ImagesListType = [];

  images.forEach((element, index) => {
    imagesLightBox[index] = {
      src: element.currentSrc,
      loading: "lazy",
      alt: `galery image ${index}`,
    };
  });

  useEffect(() => {
    setIsLoaded(true);
  }, [images.length]);

  const toggleLightBoxHandler = (isOpen: boolean, position: number) => {
    setLightBox({ isOpen: isOpen, position: position });
  };


  return (
    <section className={classes.container}>
      <div className={classes.wraper}>
        {isLoaded && imagesLightBox.length > 6 ? (
          <CoolLightbox
            data-testid="coollightbox"
            isOpen={lightbox.isOpen}
            position={lightbox.position}
            images={imagesLightBox}
            toggleVisibility={toggleLightBoxHandler}
          />
        ) : null}
        {images.map((element, index) => {
          return (
            <ImageItem
              key={`${element.id} ${index}`}
              src={element.src}
              alt={`galery image ${index}`}
              index={index}
              open={toggleLightBoxHandler}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Galery;
