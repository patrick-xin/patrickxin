import React from "react";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import PageWrapper from "@/components/page-wrapper";

import MainNav from "@/components/nav/main-nav";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projects } from "@/lib/constants";

import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <MainNav fixed />
      <div className="mx-auto my-4 max-w-6xl md:my-6 lg:mb-24 lg:mt-12">
        <div className="mb-6">
          <h1 className="md:my-10 text-2xl font-black font-heading lg:text-5xl">
            Projects
          </h1>
          <div className="mt-4 text-muted-foreground">
            Selection of my projects, all are built with{" "}
            <Badge variant="indigo">Next.js</Badge> and{" "}
            <Badge variant="amber">Tailwind CSS</Badge>
          </div>
        </div>

        <BentoGrid>
          {projects.map((item, i) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              link={item.link}
              categories={item.categories ?? []}
            />
          ))}
        </BentoGrid>
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default ProjectsPage;
