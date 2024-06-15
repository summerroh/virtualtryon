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
        <MenuIcon color={isScrolling ? "#151515" : "#ffffff"} />
      </DrawerTrigger>
      <DrawerContent className="z-50">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              {navItems
                .filter((navItem) => !navItem.loggedIn || user)
                .map((navItem, i) => (
                  <li key={i} className="nav-item">
                    <a
                      className={`nav-link ${
                        activeLink === i ? "active" : ""
                      } ${scrollingStarted ? "scrolling" : ""}`}
                      href={navItem.href}
                      onClick={() => setActiveLink(i)}
                    >
                      {navItem.title}
                    </a>
                  </li>
                ))}
            </div>
            <div className="mt-3 h-[120px]">hellow</div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
