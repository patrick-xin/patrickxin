import type { Project, ProjectCategory, ProjectCategoryKey } from "@/types";
import {
  HomeIcon,
  Pencil2Icon,
  KeyboardIcon,
  RocketIcon,
  BookmarkIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

export const PATH = [
  { name: "All", path: undefined, href: "/post" },
  { name: "AI", path: "ai", href: "/category/ai" },
  { name: "Web", path: "web", href: "/category/web" },
];

export const NAGIGATIONS = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon className="h-2 w-2" />,
  },
  {
    title: "Posts",
    href: "/post",
    icon: <Pencil2Icon className="h-3 w-3" />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <InfoCircledIcon className="h-3 w-3" />,
  },
  {
    title: "Bookmarks",
    href: "/bookmark/web",
    icon: <BookmarkIcon className="h-3 w-3" />,
  },
  {
    title: "About",
    href: "/about",
    icon: <InfoCircledIcon className="h-3 w-3" />,
  },
];

export const CATEGORIES = [
  {
    title: "ALL",
    href: "/post",
    icon: "⚒️",
    path: undefined,
  },
  {
    title: "WEB",
    href: "/category/web",
    icon: <RocketIcon />,
    path: "web",
  },
  {
    title: "AI",
    href: "/category/ai",
    icon: <KeyboardIcon />,
    path: "ai",
  },
];

export const PROJECT_CATEGORY: Record<ProjectCategoryKey, ProjectCategory> = {
  next: { name: "Next.js", badgeColor: "indigo" },
  tailwind: { name: "Tailwind CSS", badgeColor: "amber" },
  hygrapgh: { name: "Hygraph CMS", badgeColor: "gray" },
  sanity: { name: "Sanity CMS", badgeColor: "purple" },
  shopify: { name: "Shopify", badgeColor: "green" },
  landing: { name: "Landing Page", badgeColor: "indigo" },
  neon: { name: "Neon DB", badgeColor: "teal" },
  supabase: { name: "Supabase", badgeColor: "rose" },
  nextauth: { name: "Next Auth", badgeColor: "blue" },
  shadcn: { name: "Shad CN", badgeColor: "outline" },
  postgres: { name: "PostgreSQL", badgeColor: "cyan" },
  framer: { name: "Framer Motion", badgeColor: "yellow" },
  graphql: { name: "GraphQL", badgeColor: "pink" },
  reactQuery: { name: "React Query", badgeColor: "violet" },
};

export const projects: Project[] = [
  {
    title: "Purrspal",
    description: "E-commerce shop for cats well-being",
    image: {
      src: "/assets/images/projects/purrspal.jpg",
      alt: "purrspal landing image",
    },
    link: "https://www.purrspal.com/",
    categories: [
      PROJECT_CATEGORY.next,
      PROJECT_CATEGORY.shopify,
      PROJECT_CATEGORY.shadcn,
      PROJECT_CATEGORY.neon,
      PROJECT_CATEGORY.postgres,
    ],
  },
  {
    title: "AIntelliHub",
    description: "The Social Platform for AI Tool Discovery",
    image: {
      src: "/assets/images/projects/aintellihub.avif",
      alt: "landing image",
    },
    link: "https://aintellihub.vercel.app/",
    categories: [
      PROJECT_CATEGORY.nextauth,
      PROJECT_CATEGORY.shadcn,
      PROJECT_CATEGORY.neon,
      PROJECT_CATEGORY.postgres,
    ],
  },
  {
    title: "Mishmash",
    description: "Fully customized headless storefront.",
    image: {
      src: "/assets/images/projects/mishmash.avif",
      alt: "landing image",
    },
    link: "https://px-mishmash.vercel.app",
    categories: [PROJECT_CATEGORY.shopify, PROJECT_CATEGORY.graphql],
  },
  {
    title: "PX's Groove",
    description: "Mini music player",
    image: {
      src: "/assets/images/projects/groove.png",
      alt: "landing image",
    },
    link: "https://px-groove.vercel.app/",
    categories: [PROJECT_CATEGORY.next, PROJECT_CATEGORY.tailwind],
  },

  {
    title: "Personal website",
    description: "Personal website, designed and coded by myself.",
    image: {
      src: "/assets/images/projects/patrickxin.avif",
      alt: "landing image",
    },
    link: "https://patrickxin.com/",
    categories: [
      PROJECT_CATEGORY.neon,
      PROJECT_CATEGORY.supabase,
      PROJECT_CATEGORY.framer,
    ],
  },
  {
    title: "Livingetc",
    description: "Rebuilding Livingetc using Hygraph CMS",
    image: {
      src: "/assets/images/projects/livingetc.avif",
      alt: "landing image",
    },
    link: "https://next-hygraph.vercel.app/",
    categories: [PROJECT_CATEGORY.hygrapgh],
  },
  {
    title: "Portfolio website",
    description: "The Social Platform for AI Tool Discovery",
    image: {
      src: "/assets/images/projects/portfolio.jpg",
      alt: "landing image",
    },
    link: "https://hengyuchen.vercel.app/",
    categories: [PROJECT_CATEGORY.sanity],
  },
  {
    title: "SpendWise",
    description: "Embark on exciting journeys and thrilling discoveries.",
    image: {
      src: "/assets/images/projects/budget.png",
      alt: "landing image",
    },
    link: "https://px-spend-wise.vercel.app/",
    categories: [PROJECT_CATEGORY.tailwind, PROJECT_CATEGORY.reactQuery],
  },
];
