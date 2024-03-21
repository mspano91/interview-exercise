import React from "react";
import logo from "../../assets/logo.webp";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center py-4 w-[1600px]">
      <div className="flex flex-row items-center cursor-pointer">
        <img className="w-[70px]" src={logo} alt="" />
        <h1 className="text-white text-xl font-extralight">Your$Coin</h1>
      </div>
      <div className="flex flex-row items-center gap-4 cursor-pointer">
        <p className="text-white text-xl text-end font-extralight">User</p>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>
    </div>
  );
}
