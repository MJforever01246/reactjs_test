import React, { Fragqment } from "react";
import { useStyles } from "./ContentScreen.styles";
import './ContentScreen.css'
export const ContentScreen_flex = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      {/* <div className={classes.test3}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      </div>
      <div className={classes.test3}>I'm a flexbox container!</div> */}
      <div className="row2">
        <div className="square">Text</div>
        <div className="square">Anh</div>
      </div>
      <div className="row">
        <div className=" ">Anh1</div>
        <div className="square">Anh2</div>
        <div className="square">Anh3</div>
        <div className="square">Anh4</div>
      </div>
    </React.Fragment>
  );
};

