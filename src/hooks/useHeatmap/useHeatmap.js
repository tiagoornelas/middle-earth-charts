import React, { useState } from "react";
import Chart from "react-apexcharts";

const useHeatmap = (title, series, width, height) => {
  const [chartProps] = useState({
    series,
    type: "heatmap",
    options: {
      chart: {
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        style: {
          fontFamily: "Raleway"
        }
      },
      xaxis: {
        labels: {
          style: {
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

export default useHeatmap;
