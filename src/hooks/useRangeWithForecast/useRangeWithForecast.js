import React, { useState } from "react";
import Chart from "react-apexcharts";

const useRangeWithForecast = (
  title, series, forecastPoints, width, height) => {
  const [chartProps] = useState({
    series,
    type: "rangeArea",
    options: {
      chart: {
        type: "rangeArea"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: forecastPoints
      },
      stroke: {
        curve: "smooth",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Bilbo Baggins", "Frodo Baggins"]
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      tooltip: {
        style: {
          fontFamily: "Raleway"
        }
      },
      xaxis: {
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

export default useRangeWithForecast;
