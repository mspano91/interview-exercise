import React, { useState } from "react";
import AsideStocks from "../components/aside/asideStocks";
import StockChart from "../components/stockChart/StockChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allTickers } from "../utils/fetchData.js";
import { setAllTickers } from "../redux/slice.jsx";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDat = async () => {
      try {
        const response = await allTickers();
        console.log(response.data);
        const tickerlist = response.data;
        dispatch(setAllTickers(tickerlist));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDat();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-row">
          <AsideStocks />
          <div className="flex justify-center items-center ml-10">
            <StockChart />
          </div>
        </div>
      </div>
    </>
  );
}
