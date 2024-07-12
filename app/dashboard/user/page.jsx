"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import LogoutButton from "@/components/functions/logout";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { getUserToken } from "@/components/functions/checkIsLoggedIn";
import { Loader2 } from "lucide-react";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  // call category api to get all the user info
  const endpoint =
    "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";
  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${endpoint}/api/v1/users/me`, {
        method: "GET",
        headers: {
          token: getUserToken(),
        },
      });

      const data = await response.json();

      if (data.isSuccess && data.data) {
        setUserData(data.data);
        setLoading(false);
      } else {
        console.error("Get user data failed.");
      }
    } catch (error) {
      console.error("Error during get user data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // api call to get user info end

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
            <div className="pt-12 pb-12 space-y-10">
              {/* Profile Box */}
              <Card className="w-full p-6 flex flex-col justify-center items-center text-center gap-x-4">
                <div
                  className="w-full h-48 rounded-lg"
                  style={{
                    backgroundImage: 'url("/images/dashboard/bg-abstract.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="flex flex-col items-center justify-center w-fit space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold tracking-tight">
                    {userData && userData.name ? userData.name : ""}
                  </h2>
                  <p className="text-sm text-muted-foreground font-medium">
                    {userData && userData.email ? userData.email : ""}
                  </p>
                </div>

                <div className="flex flex-row w-full justify-center items-center space-x-8">
                  <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                    <h2 className="text-xl font-bold">
                      {userData && "images_generated" in userData
                        ? userData.images_generated
                        : 0}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                      Images generated
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                    <h2 className="text-xl font-bold">
                      {userData && "credits" in userData ? userData.credits : 0}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                      Credits left
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                    <h2 className="text-xl font-bold">
                      {userData && "credits_used" in userData
                        ? userData.credits_used
                        : 0}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                      Credits used
                    </p>
                  </div>
                </div>

                <LogoutButton />
              </Card>

              {/* Credit Box */}
              <div className="w-full">
                <Card className="w-full p-6 flex flex-col justify-between items-center gap-x-4">
                  <div className="flex flex-col items-center justify-center w-fit space-y-1 mt-6 mb-6">
                    <h2 className="text-xl font-bold tracking-tight">
                      Your credits
                    </h2>
                    <h2 className="text-3xl text-primary font-bold tracking-tight">
                      {userData && "credits" in userData ? userData.credits : 0}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                      Credits left
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className={`w-fit h-14 bg-primary text-white`}
                  >
                    Get more credits
                  </Button>
                </Card>
              </div>

              {/* <Link href="/dashboard/choose" className="d-block">
              <Button className="w-full h-14 font-bold mt-10 mb-4 text-lg">
                <WandSparkles
                  color={"#ffffff"}
                  size={"20px"}
                  strokeWidth={2}
                  className="mr-2"
                />
                Get more credits
              </Button>
            </Link> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
