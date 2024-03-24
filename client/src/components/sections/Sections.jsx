import React from "react";

export default function Sections() {
  return (
    <>
      <div className="flex flex-row gap-2 w-full pb-10 pt-4">
        <div className="rounded-lg flex jusify-center items-center  border-2 h-[50px] p-2 w-[400px] hover:bg-[#359EA4]  cursor-pointer text-white hover:text-white ">
          <p className="text-center text-md w-full font-medium">STOCKS</p>
        </div>
        <div className="rounded-lg flex jusify-center items-center  border-2 h-[50px] p-2 w-[400px] hover:bg-[#359EA4]  cursor-pointer text-white  hover:text-white">
          <p className="text-center text-md w-full font-medium">CRYPTO</p>
        </div>
        <div className="rounded-lg flex jusify-center items-center  border-2 h-[50px] p-2 w-[400px] hover:bg-[#359EA4]  cursor-pointer text-white hover:text-white ">
          <p className="text-center text-md w-full font-medium">INDICE</p>
        </div>
        <div className="rounded-lg flex jusify-center items-center  border-2 h-[50px] p-2 w-[400px] hover:bg-[#359EA4]  cursor-pointer text-white  hover:text-white">
          <p className="text-center text-md w-full font-medium ">FOREX</p>
        </div>
      </div>
    </>
  );
}
