import { useHistory } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";
import DividerWithText from "../components/DividerWithText";

export default function Homepage() {
  const history = useHistory();
  var Alpha = require("alpha_vantage_api_wrapper").Alpha;
  var alpha = new Alpha("B02YL7M1461GOMXJ");
  useEffect(() => {
    document.title = "Homepage";
    // alpha.stocks.intraday("AAPL").then((res) => {
    //   console.log(res);
    // });
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex flex-col mx-auto w-full items-center gap-7">
        {/* HEADER */}
        <div>
          <p class="font-thin font-mono Consolas text-3xl antialiased">
            BlackRock Hackathon
          </p>
        </div>
        {/* SEARCH COMPONENT */}
        <div className="p-3 w-full">
          <div className="bg-white flex rounded-full shadow-xl">
            <Autocomplete
              id="combo-box"
              autoComplete={true}
              autoSelect
              autoHighlight={true}
              options={top100Films}
              placeholder="Search by Stock Name or Ticker"
              noOptionsText="Stock not available"
              getOptionLabel={(option) => option.ticker}
              renderOption={(option) => (
                <React.Fragment>
                  <span>{option.ticker}</span> - {option.year}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <div class="rounded-l-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none">
                  <TextField
                    color="primary"
                    placeholder="Search by Stock Name or Ticker"
                    {...params}
                    label="Search"
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
const top100Films = [
  { ticker: "Tesla", year: "1994" },
  { ticker: "jhdakd", year: "1994" },
  { ticker: "dsnafjkas", year: "1994" },
  { ticker: "Tiruwa", year: "1994" },
  { ticker: "Tesla", year: "1994" },
  { ticker: "skjs", year: "1994" },
  { ticker: "dsfssfafnafjkas", year: "1994" },
  { ticker: "Tiruwa", year: "1994" },
  { ticker: "Tesla", year: "1994" },
  { ticker: "jdsfdsfhdakd", year: "1994" },
  { ticker: "asdhjsa", year: "1994" },
  { ticker: "Tiruwa", year: "1994" },
  { ticker: "Tesla", year: "1994" },
  { ticker: "jhdakd", year: "1994" },
  { ticker: "iuhdsjkfsh", year: "1994" },
  { ticker: "Tiruwa", year: "1994" },
];
