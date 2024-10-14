import { ChatBubbleIcon, EyeOpenIcon, HeartIcon } from "@radix-ui/react-icons";
import { getSiteStats } from "@/lib/getSiteStats";
import PageWrapper from "@/components/page-wrapper";
import MainNav from "@/components/nav/main-nav";
import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = async () => {
  const data = await getSiteStats();

  return (
    <PageWrapper>
      <MainNav fixed />
      <Image
        src="/assets/images/hero-gradient.webp"
        fill
        priority
        className="fixed inset-0 -top-24 -z-10 opacity-20 bg-blend-darken dark:opacity-5"
        alt="background-image"
      />
      <div className="mx-auto my-4 max-w-4xl md:my-6 lg:mb-24 lg:mt-12">
        <section className="mx-auto max-w-3xl space-y-12">
          <div className="space-y-6">
            <h1 className="md:my-10 text-2xl font-black font-heading lg:text-5xl">
              About Me
            </h1>
            <p>
              Hello, I&apos;m Patrick Xin. I&apos;m a passionate web developer
              with a keen eye for design and a love for clean, efficient code.
              I'm also the founder of{" "}
              <a
                className="text-primary underline"
                href="https://www.purrspal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Purrspal
              </a>
              . With years of experience, I specialize in creating responsive,
              user-friendly websites that not only look great but also perform
              flawlessly. From front-end finesse to back-end wizardry, I bring
              ideas to life in the digital realm. Always eager to embrace new
              technologies and push the boundaries of what's possible on the
              web.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 lg:mb-6">
              Tools I'm working with
            </h3>
            <div className="flex flex-wrap gap-4">
              <img
                src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
                alt="nextjs"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"
                alt="typescript"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="react"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt="tailwindcss"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/Bun.svg"
                alt="bun"
                width="32"
                height="32"
              />
              <img
                height="32"
                width="32"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/prisma.svg"
                alt="prisma"
              />
              <img
                height="32"
                width="32"
                src="https://icon.icepanel.io/Technology/svg/GraphQL.svg"
                alt="GraphQL"
              />
              <img
                height="32"
                width="32"
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="PostgresSQL"
              />
              <img
                height="32"
                width="32"
                src="https://icon.icepanel.io/Technology/svg/Git.svg"
                alt="git"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
                alt="html"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
                alt="css"
                width="32"
                height="32"
              />
              <img
                src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
                alt="javascript"
                width="32"
                height="32"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 lg:mb-6">Site stats</h3>
            <div className="grid max-w-3xl grid-cols-1 gap-4 lg:grid-cols-3">
              <GlareCard className="flex flex-col items-center justify-center">
                <h5>Total Views</h5>
                <div className="flex items-center gap-2">
                  <EyeOpenIcon className="h-4 w-4 text-indigo-500" />
                  <span className="font-code">{data.viewsCount}</span>
                </div>
              </GlareCard>
              <GlareCard className="flex flex-col items-center justify-center">
                <h5>Total Likes</h5>
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-4 w-4 text-red-500" />
                  <span className="font-code">{data.likesCount}</span>
                </div>
              </GlareCard>
              <GlareCard className="flex flex-col items-center justify-center">
                <h5>Total Comments</h5>
                <div className="flex items-center gap-2">
                  <ChatBubbleIcon className="h-4 w-4 text-green-500" />
                  <span className="font-code">{data.commentsCount}</span>
                </div>
              </GlareCard>
            </div>
          </div>

          <p>
            This website is a continuous working project and completely
            open-source on Github, source code can be found{" "}
            <a
              className="underline decoration-primary underline-offset-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/patrick-xin/patrickxin.com"
            >
              here
            </a>
            .
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
