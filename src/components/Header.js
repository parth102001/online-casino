import React from "react";
import "./css/Header.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const Header = (props) => {
  const handleLogin = () => {
    props.loginFunc();
  };
  const handleLogout = () => {
    props.logoutFunc();
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <h1>Parth Singh</h1>
        <Tooltip title="Balance">
          <p
            style={{
              cursor: "pointer",
              border: "1px solid red",
            }}
          >{`$${props.balance}`}</p>
        </Tooltip>
      </div>
      <div className="headerRight">
        {!props.login && (
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
        )}
        {props.login && (
          <Button onClick={handleLogout} color="error" variant="contained">
            Logout
          </Button>
        )}
        {props.login && (
          <Tooltip title="User">
            <Avatar src="/broken-image.jpg" />
          </Tooltip>
        )}
        {!props.login && (
          <Tooltip title="Guest">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>G</Avatar>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Header;
