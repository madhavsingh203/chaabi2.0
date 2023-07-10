import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/Category.png";
import trainingIcon from "../../assets/images/Game.png";
import usersIcon from "../../assets/images/Ticket Star.jpg";
import locationIcon from "../../assets/images/Location.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Sider = () => {
  const sidebarMenu = [
    {
      icon: menuIcon,
      title: "Dashboard"
    },
    {
      icon: trainingIcon,
      title: "Training"
    },
    {
      icon: usersIcon,
      title: "Users"
    },
    {
      icon: locationIcon,
      title: "Analytcs"
    },
    {
      icon: locationIcon,
      title: "My Accounts"
    },
    {
      icon: locationIcon,
      title: "Support"
    }
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <img src={logo} />
      </div>
      <div className="sidebar-bottom">
        <ul>
          {sidebarMenu.map((item, index) => (
            <li key={index}>
              <img src={item.icon} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sider;
