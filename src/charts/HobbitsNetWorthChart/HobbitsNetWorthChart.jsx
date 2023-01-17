import React from "react";
import useRangeWithForecast from "../../hooks/useRangeWithForecast";
import { series } from "./mock";

const HobbitsNetWorthChart = () => {
  const { ChartComponent } = useRangeWithForecast(
    "💰 Net worth range by hobbit age", series, 2, "500px"
  );

  return <ChartComponent/>;
};

export default HobbitsNetWorthChart;
