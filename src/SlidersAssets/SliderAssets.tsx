import { useEffect, useState } from "react";
import slider_1 from "../assets/galery/bambi-1.jpg";
import slider_2 from "../assets/galery/bambi-2.jpg";
import slider_3 from "../assets/galery/bambi-3.jpg";
import slider_4 from "../assets/galery/bambi-4.jpg";
import slider_5 from "../assets/galery/bambi-5.jpg";


const sliderRowImages = [
  {
    url: slider_1,
  },
  {
    url: slider_2,
  },
  {
    url: slider_3,
  },
  {
    url: slider_4,
  },
  {
    url: slider_5,
  },
];

/* async function loadSliderImages() {
    SliderTopImages.forEach((element, index) => {
      imageArray[index] = new Image();
      imageArray[index].src = element.url;
    });
    setPosition(1);

  }
   */
const SliderImages: HTMLImageElement[] = [];
// Ucitavamo prve dve na startu
SliderImages[0] = new Image();
SliderImages[0].src = sliderRowImages[0].url;
SliderImages[1] = new Image();
SliderImages[1].src = sliderRowImages[1].url;

export const useSliderImages = () => {
  const [state, setState] = useState(SliderImages);

  useEffect(() => {
    async function initSliderImages() {
      const temp: HTMLImageElement[] = [];

      sliderRowImages.forEach((element, index) => {
        temp[index] = new Image();
        temp[index].src = element.url;
      });

      setState(() => [...temp]);
    }
    if (state.length < 3) {
      initSliderImages();
    }
  }, [state.length]);

  return { state: state };
};
