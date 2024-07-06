"use client";

import { Button } from "@/components/ui/button";

import LogoutButton from "@/components/functions/logout";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";

import DashboardHeader from "@/components/dashboard/DashboardHeader";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";

const headerHeight = "pt-[70px] lg:pt-0";

export default function Dashboard() {
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
                <h2 className="text-xl font-bold tracking-tight">Summer Roh</h2>
                <p className="text-sm text-muted-foreground font-medium">
                  summerrohh@gmail.com
                </p>
              </div>

              <div className="flex flex-row w-full justify-center items-center space-x-8">
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">102</h2>
                  <p className="text-sm text-muted-foreground font-medium">
                    Items generated
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">42</h2>
                  <p className="text-sm text-muted-foreground font-medium">
                    Credits left
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">102</h2>
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
                    42
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
        </div>
      </div>
    </>
  );
}
