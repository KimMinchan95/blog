import { StaticImageData } from "next/image";

import ALGORITHMS from "public/static/images/banner/ALGORITHMS.png";
import CSS from "public/static/images/banner/CSS.png";
import ETC from "public/static/images/banner/ETC.png";
import HTML from "public/static/images/banner/HTML.png";
import JAVASCRIPT from "public/static/images/banner/JAVASCRIPT.png";
import REACT from "public/static/images/banner/REACT.png";
import RECOIl from "public/static/images/banner/RECOIl.png";
import REDUX from "public/static/images/banner/REDUX.png";
import TIL from "public/static/images/banner/TIL.png";
import TYPESCRIPT from "public/static/images/banner/TYPESCRIPT.png";

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
} as const;

export default IMG_URIS;
