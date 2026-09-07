import Image from "next/image";
import MainNav from "@/components/mainNav";
import Header from "@/components/header";
import ProfHeader from '@/components/profHeader';
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
        <ProfHeader/>
        </div>
      <div>
        {/* <div className="flex">
          <div className="flex-8 bg-yellow-400 h-[100vh] w-full"></div>
          <div className="flex-2 bg-gray-400 "></div>
        </div> */}
      </div>
    </div>
  );
}
