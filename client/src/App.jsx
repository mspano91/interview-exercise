import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allTickers } from "./utils/fetchData";
import { setAllTickers } from "./redux/slice.jsx";
import StockChart from "./components/stockChart/StockChart.jsx";
import Sections from "./components/sections/Sections.jsx";
import AsideStocks from "./components/aside/asideStocks.jsx";
import NavBar from "./components/navBar/NavBar.jsx";

function App() {
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
      <div className=" bg-zinc-900 w-full h-full flex flex-col justify-center items-center p-10">
        <NavBar />
        <div>
          <Sections />
        </div>
        <div className="flex flex-row">
          <AsideStocks />
          {/* <div className="w-[400px] h-[600px] text-center overflow-y-auto overflow-x-auto">
            {selectedTickerRedux.map((tick) => (
              <div
                key={tick.id}
                className="w-full flex flex-col text-white  items-center text-start p-6"
              >
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
          </div> */}
          <div className="flex justify-center items-center ml-10">
            <StockChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
