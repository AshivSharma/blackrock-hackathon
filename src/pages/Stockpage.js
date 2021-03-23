import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import GridInsideFlexbox from "../components/GridInsideFlexbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useState } from "react";

export default function Stockpage() {
  var Alpha = require("alpha_vantage_api_wrapper").Alpha;
  var alpha = new Alpha("X5UGPY5ZUG3ALVEX");

  const [yesterDayPrice, setYesterDayPrice] = useState();
  const [currentDayPrice, setCurrentDayPrice] = useState();

  //Fetching the data
  useEffect(async () => {
    await alpha.stocks.quote("TSLA").then((res) => {
      console.log(res);
      setYesterDayPrice(res["Global Quote"]["08. previous close"]);
      setCurrentDayPrice(res["Global Quote"]["05. price"]);
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="center"
        m={5}
        fontSize={30}
        fontWeight={100}
        fontFamily="monospace"
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
        fontFamily="monospace"
      >
        {" "}
        ESG Rating: AAA
      </Box>

      <Box display="flex" m={5}>
        <Box flexGrow={1} fontSize={20} fontWeight={100} fontFamily="monospace">
          Stock Price Yesterday: ${yesterDayPrice}
        </Box>
        <Box fontSize={20} fontWeight={100} fontFamily="monospace">
          Stock Price Today: ${currentDayPrice}
        </Box>
      </Box>

      <Card>
        <CardContent>
          <Box
            display="flex"
            alignItems="flex-center"
            m={20}
            bgcolor="background.paper"
            fontSize={15}
            fontWeight={100}
            fontFamily="monospace"
            css={{ height: 150, width: "80%" }}
          >
            <GridInsideFlexbox />A paragraph is a self-contained unit of
            discourse in writing dealing with a particular point or idea. A
            paragraph consists of one or more sentences. Though not required by
            the syntax of any language, paragraphs are usually an expected part
            of formal writing, used to organize longer prose.
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
