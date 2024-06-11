"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import LogoutButton from "@/components/functions/logout";

import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

// import HFbutton from "@/components/HFbutton";
// import VtonButton from "@/components/VtonButton";

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [gender, setGender] = useState("female");

  useEffect(() => {
    // Only access sessionStorage if running in the browser
    if (typeof window !== "undefined") {
      const userSession = sessionStorage.getItem("user");
      // 로그인 안되어 있으면 메인 페이지로 이동
      if (!user && !userSession) {
        router.push("/");
      }
    }
  }, [user, router]);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <Sidebar className="w-2/12 hidden lg:block h-full lg:h-auto lg:overflow-hidden" />
        <div className="col-span-3 lg:col-span-5 lg:border-l px-10 lg:px-20 xl:px-40 bg-background-dashboard pb-10 w-full lg:w-10/12 flex flex-col overflow-y-auto">
          <div className="pt-12 space-y-10">
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
                <p className="text-sm text-muted-foreground font-bold">
                  summerrohh@gmail.com
                </p>
              </div>

              <div className="flex flex-row w-full justify-center items-center space-x-8">
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">102</h2>
                  <p className="text-sm text-muted-foreground font-bold">
                    Items generated
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">42</h2>
                  <p className="text-sm text-muted-foreground font-bold">
                    Credits left
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 mt-6 mb-6">
                  <h2 className="text-xl font-bold">102</h2>
                  <p className="text-sm text-muted-foreground font-bold">
                    Credits used
                  </p>
                </div>
              </div>

              <LogoutButton />
            </Card>

            {/* Credit Box */}
            <div className="w-full">
              <Card className="w-full p-6 flex flex-col justify-between gap-x-4">
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-1 mt-6 mb-6">
                    <p className="text-sm text-muted-foreground font-bold">
                      Step 2/5
                    </p>
                    <h2 className="text-xl font-bold tracking-tight">42</h2>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setGender("female")}
                  className={`w-full h-14 font-bold bg-primary text-white`}
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
