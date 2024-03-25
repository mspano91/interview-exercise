import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BackgroundGradient from "../ui/background-gradient";
import { useDispatch } from "react-redux";
import { SetDeletedStock } from "../../redux/slice";

export default function Card({
  openP,
  name,
  higherP,
  trans,
  timestamp,
  tradingV,
  volWeighted,
}) {
  const dispatch = useDispatch();

  const handleDelete = (name) => {
    console.log(name);
    dispatch(SetDeletedStock(name));
  };

  return (
    <BackgroundGradient className="rounded-[22px] flex max-w-sm  sm:p-4 bg-white dark:bg-zinc-900">
      <div className="relative w-[300px] h-[300px] text-white flex flex-col justify-center items-center">
        <div className="absolute right-0 top-0 p- cursor-pointer">
          <DeleteOutlineIcon onClick={() => handleDelete(name)} />
        </div>
        <p className="font-bold text-5xl p-4">{name}</p>
        <div className="flex flex-col justify-start">
          <p>Open Price: {openP}</p>
          <p>Higher Price: {higherP}</p>
          <p>Transactions: {trans}</p>
          {/* <p>Timestamp: {timestamp}</p> */}
          <p>Trading Volume: {tradingV}</p>
          <p>Volume Weighted: {volWeighted}</p>
        </div>
        {/* Aquí puedes imprimir todas las otras propiedades */}
      </div>
    </BackgroundGradient>
  );
}
