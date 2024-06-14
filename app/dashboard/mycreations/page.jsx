import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sidebar } from "@/components/sidebar";
import { albums } from "@/data/albums";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata = {
  title: "Virtual Fitting Room",
  description: "Example music app using the components.",
};

export default function Page() {
  // if not logged in, redirect to home page
  if (!user) {
    return redirect("/");
  }

  return (
    <>
      <div className="bg-background overflow-x-hidden">
        <div className="flex flex-col lg:flex-row w-full h-screen">
          <Sidebar className="w-2/12 hidden lg:block h-full lg:h-auto lg:overflow-hidden min-w-20" />
          <div className="col-span-3 lg:col-span-5 lg:border-l px-4 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
            <div className="space-y-1 mt-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center text-left">
              <h2 className="text-xl font-bold tracking-tight">My Creations</h2>

              <ScrollArea className="overflow-x-auto w-full sm:w-auto">
                <Tabs defaultValue="account" className="">
                  <TabsList className="mb-3 flex flex-row md:flex-nowrap space-x-4">
                    <TabsTrigger value="shirt">Shirt</TabsTrigger>
                    <TabsTrigger value="croptop">Crop Top</TabsTrigger>
                    <TabsTrigger value="pants">Pants</TabsTrigger>
                    <TabsTrigger value="jacket">Jacket</TabsTrigger>
                    <TabsTrigger value="dress">Dress</TabsTrigger>
                  </TabsList>
                </Tabs>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <PhotoLayout
                  key={index}
                  album={albums[0]}
                  className=""
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PhotoLayout({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[3/4] overflow-hidden rounded-md",
        className
      )}
      {...props}
    >
      <Image
        src={album.cover}
        alt={album.name}
        layout="fill"
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
      />
    </div>
  );
}
