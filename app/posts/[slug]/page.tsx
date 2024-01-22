import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";

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
      <div className="mx-auto pt-4 pb-1 mb-3 border-b-black-300 border-b-2">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm">{post.desc}</p>
        <div className="text-end text-sm">
          {format(post.date, "yyyy-MM-dd")}
        </div>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

const getPost = async (params: { slug: string }) => {
  const slug = params?.slug;
  const post = allPosts.find(post => post._raw.flattenedPath === slug);

  return post;
};

export default Post;
