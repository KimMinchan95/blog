import Image from "next/image";
import Link from "next/link";
import { format, compareDesc } from "date-fns";

import { footerItems } from "./layout/util";
import { allPosts, Post } from "contentlayer/generated";

const CHAN = "/images/chan.webp";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 m-6">
      <h1 className="text-4xl font-[600]">😆 Kim Min Chan</h1>
      <div className="flex gap-6 align-middle mx-3">
        <Image
          src={CHAN}
          alt="chan"
          width="200"
          height="200"
          className="rounded-lg"
        />
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-xl font-[600]">
            React 기반 프론트엔드 개발자 김민찬입니다.
          </h2>
          <div>
            저를 한마디로 표현하자면 ‘곱하기’라고 할 수 있습니다. 소통과
            열정으로 팀원들과 협업하며 더 큰 가치를 만듭니다.
          </div>
          <div className="flex gap-4">
            {footerItems.map(({ subject, href, Icon }) => (
              <Link
                key={subject}
                href={href}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Icon className="text-2xl" />
                <desc className="text-lg">{subject}</desc>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-[700]">🧭 Recent Posts</h1>
      <ul className="flex flex-col gap-10">
        {allPosts
          .sort((a: Post, b: Post) =>
            compareDesc(new Date(a.date), new Date(b.date)),
          )
          .slice(0, 5)
          .map((post: Post) => {
            return (
              <li key={post.url} className="flex flex-col gap-1">
                <Link href={post.url}>
                  <time className="text-sm text-neutral-500">
                    {format(post.date, "yyyy-MM-dd")}
                  </time>
                  <h4 className="text-2xl font-[600] font-serif">
                    {post.title}
                  </h4>
                  <desc>{post.desc}</desc>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
