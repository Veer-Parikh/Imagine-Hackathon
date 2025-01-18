import React, { useState } from "react";
import { CardContent, CardMedia, Avatar, Typography, IconButton, Box, Grid } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import img1 from "../images/img1.jpg";
import d from "../images/dark-theme.png";
import l from "../images/light-theme.png";

// Dummy Data
const postData = [
  {
    id: 1,
    name: "George Lobko",
    message: "Hi everyone, today I was on the most beautiful mountain in the world 😍!",
    mentioned: ["Silena", "Olya", "Davis"],
    views: 6355,
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 2,
    name: "Anna Smith",
    message: "The beach was amazing! Feeling so refreshed 🌊",
    mentioned: ["James", "Nina"],
    views: 4521,
    images: ["https://via.placeholder.com/150"],
  },
];

const PostCard = ({ name, message, views, images }) => {
  const [toggleIcon, setToggleIcon] = useState(d); // State to manage the toggle icon

  const handleToggle = () => {
    setToggleIcon((prev) => (prev === d ? l : d)); // Toggle between `d` and `l`
  };

  return (
    <Box sx={{ width: "100%", margin: "auto", marginLeft:'160px'}}>
      <CardContent style={{ paddingLeft: "25px", paddingTop: "25px" }}>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: "#6C63FF", mr: 2 }}>{name[0]}</Avatar>
            <Typography variant="subtitle1" fontWeight="bold">
              {name}
            </Typography>
          </Box>
        </Box>

        {/* Image Gallery */}
        <Grid container spacing={1} mt={1}>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={img1}
              sx={{
                borderRadius: 1,
                width: "120%",
                height: "450px",
                width: "400px",
              }}
            />
          </Grid>
        </Grid>

        {/* Actions */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleToggle}>
              <CardMedia
                component="img"
                image={toggleIcon}
                sx={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography variant="body2">{views}</Typography>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Message */}
        <Typography variant="body2" color="text.secondary" textAlign="left" mt={1}>
          {message}{" "}
        </Typography>
      </CardContent>
    </Box>
  );
};

const App = () => {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ width: "100%" }}>
      {postData.map((post) => (
        <Grid item key={post.id} xs={12}>
          <PostCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
