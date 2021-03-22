import React from "react";
import Box from "@material-ui/core/Box";
import GridInsideFlexbox from "../components/GridInsideFlexbox";

export default function Stockpage() {
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
          Stock Price Yesterday: $400
        </Box>
        <Box fontSize={20} fontWeight={100} fontFamily="monospace">
          Stock Price Today: $200
        </Box>
      </Box>
      <div>
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
          <GridInsideFlexbox />A paragraph is a self-contained unit of discourse
          in writing dealing with a particular point or idea. A paragraph
          consists of one or more sentences. Though not required by the syntax
          of any language, paragraphs are usually an expected part of formal
          writing, used to organize longer prose.
        </Box>
      </div>
    </div>
  );
}
