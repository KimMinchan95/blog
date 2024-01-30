import Image from "next/image";
import Posts from "./Posts";

import BACKGROUND_WAVE from "public/static/images/background-wave.webp";

const Page = () => {
  return (
    <div>
      <Image
        src={BACKGROUND_WAVE}
        alt="wave"
        className="w-full h-80 bg-cover object-center"
      />
      <ul>
        <Posts />
      </ul>
    </div>
  );
};

export default Page;
