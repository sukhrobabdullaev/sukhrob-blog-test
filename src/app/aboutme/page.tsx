import { Metadata } from "next";
import IconCloud from "@/components/magicui/icon-cloud";
import { BlurImages } from "@/components/shared/blur-images";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "graphql",
  "mongodb",
  "tailwindcss",
  "shadcnui",
  "redux",
  "sass",
  "bootstrap",
  "mui",
  "antdesign"
];

export const metadata: Metadata = {
  title: "About Me",
  description: "About Me - Sukhrob Abdullaev",
};

const AboutPage = () => {
  return (
    <div className="flex md:max-w-[1220px] mx-auto md:pt-32 pt-20 items-center flex-col justify-center">
      <BlurImages/>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default AboutPage;
