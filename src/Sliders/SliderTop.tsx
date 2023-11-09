import React, { useEffect, useState } from "react";
import classes from "./SliderTop.module.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useSliderImages } from "../SlidersAssets/SliderAssets";

const correctPosition = (position: number, length: number) => {
  if (position > length - 1) return 0;
  else if (position < 0) return length - 1;
  else return position;
};

type PropsType = {
  slideRightComponent?: JSX.Element | (() => JSX.Element);
  slideLeftComponent?: JSX.Element | (() => JSX.Element);
};

const SlidersTop: React.FC<PropsType> = (props) => {
  const [position, setPosition] = useState(0);

  const { state: SliderImages } = useSliderImages();

  const length = SliderImages.length;

  useEffect(() => {

    const timeout = setInterval(() => {
      setPosition((prevPos) => {
        return correctPosition(prevPos + 1, length);
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [length]);

  const changeImageHandler = (direction: number) => {
    setPosition((prevPosition) =>
      correctPosition(prevPosition + direction, length)
    );
  };

  let xPos: null | number = null;

  const touchStarthandler = (e: React.TouchEvent) => {
    xPos = e.touches[0].clientX;
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    if (!xPos) return;

    let tempPosition = 0;
    if (e.touches[0].clientX - xPos > 0) tempPosition--;
    else tempPosition++;

    setPosition((positionPrev) =>
      correctPosition(positionPrev + tempPosition, length)
    );
  };

  const slideLeftComponent = (
    <div className={classes.leftSlide} onClick={() => changeImageHandler(-1)}>
      {props.slideLeftComponent ? (
        typeof props.slideLeftComponent === "function" ? (
          props.slideLeftComponent()
        ) : (
          props.slideLeftComponent
        )
      ) : (
        <KeyboardDoubleArrowLeftIcon fontSize="inherit" color="inherit" />
      )}
    </div>
  );

  const slideRightComponent = (
    <div className={classes.rightSlide} onClick={() => changeImageHandler(1)}>
      <KeyboardDoubleArrowRightIcon fontSize="inherit" color="inherit" />
    </div>
  );
  // animation: slider-images 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  return (
    <section
      style={
        SliderImages.length
          ? {
              backgroundImage: `url(${SliderImages[position].src})`,
              transition: "background-image 1s ease-in-out",
            }
          : {}
      }
      className={classes.sliderTop}
      onTouchStart={touchStarthandler}
      onTouchMove={touchMoveHandler}
    >
      {slideLeftComponent}
      {slideRightComponent}
    </section>
  );
};

export default SlidersTop;
