import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-CountUp";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of Active cases of COVID - 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Recoverd
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of Recovered cases of COVID - 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of Deaths by COVID - 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
