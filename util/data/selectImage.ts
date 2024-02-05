const ALGORITHMS = "/images/banner/ALGORITHMS.png";
const CSS = "/images/banner/CSS.png";
const ETC = "/images/banner/ETC.png";
const HTML = "/images/banner/HTML.png";
const JAVASCRIPT = "/images/banner/JAVASCRIPT.png";
const REACT = "/images/banner/REACT.png";
const RECOIl = "/images/banner/RECOIl.png";
const REDUX = "/images/banner/REDUX.png";
const TIL = "/images/banner/TIL.png";
const TYPESCRIPT = "/images/banner/TYPESCRIPT.png";
const ERROR = "/images/banner/ERROR.png";

interface ImgUris {
  [name: string]: string;
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
