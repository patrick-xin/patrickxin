import type { ComputedFields } from "contentlayer/source-files";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import { visit } from "unist-util-visit";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  url: {
    type: "string",
    resolve: (post) => `/post/${post._raw.flattenedPath}`,
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatededAt: { type: "string", required: false },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    isPublished: { type: "boolean", required: true },
    toc: { type: "boolean", required: true },
    thumbnail: { type: "json", required: false },
    category: { type: "enum", required: true, options: ["web", "ai"] },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content/posts",
  documentTypes: [Post],
  mdx: {
    //remarkPlugins: [remarkExternalLinks, remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            for (const child of node.children) {
              child.properties.raw = node.raw;
            }
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
        },
      ],
    ],
  },
});

export default contentLayerConfig;
