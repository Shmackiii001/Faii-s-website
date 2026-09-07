import Image from "next/image";
import MainNav from "@/components/mainNav";
import Header from "@/components/header";
import ProfHeader from "@/components/profHeader";
export default function Home() {
  return (
    <div className="">
      <div className="relative z-0">
        <Header home={true} />
      </div>
      <div className="relative z-10">
        <MainNav />
      </div>
      <div className="relative z-10">
        <ProfHeader />
      </div>
      <div>
        {/* <div className="flex">
          <div className="flex-8 bg-yellow-400 h-[100vh] w-full"></div>
          <div className="flex-2 bg-gray-400 "></div>
        </div> */}
        <div className="">
        <div className="flex flex-col mt-10 h-96 sm:flex-row justify-center items-center sm:justify-center sm:items-start">
          <div className="flex-4">
            <div className="bg-blue-500 h-50 w-50"></div>
          </div>
          <div className="flex-8 ">
            <div className="flex justify-start pl-8 items-center">
              <div>
                <h1>Hi I'm Faith</h1>
              </div>
            </div>
          </div>
          <div className="flex-4 ">
            <div className="flex justify-end"><div className="bg-blue-500 h-50 w-50"></div></div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
