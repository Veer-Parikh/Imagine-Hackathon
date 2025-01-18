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
    <div style={{ textAlign: "left" }}>
      <ul style={{ listStyle: "none", marginTop: "40px", padding: 0 }}>
        {[
          { name: "posts", path: "/posts", label: "Posts" },
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
                width: "17%",
                padding: "8px",
                marginLeft: "1px",
                justifyContent: "center",
                borderRadius: '15px',
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                if (selectedButton !== item.name) {
                  e.currentTarget.style.backgroundColor =
                    lightTheme.palette.grey[200];
                }
              }}
              onMouseOut={(e) => {
                if (selectedButton !== item.name) {
                  e.currentTarget.style.backgroundColor =
                    lightTheme.palette.white.main;
                }
              }}
            >
              <Typography
                style={{
                  fontSize: "110%",
                  textTransform: "none",
                  textAlign:'center'
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
