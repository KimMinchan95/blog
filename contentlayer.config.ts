import { defineDocumentType, makeSource } from "contentlayer/source-files";

const STRING = "string";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: STRING, required: true },
    topic: { type: STRING, required: true },
    desc: { type: STRING, required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./library",
  documentTypes: [Post],
});
