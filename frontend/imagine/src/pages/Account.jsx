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
import photo from "../images/photo.png";
import texts from "../images/text-size.png";
import AddPostcard from "../Components/AddPostcard";
import { useTheme } from "../Theme/ThemeProvider"; 
import Theme1 from "../Theme/Theme";


const ProfilePage = () => {

  const { isDarkTheme } = useTheme(); 

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
    <Box style={{height:'100vh'}}>
    <Box
    sx={{
    display: "flex",
    justifyContent: "center",
    width:"100%",
    backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main,
    color: isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main
  }}
>
      <Box>
        <Avatar
          src={data.profilePicture}
          alt={data.name}
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            marginBottom: 2,
            textAlign:'center'
          }}
        />
        <Typography variant="h6" fontWeight="bold" textAlign='center' color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>
          {data.name}
        </Typography>
        <Typography variant="body2" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main} textAlign='center'>
          {data.location}
        </Typography>
        <Typography variant="body1" textAlign='center' color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main} sx={{ marginY: 1 }}>
          {data.role}
        </Typography>
        <Typography variant="body2" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main} textAlign='center' sx={{ marginBottom: 2 }}>
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
          <Box textAlign="center" marginLeft='30px' marginRight='200px'>
            <Typography variant="h6" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>{data.stats.friends}</Typography>
            <Typography variant="body2" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>
              Posts
            </Typography>
          </Box>
          <Box textAlign="center" marginRight='180px'>
            <Typography variant="h6" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>{data.stats.photos}</Typography>
            <Typography variant="body2" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>
              Followers
            </Typography>
          </Box>
          <Box textAlign="center" marginLeft='30px'>
            <Typography variant="h6" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>{data.stats.comments}</Typography>
            <Typography variant="body2" color={isDarkTheme?Theme1.palette.white.main:Theme1.palette.black.main}>
              Following
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>

    <Box>

    <Box
  style={{
    borderBottom: "2px solid #ccc",
    paddingLeft: "62px",
    paddingRight: "62px",
    paddingBottom: "2px",
    backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main
  }}
>
  <Grid container style={{  backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main}}>
    <Grid
      item
      xs={6}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'50%'
      }}
    >
      <Button>
        <img src={photo} style={{ width: "29px" }} alt="Photo Icon" />
      </Button>
    </Grid>

    <Grid
      item
      xs={6}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'50%'
      }}
    >
      <Button>
        <img src={texts} style={{ width: "29px" }} alt="Text Icon" />
      </Button>
    </Grid>
  </Grid>
</Box>


      <Grid container spacing={2} style={{justifyContent:'center', paddingTop:'10px',   backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main}}>
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

    <Box style={{  backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main}}>
      <AddPostcard/>
    </Box>

    </Box>
    </>
  );
};

export default ProfilePage;