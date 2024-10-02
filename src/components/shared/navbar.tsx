"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Theme } from "../ui/theme";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import MobileDrawer from "./mobile-drawer";
import DrawerLinks from "./drawer-link";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      console.log("Drawer is close");
    }
  }, [open]);

  return (
    <div className="p-3 fixed z-50 top-0 right-0 left-0 w-full transition-all  backdrop-blur-sm">
      <div className="flex items-center justify-between md:max-w-[800px] mx-auto ">
        <Link href="/" className={cn("font-semibold md:text-lg text-md flex items-center gap-2")}>
          Sukhrob's blog
        </Link>
        <div className="flex items-center">
          <div className="flex space-x-2 items-center">
            <Link
              href="https://www.linkedin.com/in/sukhrob-abdullaev"
              target="_blank"
              className="hover:scale-[1.2] transition-all"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/sukhrobabdullaev"
              target="_blank"
              className="hover:scale-[1.2] transition-all"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/sukhrob_abdullaev_"
              target="_blank"
              className="hover:scale-[1.2] transition-all"
            >
              <InstagramLogoIcon className="w-5 h-5 dark:hover:text-white" />
            </Link>
            <div className="md:flex md:items-center md:space-x-2   hidden">
              <DrawerLinks setOpen={setOpen} open={open} />
              <Theme />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Theme />
              <MobileDrawer setOpen={setOpen} open={open} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
