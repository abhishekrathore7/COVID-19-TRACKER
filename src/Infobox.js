import React from 'react';
import "./Infobox.css";
import {Card, CardContent, Typography } from "@material-ui/core";

function Infobox({title,cases,active,isRed, isGreen, isCoral, total, ...props}) {
    return (
        <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        } ${isGreen && "infoBox--green"} ${isCoral && "infoBox--coral"}`}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases}
          </h2>
  
          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Infobox


