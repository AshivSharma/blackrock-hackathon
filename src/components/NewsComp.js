import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgColor: {
    borderColor: "error.main",
    width: "70%",
    height: "100%",
  },

  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    width: "100%",
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
        <Grid
          style={{
            marginBottom: 20,
            borderColor: "#98FB98",
            height: 150,
            borderWidth: 2,
            backgroundColor: "#242425",
            color: "whitesmoke",
          }}
          container
          spacing={2}
        >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={props.image} />{" "}
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={4}>
              <Grid item xs>
                <Typography
                  variant="button"
                  style={{
                    fontWeight: 300,
                  }}
                >
                  {props.title}
                </Typography>
                <Typography
                  style={{
                    fontSize: 7,
                    marginTop: 5,
                  }}
                  variant="overline"
                  display="block"
                  gutterBottom
                >
                  {props.description}
                </Typography>
                <Typography
                  style={{ fontSize: 8 }}
                  variant="caption"
                  display="block"
                >
                  {props.date}
                </Typography>
              </Grid>
            </Grid>
            <Grid alignItems="flex-end" item>
              <ButtonBase>
                <a href={props.link} style={{ color: "rgba(59, 200, 246)" }}>
                  Link
                </a>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
