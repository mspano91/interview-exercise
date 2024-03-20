import React from "react";

export default function Sections() {
  return (
    <div className=" flex flex-row gap-2 w-full pb-10 pt-4">
      <div className="rounded-lg flex jusify-center items-center  border-2 h-[100px] p-2 w-[400px] hover:bg-slate-900 hover:border-pink-900 text-white hover:text-pink-500 ">
        <p className=" text-center text-xl w-full font-medium">stocks</p>
      </div>
      <div className="rounded-lg flex jusify-center items-center  border-2 h-[100px] p-2 w-[400px] hover:bg-slate-900 hover:border-pink-900 text-white  hover:text-pink-500">
        <p className=" text-center text-xl w-full font-medium">crypto</p>
      </div>
      <div className="rounded-lg flex jusify-center items-center  border-2 h-[100px] p-2 w-[400px] hover:bg-slate-900 hover:border-pink-900 text-white hover:text-pink-500 ">
        <p className=" text-center text-xl w-full font-medium">indice</p>
      </div>
      <div className="rounded-lg flex jusify-center items-center  border-2 h-[100px] p-2 w-[400px] hover:bg-slate-900 hover:border-pink-900 text-white  hover:text-pink-500">
        <p className=" text-center text-xl w-full font-medium ">Forex</p>
      </div>
    </div>
  );
}
