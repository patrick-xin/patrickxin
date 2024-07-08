// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import { visit } from "unist-util-visit";
import rehypePrism from "rehype-prism-plus";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  },
  url: {
    type: "string",
    resolve: (post) => `/post/${post._raw.flattenedPath}`
  }
};
var Post = defineDocumentType(() => ({
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
    tags: { type: "list", of: { type: "string" }, required: true }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkExternalLinks],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code")
              return;
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
          behavior: "append"
        }
      ]
    ]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GNPUEWOR.mjs.map