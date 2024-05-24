import Image from "next/image";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sidebar } from "@/components/sidebar";
import { layouts } from "@/data/albums";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "Virtual Fitting Room",
  description: "Example music app using the components.",
};

export default function Page() {
  return (
    <>
      <div className="bg-background">
        <div className="flex flex-col lg:flex-row w-full h-screen">
          <Sidebar className="w-2/12 xs:hidden h-full lg:h-auto lg:overflow-hidden" />
          <div className="col-span-3 lg:col-span-5 lg:border-l px-10 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
            <div className="space-y-1 mt-6 mb-6 flex flex-row justify-between items-center">
              <h2 className="text-xl font-bold tracking-tight">My Creations</h2>

              <Tabs defaultValue="account" className="">
                <TabsList className="mb-3 flex flex-row justify-between px-0 py-4">
                  <TabsTrigger value="shirt">Shirt</TabsTrigger>
                  <TabsTrigger value="croptop">Crop Top</TabsTrigger>
                  <TabsTrigger value="pants">Pants</TabsTrigger>
                  <TabsTrigger value="jacket">Jacket</TabsTrigger>
                  <TabsTrigger value="dress">Dress</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="shirt" className="w-full">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Short sleeves
                            </Button>
                          </div>
                        </TabsContent> */}
              </Tabs>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <PhotoLayout
                  key={index}
                  album={layouts[0]}
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
        "relative  w-[250px] h-[330px] overflow-hidden rounded-md",
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
