"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PhotoLayout } from "@/components/album-artwork";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { layouts, thumbnails } from "@/data/albums";

import DragNDrop from "@/components/DragNDrop";
import { WandSparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useRouter } from "next/navigation";
import { getIdToken } from "@/components/functions/tokenService";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";
// import { categoryData } from "@/data/categoryData";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Dashboard() {
  const router = useRouter();

  const [uploadedFile, setUploadedFile] = useState(null);

  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedClothType, setSelectedClothType] = useState(null);
  const [selectedSleeveType, setSelectedSleeveType] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelData, setModelData] = useState([]);
  const [layoutData, setLayoutData] = useState([]);

  // call category api to get all the categories
  const endpoint =
    "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

  const getCategoryData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${endpoint}/api/v1/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.isSuccess && data.data) {
        setCategoryData(data.data);
        setLoading(false);
      } else {
        console.error("Get category data failed.");
      }
    } catch (error) {
      console.error("Error during get category data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  // api call to get category data end

  const [selectedLayout, setSelectedLayout] = useState(null);

  const getChildCategories = (parentId) => {
    return categoryData.filter(
      (category) => category.ownerCategoryId === parentId
    );
  };

  const genderCategories = categoryData.filter(
    (category) => category.categoryType === "gender_types"
  );

  const clothTypes = selectedGender ? getChildCategories(selectedGender) : [];

  const sleeveTypes = selectedClothType
    ? getChildCategories(selectedClothType)
    : [];

  // Set default values
  useEffect(() => {
    // Set female as default gender
    const femaleGender = genderCategories.find(
      (g) => g.name.toLowerCase() === "female"
    );
    if (femaleGender && !selectedGender) {
      setSelectedGender(femaleGender._id);
    }
  }, [genderCategories]);

  useEffect(() => {
    // Set first cloth type as default
    if (clothTypes.length > 0 && !selectedClothType) {
      setSelectedClothType(clothTypes[0]._id);
    }
  }, [clothTypes]);

  useEffect(() => {
    // Set first sleeve type as default
    if (sleeveTypes.length > 0 && !selectedSleeveType) {
      setSelectedSleeveType(sleeveTypes[0]._id);
    }
  }, [sleeveTypes]);

  const handlePhotoSelect = (id) => {
    setSelectedLayout(id);
  };

  // Category part ends

  // Fashion Model part starts

  const getModelData = async (genderId, clothTypeId, sleeveTypeId) => {
    // call model api to get the model
    // call with gender id, cloth_type id, sleeve_type id
    // setLoading(true);

    try {
      const response = await fetch(
        `${endpoint}/api/v1/fashionmodels?capabilities=${genderId}&${clothTypeId}&${sleeveTypeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.isSuccess && data.data) {
        setModelData(data.data);
        // console.log("model data: ", data.data);
        // for (let item of data.data) {
        //   console.log(item.profileImgURL);
        // }
        // setLoading(false);
      } else {
        console.error("Get model data failed.");
      }
    } catch (error) {
      console.error("Error during get model data:", error);
    }
  };

  const onSleevetypeClick = (sleeveType) => {
    setSelectedSleeveType(sleeveType);
  };

  useEffect(() => {
    // call model api to get the model
    // call with gender id, cloth_type id, sleeve_type id
    if (selectedGender && selectedClothType && selectedSleeveType) {
      getModelData(selectedGender, selectedClothType, selectedSleeveType);
      console.log(selectedGender, selectedClothType, selectedSleeveType);
    }
  }, [selectedGender, selectedSleeveType]);

  useEffect(() => {
    setSelectedClothType(null);
    setSelectedSleeveType(null);
  }, [selectedGender]);
  // Fashion Model part ends

  // Layout part strats

  const getLayoutData = async (sleeveTypeId) => {
    try {
      const response = await fetch(
        `${endpoint}/api/v1/layouts?sleeve_type_id=${sleeveTypeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: getIdToken(),
          },
        }
      );

      const data = await response.json();

      if (data.isSuccess && data.data) {
        setLayoutData(data.data);
        console.log("layout data: ", data.data);
      } else {
        console.error("Get layout data failed.");
      }
    } catch (error) {
      console.error("Error during get layout data:", error);
    }
  };

  useEffect(() => {
    if (selectedSleeveType) {
      getLayoutData(selectedSleeveType);
    }
  }, [selectedSleeveType]);

  // Layout part ends

  // Generate part starts

  const handleGenerate = () => {
    console.log(
      "layout id: ",
      selectedLayout,
      "source img id: ",
      uploadedFile.id
    );
  };

  // Generate part ends

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
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
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
                    <DragNDrop
                      uploadedFile={uploadedFile}
                      setUploadedFile={setUploadedFile}
                    />
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
                    {genderCategories.map((gender) => (
                      <Button
                        key={gender._id}
                        variant="outline"
                        onClick={() => setSelectedGender(gender._id)}
                        className={`w-full h-14 font-bold ${
                          selectedGender === gender._id
                            ? "bg-primary text-white"
                            : "bg-button-background text-dark"
                        }`}
                      >
                        {gender.name.charAt(0).toUpperCase() +
                          gender.name.slice(1)}{" "}
                        model
                      </Button>
                    ))}
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
                        What is your clothing type?
                      </h2>
                    </div>
                  </div>
                  <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                    <Tabs
                      value={
                        clothTypes.find((ct) => ct._id === selectedClothType)
                          ?.name || clothTypes[0]?.name
                      }
                      onValueChange={(value) => {
                        const selectedCloth = clothTypes.find(
                          (cloth) => cloth.name === value
                        );
                        setSelectedClothType(selectedCloth?._id);
                      }}
                    >
                      <TabsList className="mb-3 justify-between py-4 px-4 overflow-x-auto overflow-y-hidden flex flex-row no-scrollbar">
                        {clothTypes.map((clothType) => (
                          <TabsTrigger
                            key={clothType._id}
                            value={clothType.name}
                          >
                            {clothType.name.charAt(0).toUpperCase() +
                              clothType.name.slice(1)}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {clothTypes.map((clothType) => (
                        <TabsContent
                          key={clothType._id}
                          value={clothType.name}
                          className="w-full"
                        >
                          <div className="flex flex-col md:flex-row gap-3">
                            {getChildCategories(clothType._id).map(
                              (sleeveType) => (
                                <Button
                                  key={sleeveType._id}
                                  variant="outline"
                                  onClick={() =>
                                    onSleevetypeClick(sleeveType._id)
                                  }
                                  className={`w-full h-14 font-bold ${
                                    selectedSleeveType === sleeveType._id
                                      ? "bg-primary text-white"
                                      : "bg-button-background text-dark"
                                  }`}
                                >
                                  {sleeveType.name.charAt(0).toUpperCase() +
                                    sleeveType.name.slice(1)}
                                </Button>
                              )
                            )}
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
                          {modelData.map((model) => (
                            <div
                              key={model.name}
                              className={"relative"}
                              onClick={() => setSelectedModel(model.name)}
                            >
                              <PhotoLayout
                                key={model.name}
                                imgUrl={model.profileImgURL}
                                name={model.name}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                                showTitle={true}
                                selected={selectedModel === model.name}
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
                    {/* <Tabs defaultValue="fullbody">
                      <TabsList className="mb-3 justify-between py-4 px-4 overflow-x-auto overflow-y-hidden flex flex-row no-scrollbar">
                        <TabsTrigger value="fullbody">Full body</TabsTrigger>
                        <TabsTrigger value="upperbody">Upper body</TabsTrigger>
                        <TabsTrigger value="lowerbody">Lower body</TabsTrigger>
                      </TabsList>
                      <TabsContent value="fullbody" className="w-full"> */}
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4">
                          {layoutData.map((item, index) => (
                            <div
                              key={item._id}
                              className={"relative"}
                              onClick={() => handlePhotoSelect(item._id)}
                            >
                              <PhotoLayout
                                imgUrl={item.layout_public_img}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                                selected={selectedLayout === item._id}
                              />
                            </div>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                    {/* </TabsContent> */}

                    {/* </Tabs> */}
                  </Card>
                </div>

                {/* <Link href="/dashboard/choose" className="d-block"> */}
                <Button
                  onClick={() => handleGenerate()}
                  className="w-full h-14 font-bold mt-10 mb-4 text-lg"
                  disabled={
                    !uploadedFile ||
                    !selectedGender ||
                    !selectedClothType ||
                    !selectedSleeveType ||
                    !selectedModel ||
                    !selectedLayout
                  }
                >
                  <WandSparkles
                    color={
                      !uploadedFile ||
                      !selectedGender ||
                      !selectedClothType ||
                      !selectedSleeveType ||
                      !selectedModel ||
                      !selectedLayout
                        ? "#9CA3AF"
                        : "#ffffff"
                    }
                    size={"20px"}
                    strokeWidth={2}
                    className="mr-2"
                  />
                  Generate
                </Button>
                {/* </Link> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
