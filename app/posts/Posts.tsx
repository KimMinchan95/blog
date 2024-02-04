import Link from "next/link";
import Image from "next/image";

import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import selectImage from "util/data/selectImage";

const Posts = () =>
  allPosts
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post: Post) => {
      return (
        <li key={post.url} className="p-4 bg-white">
          <div>
            <Image src={selectImage(post.topic)} alt={post.topic} />
          </div>
          <Link href={post.url}>{post.title}</Link>
        </li>
      );
    });

export default Posts;
