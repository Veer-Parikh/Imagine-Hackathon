import React, { useState } from "react";
import { Button, Typography, Switch, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Theme/ThemeProvider";
import Theme1 from "../Theme/Theme";

function SideNavbar() {
  const [selectedButton, setSelectedButton] = useState("posts");
  const { isDarkTheme, toggleTheme } = useTheme(false); // Use theme from context
  const navigate = useNavigate();

  const handleButtonClick = (buttonname, path) => {
    setSelectedButton(buttonname);
    navigate(path);
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
                    ? Theme1.palette.black.main
                    : Theme1.palette.white.main,
                color:
                  selectedButton === item.name
                    ? Theme1.palette.white.main
                    : Theme1.palette.black.main,
                width: "95%",
                padding: "8px",
                marginLeft: "1px",
                justifyContent: "center",
                borderRadius: "15px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor:
                    selectedButton === item.name
                      ? Theme1.palette.black.main
                      : Theme1.palette.grey[200],
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
              checked={isDarkTheme} // Use theme state from context
              onChange={toggleTheme} // Toggle theme using context function
              color="primary"
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "bold",
                color: isDarkTheme
                  ? Theme1.palette.white.main
                  : Theme1.palette.black.main,
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
