import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTickers, ticker_by_name } from "./utils/fetchData";
import { setAllTickers, setSelected } from "./redux/slice.jsx";
import StockChart from "./components/stockChart/StockChart.jsx";
import Sections from "./components/sections/Sections.jsx";

function App() {
  const dispatch = useDispatch();
  // const [ticker, setTicker] = useState();
  const allTickerRedux = useSelector((state) => state.fintech.allTickers);
  const selectedTickerRedux = useSelector((state) => state.fintech.selected);

  const handlerTicker_by_name = async (name) => {
    console.log(name);
    try {
      const response = await ticker_by_name(name);
      console.log(response.data.results);
      dispatch(setSelected(response.data.results));
    } catch (error) {
      console.error("Error fetching data in Fetch client side:", error.message);
    }
  };

  console.log(selectedTickerRedux);

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

  //useEffect to update the chart when is anything selected
  useEffect(() => {
    if (selectedTickerRedux.length === 0 && allTickerRedux.length > 0) {
      const firstStock = allTickerRedux[0];
      handlerTicker_by_name(firstStock.name);
    }
  }, [allTickerRedux, selectedTickerRedux]);

  return (
    <>
      <div className=" bg-zinc-900 w-full h-full flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl text-white p-4">Market System</h1>
        <div>
          <Sections />
        </div>
        <div className=" flex flex-row">
          <div className="w-[200px] h-[600px] text-white text-center overflow-y-auto p-6">
            {allTickerRedux.map((tick) => (
              <p
                key={tick.id}
                onClick={() => {
                  // setTicker(tick.name);
                  handlerTicker_by_name(tick.name);
                }}
                className="cursor-pointer hover:text-pink-500"
              >
                {tick.name}
              </p>
            ))}
          </div>
          <div className="w-[400px] h-[600px] text-center overflow-y-auto overflow-x-auto">
            {selectedTickerRedux.map((tick) => (
              <div className="w-full flex flex-col text-white  items-center text-start p-6">
                <p>Open Price: {tick.o}</p>
                <p>Close price: {tick.c}</p>
                <p>Higher Price: {tick.h}</p>
                <p>Lower Price: {tick.l}</p>
                <p>Unix Msec: {tick.t}</p>
                <p>Trading Volume: {tick.v}</p>
                <p>Average price: {tick.vw}</p>
                <p>Transations: {tick.n}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <StockChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
