import "./App.css";
import { useEffect, useState } from "react";
import { allTickers } from "./utils/fetchData";

function App() {
  useEffect(() => {
    const fetchDat = async () => {
      try {
        const data = await allTickers();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDat();
  }, []);

  return (
    <>
      <div className="flex">
        <h1 className="text-3xl text-slate-800">initializating FINTECH API</h1>
      </div>
    </>
  );
}

export default App;
