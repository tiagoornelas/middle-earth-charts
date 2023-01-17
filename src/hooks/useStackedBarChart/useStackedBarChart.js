import React, { useState } from "react";
import Chart from "react-apexcharts";

const useStackedBarChart = (
  title, series, horizontal, xaxis, width, height) => {
  const [chartProps] = useState({
    series,
    type: "bar",
    options: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        style: {
          fontFamily: "Raleway"
        }
      },
      plotOptions: {
        bar: {
          horizontal
        }
      },
      tooltip: {
        style: {
          fontFamily: "Raleway"
        }
      },
      legend: {
        fontFamily: "Raleway"
      },
      xaxis: {
        type: "category",
        categories: xaxis,
        labels: {
          style: {
            fontFamily: "Raleway"
          }
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

export default useStackedBarChart;
