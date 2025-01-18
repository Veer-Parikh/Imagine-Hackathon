import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import lightTheme from "../Theme";

function SideNavbar() {
  const [selectedButton, setSelectedButton] = useState("posts");
  const navigate = useNavigate();

  const handleButtonClick = (buttonname, path) => {
    setSelectedButton(buttonname);
    navigate(path);
  };

  return (
    <div style={{ textAlign: "left", height:'100vh', marginLeft:'20px'}}>
      <ul style={{ listStyle: "none", marginTop: "40px", padding: 0 }}>
        {[
          { name: "posts", path: "/", label: "Posts" },
          { name: "friends", path: "/friends", label: "Friends" },
          { name: "newsfeed", path: "/newsfeed", label: "News" },
          { name: "account", path: "/account", label: "Account" },
          { name: "logout", path: "/materialrecommendations", label: "Logout" },
        ].map((item) => (
          <li key={item.name}>
            <Button
  onClick={() => handleButtonClick(item.name, item.path)}
  sx={{
    backgroundColor:
      selectedButton === item.name
        ? lightTheme.palette.black.main
        : lightTheme.palette.white.main,
    color:
      selectedButton === item.name
        ? lightTheme.palette.white.main
        : lightTheme.palette.black.main,
    width: "95%",
    padding: "8px",
    paddingTop:'10px',
    paddingBottom: '10px',
    marginLeft: "1px",
    justifyContent: "center",
    borderRadius: "15px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor:
        selectedButton === item.name
          ? lightTheme.palette.black.main // Keep black.main for the selected button
          : lightTheme.palette.grey[200], // Hover effect for unselected buttons
    },
  }}
>
  <Typography
    style={{
      fontSize: "110%",
      textTransform: "none",
      textAlign: "center",
    }}
  >
    {item.label}
  </Typography>
</Button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavbar;