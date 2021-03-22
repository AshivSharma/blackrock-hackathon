import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 120,
    width: 200,
    marginLeft: 30,
    marginTop: 10,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  //const handleChange = (event) => {
  //setSpacing(Number(event.target.value));
  //};

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item s={12}>
        <Grid container alignItems="flex-start" spacing={spacing}>
          {[0].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
