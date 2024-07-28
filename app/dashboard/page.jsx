// TODO: add a refresh token logic for get layout api call -> implemented. check if works and generate api call
// TODO: implement generate api call. implement a way to poke the server every 10 seconds to check if the generate is done

"use client";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";
// import { categoryData } from "@/data/categoryData";

import { useEffect, useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import useApi from '@/lib/hooks/useApi';

// UI Components
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Custom Components
import { PhotoLayout } from "@/components/album-artwork";
import { Sidebar } from "@/components/sidebar";
import DragNDrop from "@/components/DragNDrop";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import LoadingModal from "@/components/modal/LoadingModal";

// Icons
import { Check, Loader2, WandSparkles, HelpCircle } from "lucide-react";

// Constants
const headerHeight = "pt-[70px] lg:pt-0";
const endpoint = "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";



// ===============================  MEMOIZED COMPONENTS ===============================

const GenderButton = memo(({ gender, isSelected, onClick, onReset }) => (
  <Button
    variant="outline"
    onClick={() => {
      onClick(gender._id);
      onReset(); // Call the reset function passed as a prop
    }}
    className={`w-full h-14 font-bold ${
      isSelected ? "bg-primary text-white" : "bg-button-background text-dark"
    }`}
  >
    {gender.name.charAt(0).toUpperCase() + gender.name.slice(1)} model
  </Button>
));
const ClothTypeButton = memo(({ clothType, isSelected, onClick }) => (
  <TabsTrigger
    value={clothType.name}
    className={isSelected ? "bg-primary text-white" : ""}
  >
    {clothType.name.charAt(0).toUpperCase() + clothType.name.slice(1)}
  </TabsTrigger>
));
const SleeveTypeButton = memo(({ sleeveType, isSelected, onClick }) => (
  <Button
    variant="outline"
    onClick={() => onClick(sleeveType._id)}
    className={`w-full h-14 font-bold ${
      isSelected ? "bg-primary text-white" : "bg-button-background text-dark"
    }`}
  >
    {sleeveType.name.charAt(0).toUpperCase() + sleeveType.name.slice(1)}
  </Button>
));
const ModelItem = memo(({ model, isSelected, onSelect }) => (
  <div className="relative" onClick={() => onSelect(model.name)}>
    <PhotoLayout
      imgUrl={model.profileImgURL}
      name={model.name}
      className="w-[150px]"
      aspectRatio="square"
      width={150}
      height={150}
      showTitle={true}
      selected={isSelected}
    />
  </div>
));

// ===============================  DASHBOARD COMPONENT ===============================

export default function Dashboard() {
  const router = useRouter();
  const { isLoading, apiError, callApi } = useApi();
  const MemoizedPhotoLayout = memo(PhotoLayout);

  // State variables
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedClothType, setSelectedClothType] = useState(null);
  const [selectedSleeveType, setSelectedSleeveType] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [layoutData, setLayoutData] = useState([]);
  const [creationStatus, setCreationStatus] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [showLoadingIndicators, setShowLoadingIndicators] = useState(false);
  const [isLoadingModels, setIsLoadingModels] = useState(false);
  const [isLoadingLayouts, setIsLoadingLayouts] = useState(false);
  const [isLoadingLayoutImages, setIsLoadingLayoutImages] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(null);

  // ========== API calls ==========

  const fetchCategoryData = useCallback(() => {
    callApi(`${endpoint}/api/v1/categories`)
      .then(data => {
        setCategoryData(data);
      })
      .catch(error => {
        console.error("Error during get category data:", error);
      });
  }, [callApi]);
  
  const fetchModelData = useCallback((genderId, clothTypeId, sleeveTypeId) => {
    setIsLoadingModels(true);
    return callApi(`${endpoint}/api/v1/fashionmodels?capabilities=${genderId}&${clothTypeId}&${sleeveTypeId}`)
      .then(data => {
        setIsLoadingModels(false);
        return data;
      })
      .catch(error => {
        console.error("Error during get model data:", error);
        setIsLoadingModels(false);
        return [];
      });
  }, [callApi]);

  const fetchLayoutData = useCallback((sleeveTypeId) => {
    setIsLoadingLayoutImages(true);
    const url = sleeveTypeId 
      ? `${endpoint}/api/v1/layouts?sleeve_type_id=${sleeveTypeId}`
      : `${endpoint}/api/v1/layouts`;
    
    return callApi(url, 'GET', null, true)
      .then(data => {
        setLayoutData(data);
        console.log("layout data: ", data);
        return data; // Return the data
      })
      .catch(error => {
        console.error("Error during get layout data:", error);
        throw error; // Re-throw the error
      })
      .finally(() => {
        setIsLoadingLayoutImages(false);
      });
  }, [callApi]);
  
  const createCreation = useCallback((selectedLayout, uploadedFileId) => {
    return callApi(`${endpoint}/api/v1/creations`, 'POST', {
      layout_id: selectedLayout,
      source_img_id: uploadedFileId,
    }, true)
      .then(data => {
        console.log("Creation request is sent successfully");
        return data._id;
      })
      .catch(error => {
        console.log("Error during creation request:", error);
        throw error;
      });
  }, [callApi]);
  
  const checkCreationStatus = useCallback((creationId) => {
    return callApi(`${endpoint}/api/v1/creations/${creationId}`, 'GET', null, true)
      .then(data => {
        setCreationStatus(data.status);
        return data;
      })
      .catch(error => {
        console.error("Error checking creation status:", error);
        throw error;
      });
  }, [callApi]);

  // ========== Helper functions ==========

  const getChildCategories = (parentId) => {
    return categoryData.filter(
      (category) => category.ownerCategoryId === parentId
    );
  };

  const handlePhotoSelect = useCallback((id) => {
    setSelectedLayout(prev => prev === id ? null : id);
  }, []);

  const onSleevetypeClick = (sleeveType) => {
    setSelectedSleeveType(sleeveType);
    setSelectedModel(""); // Reset selected model
  };

  // ========== Data fetching functions ==========

  const getCategoryData = () => {
    fetchCategoryData();
  };

  useEffect(() => {
    getCategoryData();
  }, [fetchCategoryData]);

  const getModelData = (genderId, clothTypeId, sleeveTypeId) => {
    fetchModelData(genderId, clothTypeId, sleeveTypeId)
      .then(data => {
        setModelData(data);
        if (data.length > 0) {
          setSelectedModel(data[0].name);
        } else {
          setSelectedModel("");
        }
      })
      .finally(() => {
        setIsLoadingModels(false);
      });
  };

  const getLayoutData = (sleeveTypeId) => {
    fetchLayoutData(sleeveTypeId)
      .catch(error => {
        // Handle any errors here if needed
        console.error("Error in getLayoutData:", error);
      });
  };

  // ========== Creation and status polling ==========

  const createCreations = async (selectedLayout, uploadedFileId) => {
    try {
      const creationId = await createCreation(selectedLayout, uploadedFileId);
      pollCreationStatus(creationId);
      return creationId;
    } catch (error) {
      console.log("Error during creation request:", error);
    }
  };

  const pollCreationStatus = async (creationId) => {
    const pollInterval = 15000; // 15 seconds
    const checkStatus = async () => {
      try {
        const data = await checkCreationStatus(creationId);
        switch(data.status) {
          case "success":
            setResultImage(data.public_img);
            setShowLoadingModal(false);
            router.push(`/dashboard/choose?resultImage=${encodeURIComponent(data.public_img)}`);
            console.log("Creation completed successfully");
            break;
          case "failed":
            alert("Image generation failed, please try again");
            setShowLoadingModal(false);
            console.error("Creation failed");
            break;
          default:
            setTimeout(checkStatus, pollInterval);
        }
      } catch (error) {
        console.error("Error checking creation status:", error);
        setTimeout(checkStatus, pollInterval);
      }
    };
  
    checkStatus();
  };

  const handleGenerate = () => {
    setShowLoadingModal(true);
    createCreations(selectedLayout, uploadedFile.id);
  };

  const updateSelectedModel = useCallback((modelName) => {
    setSelectedModel(modelName);
  }, []);

  // ========== Filter categories ==========

  const genderCategories = categoryData.filter(
    (category) => category.categoryType === "gender_types"
  );

  const clothTypes = selectedGender ? getChildCategories(selectedGender) : [];

  const sleeveTypes = selectedClothType
    ? getChildCategories(selectedClothType)
    : [];

  // ========== useEffects ==========

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

  useEffect(() => {
    if (selectedGender && selectedClothType && selectedSleeveType) {
      setIsLoadingModels(true);
      const timer = setTimeout(() => {
        getModelData(selectedGender, selectedClothType, selectedSleeveType);
      }, 100); // Debounce API call
      return () => {
        clearTimeout(timer);
        setIsLoadingModels(false);
      };
    }
  }, [selectedGender, selectedClothType, selectedSleeveType]);

  useEffect(() => {
    if (selectedClothType && selectedSleeveType) {
      setIsLoadingLayoutImages(true);
      const timer = setTimeout(() => {
        getLayoutData(selectedSleeveType);
      }, 100); // Debounce API call
      return () => {
        clearTimeout(timer);
        setIsLoadingLayoutImages(false);
      };
    }
  }, [selectedClothType, selectedSleeveType]);

  useEffect(() => {
    setSelectedClothType(null);
    setSelectedSleeveType(null);
    setSelectedModel(""); // Reset selected model when gender changes
  }, [selectedGender]);

  useEffect(() => {
    if (apiError) {
      console.error("API Error:", apiError);
      // You can also show an error message to the user here
    }
  }, [apiError]);

  // ========== Render component ==========

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
          {isLoading && showLoadingIndicators ? (
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
                        <div className="flex flex-col space-y-2">
                          <h2 className="text-xl font-bold tracking-tight">
                            Start with a photo of your clothes
                          </h2>
                          <div className="flex items-center space-x-2">
                            <ImageGuide />
                          </div>
                        </div>
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
                      <GenderButton
                        key={gender._id}
                        gender={gender}
                        isSelected={selectedGender === gender._id}
                        onClick={setSelectedGender}
                        onReset={() => updateSelectedModel("")}
                      />
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
                    value={clothTypes.find((ct) => ct._id === selectedClothType)?.name || clothTypes[0]?.name}
                    onValueChange={(value) => {
                      const selectedCloth = clothTypes.find((cloth) => cloth.name === value);
                      if (selectedCloth) {
                        setSelectedClothType(selectedCloth._id);
                        
                        // Get the sleeve types for this cloth type
                        const sleeveTypesForCloth = getChildCategories(selectedCloth._id);
                        
                        // If there are sleeve types, select the first one
                        if (sleeveTypesForCloth.length > 0) {
                          setSelectedSleeveType(sleeveTypesForCloth[0]._id);
                        } else {
                          setSelectedSleeveType(null);
                        }

                        setSelectedModel(""); // Reset selected model
                      }
                    }}
                  >
                      <TabsList className="mb-3 justify-between py-4 px-4 overflow-x-auto overflow-y-hidden flex flex-row no-scrollbar">
                        {clothTypes.map((clothType) => (
                          <ClothTypeButton
                            key={clothType._id}
                            clothType={clothType}
                            isSelected={selectedClothType === clothType._id}
                            onClick={() => setSelectedClothType(clothType._id)}
                          />
                        ))}
                      </TabsList>
                      {clothTypes.map((clothType) => (
                        <TabsContent key={`tab-${clothType._id}`} value={clothType.name} className="w-full">
                          <div className="flex flex-col md:flex-row gap-3">
                            {getChildCategories(clothType._id).map((sleeveType) => (
                              <SleeveTypeButton
                                key={sleeveType._id}
                                sleeveType={sleeveType}
                                isSelected={selectedSleeveType === sleeveType._id}
                                onClick={onSleevetypeClick}
                                isLoading={isLoadingLayouts}
                              />
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
                      <div className="flex space-x-4 pb-4 opacity-0 pointer-events-none">
                        {modelData.map((model) => (
                          <ModelItem
                            key={model.name}
                            model={model}
                            isSelected={false}
                            onSelect={() => {}}
                          />
                        ))}
                      </div>
                      {isLoadingModels ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                          <Loader2 className="w-8 h-8 animate-spin text-primary" />
                          <span className="ml-2">Loading models...</span>
                        </div>
                      ) : (
                        <div className="absolute inset-0">
                          <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                              {modelData.map((model) => (
                                <ModelItem
                                  key={model.name}
                                  model={model}
                                  isSelected={selectedModel === model.name}
                                  onSelect={setSelectedModel}
                                />
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      )}
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
                    <div className="relative">
                      <div className="flex space-x-4 opacity-0 pointer-events-none">
                        {layoutData.map((item) => (
                          <div key={item._id} className="relative">
                            <MemoizedPhotoLayout
                              imgUrl={item.layout_public_img}
                              className="w-[250px]"
                              aspectRatio="portrait"
                              width={250}
                              height={330}
                              selected={false}
                              onClick={() => {}}
                            />
                          </div>
                        ))}
                      </div>
                      {isLoadingLayoutImages ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                          <Loader2 className="w-8 h-8 animate-spin text-primary" />
                          <span className="ml-2">Loading layouts...</span>
                        </div>
                      ) : layoutData.length === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-lg text-muted-foreground">
                            No photo layout available for this selection... We will add one soon!
                          </p>
                        </div>
                      ) : (
                        <div className="absolute inset-0">
                          <ScrollArea>
                            <div className="flex space-x-4">
                              {layoutData.map((item) => (
                                <div key={item._id} className="relative">
                                  <MemoizedPhotoLayout
                                    imgUrl={item.layout_public_img}
                                    className="w-[250px]"
                                    aspectRatio="portrait"
                                    width={250}
                                    height={330}
                                    selected={selectedLayout === item._id}
                                    onClick={() => handlePhotoSelect(item._id)}
                                  />
                                </div>
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      )}
                    </div>
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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// ===============================  IMAGE GUIDE COMPONENT ===============================

const ImageGuide = memo(() => {
  return (
    <HoverCard>
      <HoverCardTrigger className="flex items-center space-x-2 cursor-pointer group">
        <span className="text-sm text-primary font-bold group-hover:underline">
          Image upload guide
        </span>
        <HelpCircle className="w-5 h-5 text-primary" />
      </HoverCardTrigger>

      <HoverCardContent className="w-auto p-0">
        <div className="flex flex-col space-y-4 p-3">
          <div className="flex flex-col md:flex-row bg-green-light border border-[#CFDFCF] p-4 rounded-lg">
            <div className="flex-1 mb-4 md:mb-0 mr-4">
              <h3 className="font-bold mb-1 text-green mb-2">
                Best results with
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green flex-shrink-0" />
                  <p className="text-sm text-green">Clean White background</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green flex-shrink-0" />
                  <p className="text-sm text-green">Minimal texture</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex space-x-2 justify-center md:justify-end">
              <img
                src="/images/dashboard/good-01.png"
                alt="Good photo example 1"
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded"
              />
              <img
                src="/images/dashboard/good-02.png"
                alt="Good photo example 2"
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-[#FAF0F0] border border-[#F7D0D0] p-4 rounded-lg">
            <div className="flex-1 mb-4 md:mb-0 mr-4">
              <h3 className="font-bold mb-1 text-red mb-2">
                Consider avoiding
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-red flex-shrink-0" />
                  <p className="text-sm text-red">Heavy texture</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-red flex-shrink-0" />
                  <p className="text-sm text-red">Complicated patterns</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-red flex-shrink-0" />
                  <p className="text-sm text-red">Not clean background</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex space-x-2 justify-center md:justify-end">
              <img
                src="/images/dashboard/bad-01.png"
                alt="Bad photo example 1"
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded"
              />
              <img
                src="/images/dashboard/bad-02.png"
                alt="Bad photo example 2"
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded"
              />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
});