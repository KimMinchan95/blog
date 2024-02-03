import Link from "next/link";
import Image from "next/image";

import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import IMG_URIS from "util/data/imgUris";

const Posts = () =>
  allPosts
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post: Post) => {
      return (
        <li key={post.url}>
          <Link href={post.url}>{post.title}</Link>
          <Image src={IMG_URIS[post.topic]} alt={post.topic} />
        </li>
      );
    });

export default Posts;
