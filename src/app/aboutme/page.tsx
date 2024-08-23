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
      <div className="max-w-5xl mx-auto px-8 ">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight dark:text-zinc-50 max-w-3xl">I'm Software Engineer who is <span className="text-cyan-500">building projects.</span></h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide pb-10">PROFILE section is here...</p></div>
      <BlurImages />
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 flex-col">
        <h1 className="bg-gradient-to-r from-cyan-800 via-cyan-500  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Skills</h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default AboutPage;
