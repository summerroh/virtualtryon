"use client";

import { useEffect, useState } from "react";

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
import { Check, WandSparkles } from "lucide-react";
import Link from "next/link";

import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
// use redirect if possible
import { redirect, useRouter } from "next/navigation";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [gender, setGender] = useState("female");
  const [clothType, setClothType] = useState("shortsleeves");
  const [model, setModel] = useState("");

  const [selectedLayouts, setSelectedLayouts] = useState([
    { layout: "fullbody", selected: [] },
    { layout: "upperbody", selected: [] },
    { layout: "lowerbody", selected: [] },
  ]);

  // useEffect(() => {
  //   // Only access sessionStorage if running in the browser
  //   if (typeof window !== "undefined") {
  //     const userSession = sessionStorage.getItem("user");
  //     // 로그인 안되어 있으면 메인 페이지로 이동
  //     if (!user && !userSession) {
  //       router.push("/");
  //     }
  //   }
  // }, [user, router]);

  const handlePhotoSelect = (layout, index) => {
    setSelectedLayouts((prev) => {
      return prev.map((item) => {
        if (item.layout === layout) {
          if (item.selected.includes(index)) {
            return {
              ...item,
              selected: item.selected.filter((i) => i !== index),
            };
          } else {
            return { ...item, selected: [...item.selected, index] };
          }
        } else {
          return item;
        }
      });
    });
  };

  if (!user) {
    return redirect("/");
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <Sidebar className="w-2/12 hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div className="col-span-3 lg:col-span-5 lg:border-l px-10 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
          {/* HF test */}
          {/* <HFbutton /> */}
          {/* <VtonButton /> */}

          {/* Step 1 */}
          <div className="pt-12">
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
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
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
                  onClick={() => setGender("female")}
                  className={`w-full h-14 font-bold ${
                    gender === "female"
                      ? "bg-primary text-white"
                      : "bg-button-background text-dark"
                  }`}
                >
                  Female model
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setGender("male")}
                  className={`w-full h-14 font-bold  ${
                    gender === "male"
                      ? "bg-primary text-white"
                      : "bg-button-background text-dark"
                  }`}
                >
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
                <Tabs defaultValue="shirt" className="w-full">
                  <TabsList className="mb-3 w-full flex flex-row justify-between px-20 py-4">
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
                        onClick={() => setClothType("shortsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "shortsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Short sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("longsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "longsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Long sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("sleevleess")}
                        className={`w-full h-14 font-bold ${
                          clothType === "sleevleess"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        sleevleess
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="croptop">
                    <div className="flex flex-row gap-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setClothType("shortsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "shortsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Short sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("longsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "longsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Long sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("sleevleess")}
                        className={`w-full h-14 font-bold ${
                          clothType === "sleevleess"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        sleevleess
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="pants">
                    <div className="flex flex-row gap-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setClothType("Shorts")}
                        className={`w-full h-14 font-bold ${
                          clothType === "Shorts"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Shorts
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("longpants")}
                        className={`w-full h-14 font-bold ${
                          clothType === "longpants"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Long pants
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="jacket">
                    <div className="flex flex-row gap-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setClothType("shortsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "shortsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Short sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("longsleeves")}
                        className={`w-full h-14 font-bold ${
                          clothType === "longsleeves"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Long sleeves
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("sleevleess")}
                        className={`w-full h-14 font-bold ${
                          clothType === "sleevleess"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        sleevleess
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="dress">
                    <div className="flex flex-row gap-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setClothType("minidress")}
                        className={`w-full h-14 font-bold ${
                          clothType === "minidress"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Mini dress
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("mididress")}
                        className={`w-full h-14 font-bold ${
                          clothType === "mididress"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        Midi dress
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setClothType("maxidress")}
                        className={`w-full h-14 font-bold ${
                          clothType === "maxidress"
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
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
              <div className="mt-6 mb-6 pt-6 space-y-1">
                <p className="text-sm text-muted-foreground font-bold">
                  Step 4/5
                </p>
                <h2 className="text-xl font-bold tracking-tight">
                  Choose your fashion model
                </h2>
              </div>
              <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {thumbnails.map((album) => (
                        <div
                          key={album.name}
                          className={"relative"}
                          onClick={() => setModel(album.name)}
                        >
                          <PhotoLayout
                            key={album.name}
                            album={album}
                            className="w-[150px]"
                            aspectRatio="square"
                            width={150}
                            height={150}
                            showTitle={true}
                            selected={model === album.name}
                          />
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </Card>
            </div>

            {/* Step 5 */}
            <div>
              <div className="flex items-center justify-between">
                <div className="space-y-1 mt-6 mb-6">
                  <p className="text-sm text-muted-foreground font-bold">
                    Step 5/5
                  </p>
                  <h2 className="text-xl font-bold tracking-tight">
                    Choose photo layouts
                  </h2>
                </div>
              </div>
              <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                <Tabs defaultValue="fullbody" className="w-full">
                  <TabsList className="mb-3 w-full flex flex-row justify-between px-20 py-4">
                    <TabsTrigger value="fullbody">Full body</TabsTrigger>
                    <TabsTrigger value="upperbody">Upper body</TabsTrigger>
                    <TabsTrigger value="lowerbody">Lower body</TabsTrigger>
                  </TabsList>
                  <TabsContent value="fullbody" className="w-full">
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {layouts.fullbody.map((album, index) => (
                            <div
                              key={index}
                              className={"relative"}
                              onClick={() =>
                                handlePhotoSelect("fullbody", index)
                              }
                            >
                              <PhotoLayout
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                                selected={selectedLayouts.some(
                                  (item) =>
                                    item.layout === "fullbody" &&
                                    item.selected.includes(index)
                                )}
                              />
                            </div>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent value="upperbody">
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {layouts.upperbody.map((album, index) => (
                            <div
                              key={index}
                              className={"relative"}
                              onClick={() =>
                                handlePhotoSelect("upperbody", index)
                              }
                            >
                              <PhotoLayout
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                                selected={selectedLayouts.some(
                                  (item) =>
                                    item.layout === "upperbody" &&
                                    item.selected.includes(index)
                                )}
                              />
                            </div>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent value="lowerbody">
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {layouts.lowerbody.map((album, index) => (
                            <div
                              key={index}
                              className={"relative"}
                              onClick={() =>
                                handlePhotoSelect("lowerbody", index)
                              }
                            >
                              <PhotoLayout
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                                selected={selectedLayouts.some(
                                  (item) =>
                                    item.layout === "lowerbody" &&
                                    item.selected.includes(index)
                                )}
                              />
                            </div>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            <Link href="/dashboard/choose" className="d-block">
              <Button className="w-full h-14 font-bold mt-10 mb-4 text-lg">
                <WandSparkles
                  color={"#ffffff"}
                  size={"20px"}
                  strokeWidth={2}
                  className="mr-2"
                />
                Generate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
