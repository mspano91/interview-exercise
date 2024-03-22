import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import BackgroundGradient from "../ui/background-gradient";

export default function StockChart() {
  const selectedTickerRedux = useSelector((state) => state.fintech.selected);
  const selectedName = useSelector((state) => state.fintech.selectedName);

  const getChartData = () => {
    const labels = selectedTickerRedux.map((data) =>
      new Date(data.t).toLocaleDateString()
    );
    const opens = selectedTickerRedux.map((data) => data.o);
    const highs = selectedTickerRedux.map((data) => data.h);
    const lows = selectedTickerRedux.map((data) => data.l);
    const closes = selectedTickerRedux.map((data) => data.c);

    return {
      options: {
        chart: {
          type: "line",
          height: 350,
          toolbar: {
            show: true,
          },
        },
        xaxis: {
          categories: labels,
        },
        stroke: {
          curve: "smooth",
        },
      },

      series: [
        {
          name: "Open",
          data: opens,
        },
        {
          name: "High",
          data: highs,
        },
        {
          name: "Low",
          data: lows,
        },
        {
          name: "Close",
          data: closes,
        },
      ],
    };
  };

  return (
    <>
      <div>
        <BackgroundGradient>
          <h1 className="font-medium text-5xl text-white p-6">
            {selectedName}
          </h1>
          <Chart
            options={getChartData().options}
            series={getChartData().series}
            type="line"
            width={1200}
            height={600}
          />
        </BackgroundGradient>
      </div>
    </>
  );
}
