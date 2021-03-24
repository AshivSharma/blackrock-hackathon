import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";

var Alpha = require("alpha_vantage_api_wrapper").Alpha;
var alpha = new Alpha("B02YL7M1461GOMXJ");

export default function StockChart() {
  const [weeklyStockPrices, setWeeklyStockPrices] = useState([]);
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var currentYear = dateObj.getUTCFullYear();

  var newdate = currentYear + "-" + month + "-" + day;
  useEffect(() => {
    alpha.stocks.monthly("tsla").then((res) => {
      const dates = Object.keys(res["Monthly Time Series"]);
      dates.forEach((stockDate) => {
        if (
          stockDate.substring(0, 4) == 2020 ||
          stockDate.substring(0, 4) == 2021
        ) {
          setWeeklyStockPrices((prices) => [
            ...prices,
            res["Monthly Time Series"][stockDate]["4. close"],
          ]);
          console.log(stockDate, " -> ", res["Monthly Time Series"][stockDate]);
        }
      });
    });
  }, []);
  const state = {
    labels: [
      "Jan '20",
      "Feb '20",
      "Mar '20",
      "Apr '20",
      "May '20",
      "Jun '20",
      "Jul '20",
      "Aug '20",
      "Sept '20",
      "Oct '20",
      "Nov '20",
      "Dec '20",
      "Jan '21",
      "Feb '21",
      "Mar '21",
      "Apr '21",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sept",
      //   "Oct",
      //   "Nov",
      //   "Dec",
    ],
    datasets: [
      {
        label: "Stock Price",
        fill: false,
        lineTension: 0,
        backgroundColor: "#78a175",
        borderColor: "#78a175",

        borderWidth: 1,
        data: weeklyStockPrices,
      },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            ],
          },

          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
