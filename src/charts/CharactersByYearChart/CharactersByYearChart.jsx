import React from "react";
import useLineChart from "../../hooks/useLineChart";
import { series, xaxis } from "./mock";

const RingUsesChart = () => {
  const { ChartComponent } = useLineChart(
    "⚔️ Characters by year", series, xaxis, "500px"
  );

  return <ChartComponent/>;
};

export default RingUsesChart;
