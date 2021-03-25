import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgColor: {
    borderColor: "error.main",
    width: "100%",
    height: "100%",
  },

  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: "90%",
  },
  image: {
    width: 128,
    height: 128,
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function NewsComp(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.bgColor}>
        <Paper
          style={{
            marginBottom: 10,
            borderColor: "#98FB98",
            borderWidth: 2,
            backgroundColor: "#121212",
            color: "white",
          }}
          className={classes.paper}
        >
          <Grid container spacing={4}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img classname={classes.img} src={props.image} />{" "}
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <h1>{props.title}</h1>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography>
                {" "}
                <a href={props.link} style={{ color: "rgba(59, 200, 246)" }}>
                  Link{" "}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

//import GridInsideFlexbox from "./GridInsideFlexBox";
//import Container from "@material-ui/core/Container";
//import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
//import Grids from "./Grids";
//import Typography from "@material-ui/core/Typography";
//import ButtonBase from "@material-ui/core/ButtonBase";
//import { Container } from "react-bootstrap";

/*const useStyles = makeStyles((theme) => ({
  paper: {
    height: 90,
    width: 200,
    // marginLeft: 30,
    // marginTop: 10,
  },
}));*/

/* 
      <Box
        display="flex"
        alignItems="flex-center"
        bgcolor="yellow"
        fontSize={15}
        fontWeight={100}
        fontFamily="monospace"
        css={{ height: 150, width: "80%" }}
      >
        
      </Box> 
<Box>
            <img src={props.image} />
          </Box>
          <Box flexGrow={1} style={{ marginLeft: 100 }} flexGrow={1}>
            <h1>{props.title}</h1>
          </Box>
          <Box alignItems={"flex-end"}>
            <a href={props.link} style={{ color: "blue" }}>
              Link{" "}
            </a>
          </Box>{" "} */
