import Image from "next/image";
import Posts from "./Posts";

import BACKGROUND_WAVE from "public/static/images/background-wave.webp";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={BACKGROUND_WAVE}
          alt="wave"
          className="w-full h-72 bg-cover object-center"
        />
        <div className="flex flex-col w-full gap-1 content-center absolute top-4 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-3xl font-bold font-serif">Front-End Deep Dive</h1>
          <desc className="text-sm italic font-mono">
            Written by Kim Minchan
          </desc>
        </div>
      </div>
      <ul>
        <Posts />
      </ul>
    </div>
  );
};

export default Page;
