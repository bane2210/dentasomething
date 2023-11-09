import { useEffect, useState } from "react";
import slider_1 from "../assets/galery/bambi-1.jpg";
import slider_2 from "../assets/galery/bambi-2.jpg";
import slider_3 from "../assets/galery/bambi-3.jpg";
import slider_4 from "../assets/galery/bambi-4.jpg";
import slider_5 from "../assets/galery/bambi-5.jpg";

import slider_6 from "../assets/galery/bambi-6.jpg";
import slider_7 from "../assets/galery/bambi-7.jpg";
import slider_8 from "../assets/galery/bambi-8.jpg";
import slider_9 from "../assets/galery/bambi-9.jpg";
import slider_10 from "../assets/galery/bambi-10.jpg";

import slider_11 from "../assets/galery/bambi-11.jpg";
import slider_12 from "../assets/galery/bambi-12.jpg";
import slider_13 from "../assets/galery/bambi-13.jpg";
import slider_14 from "../assets/galery/bambi-14.jpg";
import slider_15 from "../assets/galery/bambi-15.jpg";
import slider_16 from "../assets/galery/bambi-16.jpg";

const galeryRowImages = [
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
  {
    url: slider_6,
  },
  {
    url: slider_7,
  },
  {
    url: slider_8,
  },
  {
    url: slider_9,
  },
  {
    url: slider_10,
  },
  {
    url: slider_11,
  },
  {
    url: slider_12,
  },
  {
    url: slider_13,
  },
  {
    url: slider_14,
  },
  {
    url: slider_15,
  },
  {
    url: slider_16,
  },
];

const SliderImages: HTMLImageElement[] = [];
// Ucitavamo prve dve na startu
/* SliderImages[0] = new Image();
SliderImages[0].src = galeryRowImages[0].url;
SliderImages[1] = new Image();
SliderImages[1].src = galeryRowImages[1].url; */

export const useGaleryImages = () => {
  const [images, setImages] = useState(SliderImages);

  useEffect(() => {
    async function hellper() {
      const temp: HTMLImageElement[] = [];
      galeryRowImages.forEach((element, index) => {
        temp[index] = new Image();
        temp[index].src = element.url;
      });

      setImages(() => [...temp]);
    }

    if (images.length === 0) {
      hellper();
    }
  }, []);

  return { images: images };
};
