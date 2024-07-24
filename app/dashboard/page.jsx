// TODO: add a refresh token logic for get layout api call -> implemented. check if works
//and generate api call
// TODO: implement generate api call. implement a way to poke the server every 10 seconds to check if the generate is done

"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PhotoLayout } from "@/components/album-artwork";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";

import DragNDrop from "@/components/DragNDrop";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  getIdToken,
  refreshIdToken,
} from "@/components/functions/tokenService";
import { Check, Loader2, WandSparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import LoadingModal from "@/components/modal/LoadingModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";
// import { categoryData } from "@/data/categoryData";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Dashboard() {
  const router = useRouter();

  const [uploadedFile, setUploadedFile] = useState(null);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedClothType, setSelectedClothType] = useState(null);
  const [selectedSleeveType, setSelectedSleeveType] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelData, setModelData] = useState([]);
  const [layoutData, setLayoutData] = useState([]);
  const [creationStatus, setCreationStatus] = useState(null);
  const [resultImage, setResultImage] = useState(null);

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
    if (genderCategories.length > 0 && !selectedGender) {
      setSelectedGender(genderCategories[0]._id);
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
      const token = getIdToken();
      const response = await fetch(
        `${endpoint}/api/v1/layouts?sleeve_type_id=${sleeveTypeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      if (response.status === 401) {
        const newToken = await refreshIdToken();
        if (newToken) {
          // Assuming refreshIdToken updates the token storage
          return getLayoutData(sleeveTypeId);
        } else {
          throw new Error("Failed to refresh token");
        }
      }

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

  const createCreations = async (selectedLayout, uploadedFileId) => {
    setLoading(true);
    // setError(null);

    try {
      const response = await fetch(`${endpoint}/api/v1/creations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: getIdToken(),
        },
        body: JSON.stringify({
          layout_id: selectedLayout,
          source_img_id: uploadedFileId,
        }),
      });

      // refresh token if idToken is expired
      if (response.status === 401) {
        const newToken = await refreshIdToken();
        if (newToken) {
          return createCreations(selectedLayout, uploadedFileId); // Retry with new token
        } else {
          throw new Error("Failed to refresh token");
        }
      }

      const data = await response.json();

      if (data.isSuccess && data.data) {
        console.log("Creation request is sent successfully");
        setLoading(false);

        let creationId = data.data._id;
        pollCreationStatus(creationId);
        return creationId;
      } else {
        // setError("Creation request failed. Please try again.");
      }
    } catch (error) {
      console.log("Error during creation request:", error);
      // setError("An error occurred during creation request");
    } finally {
      setLoading(false);
    }
  };

  const pollCreationStatus = async (creationId) => {
    const checkStatus = async () => {
      console.log("checking status. . .");
      try {
        const response = await fetch(
          `${endpoint}/api/v1/creations/${creationId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: getIdToken(),
            },
          }
        );

        if (response.status === 401) {
          const newToken = await refreshIdToken();
          if (newToken) {
            return checkStatus(); // Retry with new token
          } else {
            throw new Error("Failed to refresh token");
          }
        }

        const data = await response.json();

        if (data.isSuccess && data.data) {
          setCreationStatus(data.data.status);

          // 이미지 생성 성공시 (success)
          if (data.data.status === "success") {
            setResultImage(data.data.public_img);
            setShowLoadingModal(false);
            router.push(
              `/dashboard/choose?resultImage=${encodeURIComponent(
                data.data.public_img
              )}`
            );
            console.log("Creation completed successfully");

            // 이미지 생성 실패시 (failed)
          } else if (data.data.status === "failed") {
            alert("Image generation failed, please try again");
            setShowLoadingModal(false);
            console.error("Creation failed");

            // 이미지 생성중 (pending)
          } else {
            // If status is not "success" or "failed", continue polling
            setTimeout(checkStatus, 15000); // Check again after 15 seconds
          }
        } else {
          console.error("Failed to get creation status");
        }
      } catch (error) {
        console.error("Error checking creation status:", error);
      }
    };

    checkStatus(); // Start polling
  };

  const handleGenerate = () => {
    setShowLoadingModal(true);
    createCreations(selectedLayout, uploadedFile.id);
  };

  // Generate part ends

  return (
    <>
      <LoadingModal
        showModal={showLoadingModal}
        setShowModal={setShowLoadingModal}
      />

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
                <div className="w-full">
                  <div className="flex items-start justify-between flex-col space-y-1 mb-6">
                    <p className="text-sm text-muted-foreground font-bold">
                      Step 1/5
                    </p>
                    <div className="flex items-center justify-between flex-row w-full">
                      <h2 className="text-xl font-bold tracking-tight">
                        Start with a photo of your clothes
                      </h2>

                      <ImageGuide />
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

                {resultImage && <img src={resultImage} alt="result" />}

                <Button onClick={() => setShowLoadingModal(true)}>
                  Show Loading Modal
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const ImageGuide = () => {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-sm text-gray-600 font-bold text-primary underline cursor-pointer">
        Image upload guide
      </HoverCardTrigger>

      <HoverCardContent className="w-96 p-0">
        <div className="flex flex-col space-y-4 p-3">
          <div className="flex bg-green-light border border-[#CFDFCF] p-4 rounded-lg">
            <div className="flex-1 pr-4">
              <h3 className="font-bold mb-1 text-green">Best results with</h3>

              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-green" />
                <p className="text-sm text-green">Clean White background</p>
              </div>
            </div>
            <div className="flex-1 flex space-x-2">
              <img
                src="/images/dashboard/good-01.png"
                alt="Good photo example 1"
                className="w-1/2 h-auto object-cover rounded"
              />
              <img
                src="/images/dashboard/good-02.png"
                alt="Good photo example 2"
                className="w-1/2 h-auto object-cover rounded"
              />
            </div>
          </div>
          <div className="flex bg-[#FAF0F0] border border-[#F7D0D0] p-4 rounded-lg">
            <div className="flex-1 pr-4">
              <h3 className="font-bold mb-1">Bad Photo Example</h3>
              <p className="text-sm text-gray-600">Blurry, dark, or wrinkled</p>
            </div>
            <div className="flex-1 flex space-x-2">
              <img
                src="/images/dashboard/bad-01.png"
                alt="Bad photo example 1"
                className="w-1/2 h-auto object-cover rounded"
              />
              <img
                src="/images/dashboard/bad-02.png"
                alt="Bad photo example 2"
                className="w-1/2 h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
