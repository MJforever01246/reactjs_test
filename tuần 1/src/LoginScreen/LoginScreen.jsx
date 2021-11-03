import React, { Fragment } from "react";
import { useStyles } from "./LoginScreen.styles";
export const LoginScreen = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
        <div className={classes.flex}>
        <div className={classes.test}>LoginScreen</div>
      <div className={classes.test2}>Test 4</div>
        </div>
   
    </Fragment>
  );
};
