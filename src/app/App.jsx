import React from "react";

const App = () => {
  return (
    <div className="relative">
      <div className="container flex justify-between items-center w-[1995px] h-[800px] bg-[#02004F] mx-auto mt-20">
        <div>
          <img src="./Nameless.png" alt="geometry" />
        </div>
        <div className="w-[512px] h-[361px] flex flex-col align-start">
          <div className="font-[700] font-montserrat text-[70px] text-[#FFFFFF] mb-5 opacity-50">
            LOGIN
          </div>
          <form className="flex flex-col gap-8 mb-10">
            <input
              type="text"
              id
              placeholder="Username"
              className="p-3 border w-[469px] h-[60px] bg-[#1A2162] opacity-50 font-[400] text-[25px]"
              name
            ></input>
            <input
              type="text"
              id
              placeholder="Password"
              className="p-3 border w-[469px] h-[60px] bg-[#1A2162] opacity-50 font-[400] text-[25px]"
              name
            ></input>
          </form>
          <button className="w-[250px] bg-[#050D5E] text-white font-montserrat font-[700] text-[25px] py-4">
            Login
          </button>
        </div>
        <div>
          <img
            src="./Nameless.png"
            alt="geometry"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
