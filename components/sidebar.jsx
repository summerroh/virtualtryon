"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Images, Settings, Sparkles, User } from "lucide-react";

export function Sidebar({ className }) {
  const pathname = usePathname();

  return (
    <div className={cn("overflow-y-auto", className)}>
      <ScrollArea>
        <div className="flex justify-between flex-col h-dvh px-1">
          <div className="space-y-4 py-4">
            <Link href="/" className="d-block">
              <h2 className="mb-2 px-4 text-lg font-medium tracking-tight font-recoleta">
                Virtual Try On
              </h2>
            </Link>

            <div className="py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Create
              </h2>
              <div className="space-y-1 px-2">
                <Link href="/dashboard" className="d-block">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      [
                        "/dashboard",
                        "/choose",
                        "/final",
                        "/dashboard/choose",
                        "/dashboard/final",
                      ].includes(pathname)
                        ? "bg-background-dashboard text-primary font-semibold"
                        : ""
                    }`}
                  >
                    <Sparkles
                      className={`mr-2 ${
                        [
                          "/dashboard",
                          "/choose",
                          "/final",
                          "/dashboard/choose",
                          "/dashboard/final",
                        ].includes(pathname)
                          ? "text-primary"
                          : "text-black"
                      }`}
                      strokeWidth={
                        [
                          "/dashboard",
                          "/choose",
                          "/final",
                          "/dashboard/choose",
                          "/dashboard/final",
                        ].includes(pathname)
                          ? 2
                          : 1.5
                      }
                      size={"20px"}
                    />
                    Model Images
                  </Button>
                </Link>
              </div>
            </div>
            <div className="py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Library
              </h2>
              <div className="space-y-1 px-2">
                <Link href="/dashboard/mycreations" className="d-block">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      pathname === "/dashboard/mycreations"
                        ? "bg-background-dashboard text-primary font-semibold"
                        : ""
                    }`}
                  >
                    <Images
                      className={`mr-2 ${
                        pathname === "/dashboard/mycreations"
                          ? "text-primary"
                          : "text-black"
                      }`}
                      strokeWidth={
                        pathname === "/dashboard/mycreations" ? 2 : 1.5
                      }
                      size={"20px"}
                    />
                    My Creations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 pb-4">
            {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Account
            </h2> */}
            <div className="space-y-1 px-2">
              <Link href="/dashboard/user" className="d-block">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    pathname === "/dashboard/user"
                      ? "bg-background-dashboard text-primary font-semibold"
                      : ""
                  }`}
                >
                  <User
                    className={`mr-2 ${
                      pathname === "/dashboard/user"
                        ? "text-primary"
                        : "text-black"
                    }`}
                    strokeWidth={pathname === "/dashboard/user" ? 2 : 1.5}
                    size={"20px"}
                  />
                  {/* <Settings
                        color={"#000000"}
                        size={"20px"}
                        strokeWidth={1.5}
                        className="mr-2"
                      /> */}
                  My Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
