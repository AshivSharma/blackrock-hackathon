import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import NewsComp from "../components/NewsComp";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import StockChart from "../components/StockChart";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    width: "70%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 80,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
  },
}));

export default function Stockpage(props) {
  var Alpha = require("alpha_vantage_api_wrapper").Alpha;
  var alpha = new Alpha("X5UGPY5ZUG3ALVEX");

  var NewsAPIKey = "4b599d462bdd4451a33eb3b8978a26ba";
  const stockSelected = "Tesla";
  const [yesterDayPrice, setYesterDayPrice] = useState();
  const [currentDayPrice, setCurrentDayPrice] = useState();
  const [newsInfo, setNewsInfo] = useState([]);
  const classes = useStyles();

  //Fetching the data for Alpha
  useEffect(async () => {
    await alpha.stocks.quote("TSLA").then((res) => {
      console.log(res);
      setYesterDayPrice(res["Global Quote"]["08. previous close"]);
      setCurrentDayPrice(res["Global Quote"]["05. price"]);
    });
  }, []);

  //Fetching the data from news api
  useEffect(async () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${stockSelected}&apiKey=${NewsAPIKey}`
      )
      .then((res) => {
        console.log(res.data.articles);
        setNewsInfo(res.data.articles);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="center"
        m={2}
        fontSize={30}
        fontWeight={100}
      >
        {" "}
        Tesla
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        m={-1}
        fontSize={20}
        fontWeight={100}
      >
        {" "}
        ESG Rating: AAA
      </Box>

      <Box display="flex" m={5}>
        <Box flexGrow={1} fontSize={20} fontWeight={100}>
          Stock Price Yesterday: ${yesterDayPrice}
        </Box>
        <Box fontSize={20} fontWeight={100}>
          Stock Price Today: ${currentDayPrice}
        </Box>
      </Box>
      <Box>
        <StockChart />
      </Box>

      <div>
        <Box
          display="flex"
          justifyContent="center"
          m={2}
          fontSize={20}
          fontWeight={100}
        >
          News
        </Box>
        <Card style={{ overflowY: "scroll" }} className={classes.root}>
          <CardContent>
            {newsInfo.map((article) => {
              return (
                <NewsComp
                  key={article["title"]}
                  title={article["title"]}
                  description={article["description"]}
                  date={article["publishedAt"]}
                  link={article["url"]}
                  image={article["urlToImage"]}
                />
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
