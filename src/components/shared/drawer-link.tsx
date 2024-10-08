"use client";
import Link from "next/link";
import { Props } from "./mobile-drawer";

const DrawerLinks: React.FC<Props> = ({ setOpen }) => {
  return (
    <>
      <Link
        href="/blogs"
        onClick={() => setOpen(false)}
        className="md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto border rounded-sm md:p-0 p-2 active:bg-zinc-500 hover:bg-zinc-700 md:border-0 md:hover:bg-transparent hover:text-white md:hover:text-black md:dark:hover:text-white"
      >
        Blogs
      </Link>
      {/* <Link
        href="/projects"
        onClick={() => setOpen(false)}
        className="md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto  rounded-sm md:p-0 p-2 active:bg-cyan-500 hover:bg-cyan-700  md:hover:bg-transparent md:text-cyan-400 font-semibold md:hover:text-cyan-500 md:dark:hover:text-cyan-500"
      >
        Projects
      </Link> */}
      <Link
        href="/aboutme"
        onClick={() => setOpen(false)}
        className="md:hidden block md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto border rounded-sm md:p-0 p-2 active:bg-zinc-500 hover:bg-zinc-700 md:border-0 md:hover:bg-transparent hover:text-white md:hover:text-black md:dark:hover:text-white"
      >
        About me
      </Link>
      <Link
        href="https://youtube.com/@sukhrob-abdullaev"
        onClick={() => setOpen(false)}
        target="_blank"
        className="md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto border rounded-sm md:p-0 p-2 active:bg-red-500 hover:bg-zinc-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:text-white"
      >
        YouTube
      </Link>
    </>
  );
};

export default DrawerLinks;
