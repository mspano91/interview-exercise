import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ticker_by_name } from "../../utils/fetchData";
import { useEffect, useState } from "react";
import { SetAddedArray, setSelected, setSelectedName } from "../../redux/slice";
import BackgroundGradient from "../ui/background-gradient";
import InfoModal from "../modal/modal";
import AddIcon from "@mui/icons-material/Add";

export default function AsideStocks() {
  const dispatch = useDispatch();

  const allTickerRedux = useSelector((state) => state.fintech.allTickers);
  const stocksLimit = allTickerRedux.slice(0, 50);
  const selectedTickerRedux = useSelector((state) => state.fintech.selected);

  console.log(stocksLimit);
  const handlerTicker_by_name = async (name) => {
    // console.log(name);
    try {
      const response = await ticker_by_name(name);
      console.log(response.data.results);
      console.log(response.data.ticker);
      dispatch(setSelected(response.data.results));
      dispatch(setSelectedName(response.data.ticker));
    } catch (error) {
      console.error("Error fetching data in Fetch client side:", error.message);
    }
  };

  const handleAddStock = (selectedStock) => {
    dispatch(SetAddedArray([selectedStock]));
    console.log(selectedStock);
  };

  useEffect(() => {
    if (selectedTickerRedux.length === 0 && allTickerRedux.length > 0) {
      const firstStock = allTickerRedux[0];
      handlerTicker_by_name(firstStock.name);
    }
  }, [allTickerRedux, selectedTickerRedux]);

  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm  sm:p-4 bg-white dark:bg-zinc-900">
      <div className="w-full h-[600px] flex flex-col p-2 text-white text-center overflow-y-auto scrollbar-none  ">
        <h1 className="font-thin">Stocks list</h1>
        {stocksLimit.map((tick) => (
          <div className="flexgap-2">
            <div className="flex flex-row items-center gap-2 rounded-md hover:bg-[#359EA4]">
              <p
                key={tick.id}
                onClick={() => {
                  handlerTicker_by_name(tick.name);
                }}
                className="w-[80px] cursor-pointer hover:text-slate-800 hover:font-bold hover:text-xl py-2 my-2"
              >
                {tick.name}
              </p>
              <div className="flex flex-row px-2">
                <InfoModal
                  stockName={tick.name}
                  stockCloseP={tick.close}
                  stockOpenP={tick.openP}
                  stockHigherP={tick.higherP}
                  stockLowerP={tick.lowerP}
                  stockTrans={tick.trans}
                  stockTimestamp={tick.timestamp}
                  stockTradingV={tick.tradingV}
                  stockVolWeighted={tick.volWeighted}
                ></InfoModal>
                <AddIcon
                  onClick={() => handleAddStock(tick)}
                  className="cursor-pointer hover:text-slate-800"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </BackgroundGradient>
  );
}
