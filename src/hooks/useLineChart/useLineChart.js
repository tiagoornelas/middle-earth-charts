import React, { useState } from "react";
import Chart from "react-apexcharts";

const useLineChart = (
  title, series, xaxis, width, height) => {
  const [chartProps] = useState({
    series,
    type: "area",
    options: {
      chart: {
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        style: {
          fontFamily: "Raleway"
        }
      },
      xaxis: {
        type: "category",
        categories: xaxis,
        labels: {
          style: {
            fontSize: "8px",
            fontFamily: "Raleway"
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: "Raleway"
          }
        }
      },
      legend: {
        fontFamily: "Raleway"
      },
      title: {
        text: title,
        align: "left",
        floating: false,
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Raleway",
          color: "#263238"
        }
      }
    }
  });

  const ChartComponent = () =>
    <Chart
      {...chartProps}
      width={width}
      height={height}
    />;

  return { ChartComponent };
};

export default useLineChart;
