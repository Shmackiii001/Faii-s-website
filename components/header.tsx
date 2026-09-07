import React from "react";
import Glitch from "@/components/glitch"
function header({ ...props }) {
  return (
    <div>
      {props?.home ? (
        <div className="h-[40vh] gold-rich w-full flex justify-center items-center">
          <div className="bg-gray-300 h-[30vh] w-full relative">
            <div className="flex flex-row">
              <div 
                className="relative flex-4 ml-4 sm:ml-4 sm:flex-4 md:flex-4 lg:flex-2"
                style={{}}
              >
                <img
                  src="/faii.png"
                  alt="Faith's image"
                  className="h-[350px] object-cover -translate-y-23 pointer-events-none"
                
                />
                <div className="absolute -top-25"><Glitch/></div>
              </div>
              <div className="flex-8">
                <div className=" flex justify-center items-center h-[30vh]">
                  <div className="flex-col">
                    <div>
                      <h2
                        className="fnt-bold text-4xl princess"
                        style={{ }}
                      >
                        Faith Kepchemboi
                      </h2>
                    </div>
                    <div>
                      <h2 className="prt text-2xl sm:text-2xl md:text-4xl">Law Industry</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :props.lifestyle? (
         <div className="h-[40vh] bg-cyan-500 w-full flex justify-center items-center">
         
        </div>
      ):( <div className="h-[40vh] bg-pink-700 w-full flex justify-center items-center">
         
        </div>)}
    </div>
  );
}

export default header;
