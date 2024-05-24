"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Images, Settings, Sparkles } from "lucide-react";

export function Sidebar({ className, playlists }) {
  const pathname = usePathname();

  return (
    <div className={cn("overflow-y-auto", className)}>
      <ScrollArea>
        <div className="flex justify-between flex-col h-screen px-1">
          <div className="space-y-4 py-4">
            <div className="py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Create
              </h2>
              <div className="space-y-1 px-2">
                <Link href="/dashboard" className="d-block">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      pathname === "/dashboard" ? "bg-background-dashboard" : ""
                    }`}
                  >
                    <Sparkles
                      color={"#000000"}
                      size={"20px"}
                      strokeWidth={1.5}
                      className="mr-2"
                    />
                    Model images
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
                        ? "bg-background-dashboard"
                        : ""
                    }`}
                  >
                    <Images
                      color={"#000000"}
                      size={"20px"}
                      strokeWidth={1.5}
                      className="mr-2"
                    />
                    My Creations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 pb-4">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Account
            </h2>
            <div className="space-y-1 px-2">
              {/* <Link href="/dashboard" className="d-block"> */}
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  pathname === "/dashboard/settings"
                    ? "bg-background-dashboard"
                    : ""
                }`}
              >
                <Settings
                  color={"#000000"}
                  size={"20px"}
                  strokeWidth={1.5}
                  className="mr-2"
                />
                Settings
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
