import { StaticImageData } from "next/image";

import ALGORITHMS from "public/images/banner/ALGORITHMS.png";
import CSS from "public/images/banner/CSS.png";
import ETC from "public/images/banner/ETC.png";
import HTML from "public/images/banner/HTML.png";
import JAVASCRIPT from "public/images/banner/JAVASCRIPT.png";
import REACT from "public/images/banner/REACT.png";
import RECOIl from "public/images/banner/RECOIl.png";
import REDUX from "public/images/banner/REDUX.png";
import TIL from "public/images/banner/TIL.png";
import TYPESCRIPT from "public/images/banner/TYPESCRIPT.png";
import ERROR from "public/images/banner/ERROR.png";

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
