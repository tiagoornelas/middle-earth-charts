import React from "react";
import useStackedBarChart from "../../hooks/useStackedBarChart";
import { series, xaxis } from "./mock";

const RingUsesChart = () => {
  const { ChartComponent } = useStackedBarChart(
    "🧝‍♀️ Characters by race", series, false, xaxis, "500px"
  );

  return <ChartComponent/>;
};

export default RingUsesChart;
