import React, { useState } from "react";
import { Box, TextField, IconButton, Button, Menu, MenuItem } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddIcon from "@mui/icons-material/Add"; // Import the + icon

const AddPostcard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "450px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: "8px",
        marginTop: "16px", // Add spacing
      }}
    >
      <IconButton>
        <EmojiEmotionsIcon />
      </IconButton>
      <TextField
        placeholder="Share something"
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          marginLeft: 1,
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "0 8px",
        }}
      />
      {/* <IconButton>
        <FileUploadIcon />
      </IconButton>
      <IconButton>
        <ImageIcon />
      </IconButton>
      <IconButton>
        <LocationOnIcon />
      </IconButton> */}
      <IconButton component="label" sx={{ backgroundColor: "#e0e0e0", borderRadius: "50%" }}>
        <FileUploadIcon />
        <input
          type="file"
          hidden
          accept="image/*"
          // onChange={handleImageUpload}
        />
       </IconButton>
      <IconButton onClick={handleMenuClick}>
        <PublicIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Public</MenuItem>
        <MenuItem onClick={handleMenuClose}>Family</MenuItem>
      </Menu>
      <Button
        variant="contained"
        sx={{
          marginLeft: 1,
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

const App = () => {
  const [showPostcard, setShowPostcard] = useState(false);

  const handleButtonClick = () => {
    setShowPostcard((prev) => !prev); // Toggle visibility
  };

  return (
    <Box
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={handleButtonClick}
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "gray",
          },
        }}
      >
        <AddIcon />
      </IconButton>
      {showPostcard && <AddPostcard />}
    </Box>
  );
};

export default App;
