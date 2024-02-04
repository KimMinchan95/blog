import Image from "next/image";
import Posts from "./Posts";

import BACKGROUND_WAVE from "public/static/images/background/wave.webp";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <Image
          src={BACKGROUND_WAVE}
          alt="wave"
          className="h-72 bg-cover object-center"
        />
        <div className="flex flex-col gap-1 content-center absolute top-4 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-3xl font-bold font-serif">Front-End Deep Dive</h1>
          <desc className="text-sm italic font-mono">
            Written by Kim Minchan
          </desc>
        </div>
      </div>
      <section className="relative z-10 -mt-24 mb-10 max-w-3xl">
        <ul className="flex flex-col gap-6">
          <Posts />
        </ul>
      </section>
    </div>
  );
};

export default Page;
