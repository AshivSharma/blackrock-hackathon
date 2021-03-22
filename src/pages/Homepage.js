import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DividerWithText from "../components/DividerWithText";
import * as ROUTES from "../routes/routes";

export default function Homepage() {
  const history = useHistory();
  const [stockSelected, setStockSelected] = useState("");
  const [stockInput, setStockInput] = useState("");
  const [stockOptions, setStockOptions] = useState([]);

  var Alpha = require("alpha_vantage_api_wrapper").Alpha;
  var alpha = new Alpha("B02YL7M1461GOMXJ");

  const searchStock = async (input) => {
    try {
      await alpha.stocks.search(input).then((res) => {
        setStockOptions(res.bestMatches);
      });
    } catch (e) {
      setStockInput("");
      setStockOptions([]);
      console.error("ERROR: ", e);
    }
  };

  useEffect(() => {
    document.title = "Homepage";
  }, []);

  useEffect(() => {
    if (stockInput.length > 0) {
      searchStock(stockInput);
    }
    if (stockInput.length === 0) {
      setStockInput("");
      setStockOptions([]);
    }
  }, [stockInput]);
  // useEffect(() => {
  //   if (stockSelected !== "") {
  //     //history.push("/industrytable");
  //   }
  // }, [stockSelected]);
  console.log("stockinput", stockInput);
  console.log("stockSelected", stockSelected);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex flex-col mx-auto w-full items-center gap-7">
        {/* HEADER */}
        <div>
          <p className="font-thin font-mono Consolas text-3xl antialiased">
            BlackRock Hackathon
          </p>
        </div>
        {/* SEARCH COMPONENT */}
        <div className="p-3 w-full">
          <div className="bg-white flex rounded-full shadow-xl">
            <Autocomplete
              id="combo-box"
              autoHighlight={true}
              options={stockOptions}
              placeholder="Search by Stock Name or Ticker"
              noOptionsText="Stock not available"
              getOptionLabel={(option) => option["2. name"]}
              renderOption={(option) => (
                <React.Fragment>
                  <span>
                    {option["2. name"]} ({option["1. symbol"]})
                  </span>
                </React.Fragment>
              )}
              renderInput={(params) => (
                <div className="rounded-l-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none">
                  <TextField
                    color="primary"
                    autoFocus
                    placeholder="Search by Stock Name or Ticker"
                    {...params}
                    label="Search"
                    onChange={({ target }) => setStockInput(target.value)}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      style: { textAlign: "center" },
                    }}
                    style={{
                      marginRight: "15px",
                      marginBottom: "10px",
                      width: "700px",
                    }}
                  />
                </div>
              )}
            />
          </div>
          {/* DIVIDER */}
          <div className="mt-10 w-4/5 ml-16">
            <DividerWithText children="Or" />
          </div>
        </div>
      </div>
    </div>
  );
}
