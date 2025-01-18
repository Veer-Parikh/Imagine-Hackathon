import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import img2 from "../images/i2.jpg";
import img3 from "../images/i3.jpg";
import img4 from "../images/i4.jpg";


const ProfilePage = () => {
  const data = {
    name: "Samantha Jones",
    location: "New York, United States",
    role: "Web Producer - Web Specialist",
    education: "Columbia University - New York",
    stats: {
      friends: 5,
      photos: 643,
      comments: 721,
    },
    profilePicture: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  return (
    <>
    <Box
    sx={{
    display: "flex",
    justifyContent: "center",
    width:"100%",
  }}
>
      <Box
        sx={{
          width: "80%",
          padding: 2,
        }}
      >
        <Avatar
          src={data.profilePicture}
          alt={data.name}
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            marginBottom: 2,
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.location}
        </Typography>
        <Typography variant="body1" sx={{ marginY: 1 }}>
          {data.role}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          {data.education}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: 2,
            paddingX: 3,
          }}
        >
          <Box textAlign="center">
            <Typography variant="h6">{data.stats.friends}</Typography>
            <Typography variant="body2" color="text.secondary">
              Posts
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">{data.stats.photos}</Typography>
            <Typography variant="body2" color="text.secondary">
              Followers
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">{data.stats.comments}</Typography>
            <Typography variant="body2" color="text.secondary">
              Following
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>

    <Box>
      
      <Grid container spacing={2} style={{justifyContent:'center'}}>
        <Grid item xs={4}>
          <img src={img2} style={{width:'230px', height:'230px', }} />
        </Grid>
        <Grid item xs={4}>
          <img src={img3} style={{width:'230px', height:'230px'}} />
        </Grid>
        <Grid item xs={4}>
          <img src={img4} style={{width:'230px', height:'230px'}} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default ProfilePage;