import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTickers } from "./utils/fetchData";
import { setAllTickers } from "./redux/slice.jsx";

function App() {
  const dispatch = useDispatch();

  const allTickerRedux = useSelector((state) => state.fintech.allTickers);

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
      <div className="bg-zinc-700 w-full flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl text-white">initializating FINTECH API</h1>
        {allTickerRedux.map((tick) => (
          <p>{tick.ticker}</p>
        ))}
      </div>
    </>
  );
}

export default App;
