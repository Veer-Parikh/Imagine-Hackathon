import React, { useState } from "react";
import { Button, Typography, Switch, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import lightTheme from "../Theme";


function SideNavbar() {
  const [selectedButton, setSelectedButton] = useState("posts");
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state
  const navigate = useNavigate();

  const handleButtonClick = (buttonname, path) => {
    setSelectedButton(buttonname);
    navigate(path);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      style={{
        textAlign: "left",
        height: "100vh",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
                marginLeft: "1px",
                justifyContent: "center",
                borderRadius: "15px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor:
                    selectedButton === item.name
                      ? lightTheme.palette.black.main
                      : lightTheme.palette.grey[200],
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

      {/* Theme Toggle Switch */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <FormControlLabel
          control={
            <Switch
              checked={isDarkTheme}
              onChange={handleThemeToggle}
              color="primary"
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "bold",
                color: isDarkTheme
                  ? lightTheme.palette.white.main
                  : lightTheme.palette.black.main,
              }}
            >
              {isDarkTheme ? "Light" : "Dark"}
            </Typography>
          }
          labelPlacement="end"
        />
      </div>
    </div>
  );
}

export default SideNavbar;
