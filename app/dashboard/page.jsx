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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PhotoLayout } from "@/components/album-artwork";
import { Menu } from "@/components/menu";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { layouts, thumbnails } from "@/data/albums";

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
              <div className="col-span-3 lg:col-span-5 lg:border-l lg:px-40 bg-background-dashboard pt-4">
                <div className="h-full px-4 py-6 lg:px-8 space-y-6">
                  {/* Step 1 */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 mb-6">
                        <p className="text-sm text-muted-foreground font-bold">
                          Step 1/5
                        </p>
                        <h2 className="text-xl font-bold tracking-tight">
                          Start with a photo of your cloth
                        </h2>
                      </div>
                    </div>
                    <div className="relative">
                      <DragNDrop />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 mt-6 mb-6">
                        <p className="text-sm text-muted-foreground font-bold">
                          Step 2/5
                        </p>
                        <h2 className="text-xl font-bold tracking-tight">
                          Choose the gender of your model
                        </h2>
                      </div>
                    </div>
                    <Card className="w-full p-6 flex justify-between gap-x-4">
                      <Button
                        variant="outline"
                        className="w-full h-14 bg-button-background font-bold"
                      >
                        Female model
                      </Button>
                      <Button className="w-full h-14 font-bold">
                        Male model
                      </Button>
                    </Card>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 mt-6 mb-6">
                        <p className="text-sm text-muted-foreground font-bold">
                          Step 3/5
                        </p>
                        <h2 className="text-xl font-bold tracking-tight">
                          what is your clothes type?
                        </h2>
                      </div>
                    </div>
                    <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                      <Tabs defaultValue="account" className="w-full">
                        <TabsList className="mb-3 w-full">
                          <TabsTrigger value="shirt">Shirt</TabsTrigger>
                          <TabsTrigger value="croptop">Crop Top</TabsTrigger>
                          <TabsTrigger value="pants">Pants</TabsTrigger>
                          <TabsTrigger value="jacket">Jacket</TabsTrigger>
                          <TabsTrigger value="dress">Dress</TabsTrigger>
                        </TabsList>
                        <TabsContent value="shirt" className="w-full">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Short sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Long sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              sleevleess
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="croptop">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Short sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Long sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              sleevleess
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="pants">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Shorts
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Long pants
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="jacket">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Short sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Long sleeves
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              sleevleess
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="dress">
                          <div className="flex flex-row gap-x-4">
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Mini dress
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Midi dress
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full h-14 bg-button-background font-bold"
                            >
                              Maxi dress
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </Card>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <div className="mt-6 mb-6 space-y-1">
                      <p className="text-sm text-muted-foreground font-bold">
                        Step 4/5
                      </p>
                      <h2 className="text-xl font-bold tracking-tight">
                        Choose your fashion model
                      </h2>
                    </div>
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {thumbnails.map((album) => (
                            <PhotoLayout
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
                  </div>

                  {/* Step 5 */}
                  <div>
                    <div className="space-y-1 mt-6 mb-6">
                      <p className="text-sm text-muted-foreground font-bold">
                        Step 5/5
                      </p>
                      <h2 className="text-xl font-bold tracking-tight">
                        Choose photo layouts
                      </h2>
                    </div>
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {layouts.map((album) => (
                            <PhotoLayout
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
