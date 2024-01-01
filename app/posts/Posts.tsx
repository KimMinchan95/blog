import Link from "next/link";

import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Posts = () =>
  allPosts
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post: Post) => {
      return (
        <li key={post.url}>
          <Link href={post.url}>{post.title}</Link>
        </li>
      );
    });

export default Posts;
