import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Page = () => {
  const posts = allPosts.sort((a: Post, b: Post) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div>
      <h1>All posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.url}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
