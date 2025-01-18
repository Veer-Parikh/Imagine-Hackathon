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


const ProfilePage = () => {

  const { isDarkTheme } = useTheme(); 

  const styles = {
    container: {
      color: isDarkTheme ? "#fff" : "#000",
      borderRadius: "8px",
      padding: "16px",
    },
  }

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
      <Box sx={styles.container}>
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
        <Typography variant="h6" fontWeight="bold" textAlign='center'>
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='center'>
          {data.location}
        </Typography>
        <Typography variant="body1" textAlign='center' sx={{ marginY: 1 }}>
          {data.role}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ marginBottom: 2 }}>
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
          <Box textAlign="center" marginLeft='30px'>
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

    <Box
  style={{
    borderBottom: "2px solid #ccc",
    marginLeft: "62px",
    marginRight: "62px",
    paddingBottom: "2px",
  }}
>
  <Grid container>
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


      <Grid container spacing={2} style={{justifyContent:'center', marginTop:'10px'}}>
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

    <Box>
      <AddPostcard/>
    </Box>
    </>
  );
};

export default ProfilePage;