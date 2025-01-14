import React from "react";
import type { Bookmarks, BookmarkCategory, IBookmarkItem } from "@/types";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { BOOKMARKS, BOOKMARKS_AI, BOOKMARKS_WEB } from "../../data";
import BookmarkItem from "../../_components/item";

export const generateStaticParams = () =>
  [...BOOKMARKS_WEB, ...BOOKMARKS_AI].map((bookmark) => ({
    category: bookmark.category,
    slug: [bookmark.slug],
  }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string; category: string };
}) => {
  const category = Object.keys(BOOKMARKS).find((b) => b === params.category);
  if (!category) {
    return {};
  }
  return {
    title: "Bookmarks",
    description: `A collection of ${category} bookmarks`,
    openGraph: {
      title: category,
      description: `A collection of ${category} bookmarks`,
      type: "article",
      url: absoluteUrl(`/category/${category}`),
    },
    twitter: {
      card: "summary_large_image",
      title: category,
      description: `${category} bookmarks}`,
      images: [siteConfig.assets.ogImage],
      creator: "@alpesdream",
    },
  };
};
interface PageProps {
  params: {
    category: keyof Bookmarks;
    slug?: keyof BookmarkCategory;
  };
}

const Page = ({ params }: PageProps) => {
  let contents: IBookmarkItem[] = [];
  let intro = "";
  const web = params.category === "web";
  const ai = params.category === "ai";
  if (params.slug) {
    // If slug is provided, filter the specific subcategory
    contents = BOOKMARKS[params.category][params.slug]?.data || [];
    intro = BOOKMARKS[params.category][params.slug]?.intro || "";
  } else {
    if (web) {
      intro =
        "Welcome to my digital alcove dedicated to all things web. Over the years, I've traversed the vast expanse of the internet, discovering gems that have enriched my understanding and skills. From insightful articles to innovative tools, from design inspirations to the latest in web trends, this section is a reflection of my journey. Whether you're a seasoned developer, a budding designer, or someone with a keen interest in the digital realm, I invite you to explore, learn, and be inspired.";
    }
    if (ai) {
      intro =
        " Step into the future with my curated collection on artificial intelligence. AI has always been a subject close to my heart, a blend of science and magic that continues to redefine the boundaries of possibility. Here, I've gathered resources, tools, and platforms that showcase the transformative power of AI. From the intricacies of prompting to the wonders of GPT, this section is a testament to the ever-evolving world of AI. Join me in exploring the marvels and mysteries of artificial intelligence.";
    }
    // If no slug is provided, combine all subcategories into one array
    Object.values(BOOKMARKS[params.category]).forEach((subcategory) => {
      contents = [...contents, ...subcategory.data];
    });
  }
  return (
    <div className="col-span-full col-start-2 mx-auto max-w-2xl">
      <div className="hidden border-b border-border/10 lg:block">
        <h1 className="mb-4 text-5xl font-black">
          Bookmarks for {web && "Web Development"} {ai && "AI"}
          {/* <span className="text-gradient">
            {web && "Web Development"} {ai && "AI"}
          </span> */}
        </h1>
        <p className="mb-6 text-base text-muted-foreground">{intro}</p>
      </div>
      <div className="mt-28 lg:mt-0">
        {contents.map((content, index) => (
          <BookmarkItem
            key={content.title}
            {...content}
            noBorder={index + 1 === contents.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
