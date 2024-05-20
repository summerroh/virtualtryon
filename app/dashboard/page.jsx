// "use client";

// import DeleteUserFunction from "@/components/functions/deleteUser";
// import LogoutFunction from "@/components/functions/logout";
// import React from "react";

// export default function Dashboard() {
//   return (
//     <>
//       <div>Dashboard</div>
//       <LogoutFunction />
//       <DeleteUserFunction />
//     </>
//   );
// }

// import { Metadata } from "next";
// import "@/styles/index.scss";
// import "@/public/main.scss";
// import "@/output.css";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AlbumArtwork } from "@/components/album-artwork";
import { Menu } from "@/components/menu";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";

import musicLight from "@/public/examples/music-light.png";
import DragNDrop from "@/components/DragNDrop";

export const metadata = {
  title: "Virtual Fitting Room",
  description: "Example music app using the components.",
};

export default function Dashboard() {
  return (
    <>
      <div className="block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-6">
              <Sidebar className="block" />
              <div className="col-span-3 lg:col-span-5 lg:border-l lg:px-40">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    {/* <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div> */}

                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1 mb-6">
                          <p className="text-sm text-muted-foreground">
                            Step 1/5
                          </p>
                          <h2 className="text-xl font-semibold tracking-tight">
                            Start with a photo of your cloth
                          </h2>
                        </div>
                      </div>
                      <div className="relative">
                        <DragNDrop />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1 mt-6 mb-6">
                          <p className="text-sm text-muted-foreground">
                            Step 1/5
                          </p>
                          <h2 className="text-xl font-semibold tracking-tight">
                            Start with a photo of your cloth
                          </h2>
                        </div>
                      </div>
                      <Card className="w-full bg-black p-6">
                        <Button>Female model</Button>
                        <Button>Male model</Button>
                      </Card>

                      <div className="mt-6 mb-6 space-y-1">
                        <h2 className="text-xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>

                      <div className="space-y-1 mt-6 mb-6">
                        <h2 className="text-xl font-semibold tracking-tight">
                          Listen Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
