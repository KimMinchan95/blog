import Link from "next/link";
import Image from "next/image";
import { format, compareDesc } from "date-fns";

import Chan from "public/images/chan.webp";

import { allPosts, Post } from "contentlayer/generated";
import selectImage from "util/data/selectImage";

const Posts = () =>
  allPosts
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post: Post) => {
      return (
        <li key={post.url} className="p-4 bg-white">
          <Link
            href={post.url}
            className="flex flex-col gap-1  border border-gray-200 rounded-sm"
          >
            <Image src={selectImage(post.topic)} alt={post.topic} />
            <article className="flex flex-col gap-1 px-8 py-6">
              <div className="flex text-xs items-center gap-2 text-gray-600">
                <div>
                  <Image
                    src={Chan}
                    alt="chan"
                    width="20"
                    height="20"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <div>chan</div>
                  <div>{format(post.date, "PP")}</div>
                </div>
              </div>
              <div className="text-xl font-serif">{post.title}</div>
              <desc className="text-sm italic">{post.desc}</desc>
            </article>
          </Link>
        </li>
      );
    });

export default Posts;
