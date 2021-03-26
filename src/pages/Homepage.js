import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DividerWithText from "../components/DividerWithText";
import * as ROUTES from "../routes/routes";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

export default function Homepage() {
  const history = useHistory();
  const [stockSelected, setStockSelected] = useState("");
  const [stockInput, setStockInput] = useState("");
  const [stockOptions, setStockOptions] = useState([]);
  const [isLoading, setisLoading] = useState();

  var Alpha = require("alpha_vantage_api_wrapper").Alpha;
  var alpha = new Alpha("B02YL7M1461GOMXJ");

  const searchStock = async (input) => {
    try {
      await alpha.stocks.search(input).then((res) => {
        setStockOptions(res.bestMatches);
      });
      setisLoading(false);
    } catch (e) {
      setStockInput("");
      setStockOptions([]);
      console.error("ERROR: ", e);
    }
  };

  const handleSubmit = () => {
    if (stockSelected !== "") {
      console.log(stockSelected);
      history.push(ROUTES.INDUSTRY_TABLE);
    }
    alpha.sector
      .performance()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e["Meta Data"]));
  };

  useEffect(() => {
    document.title = "Homepage";
  }, []);

  useEffect(() => {
    if (stockInput.length > 0) {
      setisLoading(true);
      setTimeout(function () {
        searchStock(stockInput);
      }, 1500);
    }
    if (stockInput.length === 0) {
      setStockInput("");
      setStockOptions([]);
    }
  }, [stockInput]);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex flex-col mx-auto w-full items-center gap-7">
        {/* HEADER */}
        <div>
          <p className="font-light font-sans text-5xl antialiased text-whitesmoke">
            Brighter
          </p>
        </div>
        {/* SEARCH COMPONENT */}
        <div className="p-3 w-full">
          <div className="bg-transparent flex rounded-full shadow-xl border-robinhoodGreen border-2">
            <Autocomplete
              id="combo-box"
              options={stockOptions}
              placeholder="Search by Stock Ticker"
              noOptionsText="Stock not available"
              getOptionLabel={(option) => option["1. symbol"]}
              loading={isLoading}
              classes={{ listbox: "yellow" }}
              loadingText="Searching for Ticker..."
              onSelect={(target) => setStockSelected(target.target.value)}
              renderOption={(option) => (
                <React.Fragment>
                  <span>
                    {option["1. symbol"]} ({option["2. name"]})
                  </span>
                </React.Fragment>
              )}
              renderInput={(params) => (
                <div className="rounded-full flex w-full py-1 px-6 leading-tight focus:outline-none">
                  <TextField
                    color="primary"
                    placeholder="Search by Stock Ticker"
                    {...params}
                    label="Search"
                    onChange={({ target }) => setStockInput(target.value)}
                    InputLabelProps={{
                      style: { color: "whitesmoke", fontWeight: "200" },
                    }}
                    SelectProps={{
                      style: { color: "whitesmoke" },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      style: { textAlign: "center", color: "whitesmoke" },
                    }}
                    style={{
                      marginRight: "15px",
                      marginBottom: "10px",
                      width: "650px",
                    }}
                  />
                  <div className="mt-2 ">
                    <IconButton
                      style={{ color: "whitesmoke" }}
                      aria-label="search"
                      onClick={handleSubmit}
                    >
                      <SearchIcon />
                    </IconButton>
                  </div>
                </div>
              )}
            />
          </div>
          {/* DIVIDER */}
          <div className="mt-10 w-4/5 ml-20">
            <DividerWithText children="Or" />
          </div>
        </div>
        {/* <div>
          <FormControl style={{ minWidth: 500 }}>
            <p className="font-thin text-align-center font-mono Consolas text-4xl antialiased">
              Test
            </p>
            <Select defaultValue="test" id="grouped-select">
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </div> */}
      </div>
    </div>
  );
}
