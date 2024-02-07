import Link from "next/link";
import React from "react";

const DrawerLinks = () => {
  return (
    <>
      <Link
        href="/blog"
        className="md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto border rounded-sm md:p-0 p-2 active:bg-zinc-500 hover:bg-zinc-700 md:border-0 md:hover:bg-transparent hover:text-white md:hover:text-black md:dark:hover:text-white"
      >
        Blog
      </Link>
      <Link
        href="https://youtube.com/@sukhrob-abdullaev"
        target="_blank"
        className="md:hover:scale-[0.9] text-center md:transition-all w-1/2 mx-auto border rounded-sm md:p-0 p-2 active:bg-red-500 hover:bg-zinc-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:text-white"
      >
        YouTube
      </Link>
    </>
  );
};

export default DrawerLinks;
