import { StaticImageData } from "next/image";

import ALGORITHMS from "/images/banner/ALGORITHMS.png";
import CSS from "/images/banner/CSS.png";
import ETC from "/images/banner/ETC.png";
import HTML from "/images/banner/HTML.png";
import JAVASCRIPT from "/images/banner/JAVASCRIPT.png";
import REACT from "/images/banner/REACT.png";
import RECOIl from "/images/banner/RECOIl.png";
import REDUX from "/images/banner/REDUX.png";
import TIL from "/images/banner/TIL.png";
import TYPESCRIPT from "/images/banner/TYPESCRIPT.png";
import ERROR from "/images/banner/ERROR.png";

interface ImgUris {
  [name: string]: StaticImageData;
}

const IMG_URIS: ImgUris = {
  ALGORITHMS,
  CSS,
  ETC,
  HTML,
  JAVASCRIPT,
  REACT,
  RECOIl,
  REDUX,
  TIL,
  TYPESCRIPT,
  ERROR,
} as const;

const selectImage = (topic: string) => {
  return IMG_URIS[topic] || ERROR;
};

export default selectImage;
