import React from "react";
import useStackedBarChart from "../../hooks/useStackedBarChart";
import { series, xaxis } from "./mock";

const RingUsesChart = () => {
  const { ChartComponent } = useStackedBarChart(
    "💍 Times Frodo wore the One Ring", series, true, xaxis, "500px"
  );

  return <ChartComponent/>;
};

export default RingUsesChart;
