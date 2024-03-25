import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  const added = useSelector((state) => state.fintech.added);
  console.log(added);
  return (
    <>
      <h1 className="text-white font-thin text-5xl ">Your favorites stocks</h1>
      <div className="grid grid-cols-5 gap-4 p-8 overflow-scroll scrollbar-none">
        {added.length
          ? added.map(
              ({
                id,
                name,
                openP,
                higherP,
                trans,
                timestamp,
                tradingV,
                volWeighted,
              }) => (
                <Card
                  key={id}
                  name={name}
                  openP={openP}
                  higherP={higherP}
                  trans={trans}
                  timestamp={timestamp}
                  tradingV={tradingV}
                  volWeighted={volWeighted}
                />
              )
            )
          : null}
      </div>
    </>
  );
}
