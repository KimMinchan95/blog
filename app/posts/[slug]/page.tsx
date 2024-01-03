import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "components/Mdx";

interface Props {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: Props) => {
  const post = await getPost(params);

  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
    </article>
  );
};

export const getPost = async (params: { slug: string }) => {
  const slug = params?.slug;
  const post = allPosts.find(post => post._raw.flattenedPath === slug);

  return post;
};

export default Post;
