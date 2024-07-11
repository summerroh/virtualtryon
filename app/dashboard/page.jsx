"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PhotoLayout } from "@/components/album-artwork";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { layouts, thumbnails } from "@/data/albums";

import DragNDrop from "@/components/DragNDrop";
import { WandSparkles } from "lucide-react";
import Link from "next/link";

// use redirect if possible
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useRouter } from "next/navigation";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";

const headerHeight = "pt-[70px] lg:pt-0";

const categories = [
  {
    name: "top",
    options: [
      { value: "shortsleeves", label: "Short sleeves" },
      { value: "longsleeves", label: "Long sleeves" },
      { value: "sleeveless", label: "Sleeveless" },
    ],
  },
  {
    name: "croptop",
    options: [
      { value: "shortsleeves", label: "Short sleeves" },
      { value: "longsleeves", label: "Long sleeves" },
      { value: "sleeveless", label: "Sleeveless" },
    ],
  },
  {
    name: "pants",
    options: [
      { value: "shorts", label: "Shorts" },
      { value: "croppedpants", label: "Cropped Pants" },
      { value: "longpants", label: "Long pants" },
    ],
  },
  {
    name: "jacket",
    options: [
      { value: "shortsleeves", label: "Short sleeves" },
      { value: "longsleeves", label: "Long sleeves" },
      { value: "sleeveless", label: "Sleeveless" },
    ],
  },
  {
    name: "skirts",
    options: [
      { value: "miniskirt", label: "Mini skirt (25-40cm)" },
      { value: "midiskirt", label: "Midi skirt (50-70cm)" },
      { value: "maxiskirt", label: "Maxi skirt (80-100cm)" },
    ],
  },
  {
    name: "dress",
    options: [
      { value: "minidress", label: "Mini dress (75-89cm)" },
      { value: "mididress", label: "Midi dress (90-115cm)" },
      { value: "maxidress", label: "Maxi dress (120-160cm)" },
    ],
  },
];

export default function Dashboard() {
  const router = useRouter();

  const [gender, setGender] = useState("female");
  const [clothType, setClothType] = useState("shortsleeves");
  const [model, setModel] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [selectedLayouts, setSelectedLayouts] = useState([
    { layout: "fullbody", selected: [] },
    { layout: "upperbody", selected: [] },
    { layout: "lowerbody", selected: [] },
  ]);

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

  return (
    <>
      <div className="block lg:hidden">
        <DashboardHeader />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-dvh">
        <Sidebar className="w-[400px] hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div
          className={`col-span-3 lg:col-span-5 lg:border-l px-6 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full flex flex-col overflow-y-auto ${headerHeight}`}
        >
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
                    Start with a photo of your clothes
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
              <Card className="w-full p-6 flex flex-col md:flex-row justify-between gap-3">
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
                    what is your clothing type?
                  </h2>
                </div>
              </div>
              <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                <Tabs defaultValue="top">
                  <TabsList className="mb-3 justify-between py-4 px-4 overflow-x-auto overflow-y-hidden flex flex-row no-scrollbar">
                    {categories.map((category) => (
                      <TabsTrigger key={category.name} value={category.name}>
                        {category.name.charAt(0).toUpperCase() +
                          category.name.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {categories.map((category) => (
                    <TabsContent
                      key={category.name}
                      value={category.name}
                      className="w-full"
                    >
                      <div className="flex flex-col md:flex-row gap-3">
                        {category.options.map((option) => (
                          <Button
                            key={option.value}
                            variant="outline"
                            onClick={() => setClothType(option.value)}
                            className={`w-full h-14 font-bold ${
                              clothType === option.value
                                ? "bg-primary text-white"
                                : "bg-button-background text-dark"
                            }`}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
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
                <Tabs defaultValue="fullbody">
                  <TabsList className="mb-3 justify-between py-4 px-4 overflow-x-auto overflow-y-hidden flex flex-row no-scrollbar">
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
