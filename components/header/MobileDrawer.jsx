import React, { useEffect, useState } from "react";
import { Menu, MenuIcon, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sidebar } from "../sidebar";

const navItems = [
  { title: "Services", href: "#services", loggedIn: false },
  { title: "Pricing", href: "#pricing", loggedIn: false },
  { title: "FAQ", href: "#faq", loggedIn: false },
  // { title: "Dashboard", href: "#s5", loggedIn: true },
];

export function MobileDrawer({ user, isScrolling }) {
  const [activeLink, setActiveLink] = useState(0);
  const [scrollingStarted, setScrollingStarted] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollingStarted(true);
      } else {
        setScrollingStarted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {/* Hanberger icon */}
        {/* <MenuIcon color={isScrolling ? "#151515" : "#ffffff"} /> */}
        <MenuIcon color="#151515" />
      </DrawerTrigger>
      <DrawerContent className="z-50">
        <div className="mx-auto w-[400px] max-w-sm">
          <Sidebar className="w-full block lg:hidden h-full lg:h-auto lg:overflow-hidden" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
