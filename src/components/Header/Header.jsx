import React from "react";
import "./Header.css";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <Grid container className="header-container">
      <Grid item>
        <div className="header-text">
          <h1>Hello, Puneet Dhiman</h1>
          <p>following is your organization’s performance summary</p>
        </div>
        <div className="header-text-mobile">
          <h1>Hello, Puneet Dhiman</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
