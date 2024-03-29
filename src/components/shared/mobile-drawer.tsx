"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuSquare } from "lucide-react";
import DrawerLinks from "./drawer-link";
import "./animation.css";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileDrawer: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <MenuSquare
          className="w-4 h-4"
          style={{
            animation: "scaleAnimation 1s infinite alternate",
            transformOrigin: "center",
          }}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerLinks setOpen={setOpen} open={open} />
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <DoubleArrowDownIcon className="w-5 h-5 max-w-full mx-auto animate-scale-y" />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
