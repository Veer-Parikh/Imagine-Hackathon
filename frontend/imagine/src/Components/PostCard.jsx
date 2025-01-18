import React from "react";
import { Card, CardContent, CardMedia, Avatar, Typography, IconButton, Box, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Grid from "@mui/material/Grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import img1 from "../images/img1.jpg";

// Dummy Data
const postData = [
  {
    id: 1,
    name: "George Lobko",
    message: "Hi everyone, today I was on the most beautiful mountain in the world 😍!",
    mentioned: ["Silena", "Olya", "Davis"],
    views: 6355,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: 2,
    name: "Anna Smith",
    message: "The beach was amazing! Feeling so refreshed 🌊",
    mentioned: ["James", "Nina"],
    views: 4521,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: 3,
    name: "Robert Brown",
    message: "Had the best time at the park with family 🌳",
    mentioned: ["Alice", "Tom"],
    views: 7892,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: 4,
    name: "Emily White",
    message: "Can't believe how beautiful the sunset was 🌅",
    mentioned: ["Sam", "Lila"],
    views: 5623,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
];

const PostCard = ({ name, message, mentioned, views, images }) => {
  return (
    <Box sx={{width: "100%", margin: "auto"}}>
      <CardContent style={{paddingLeft:'25px', paddingTop:'25px'}}>
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
         
            <Grid item xs={4} >
              <CardMedia
                component="img"
                image={img1}
                sx={{ borderRadius: 1, width:'120%', height:"450px", width:"400px", paddingLeft:'250px'}}
              />
            </Grid>
       
        </Grid>

        {/* Actions */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <IconButton>
            <FavoriteIcon />
            </IconButton>
            <Typography variant="body2">{views}</Typography>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Box>
         
          </Box>
          <Typography variant="body2" color="text.secondary" textAlign="left" mt={1}>
          {message}{" "}
        </Typography>


    
      </CardContent>
    </Box>
  );
};

const App = () => {
  return (
    <Grid container spacing={3} justifyContent="center" style={{width:'100%'}}>
      {postData.map((post) => (
        <Grid item key={post.id} xs={12}>
          <PostCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
