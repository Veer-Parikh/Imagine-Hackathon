import React from 'react';
import SideNavbar from '../Components/SideNavbar';
import PostCard from '../Components/PostCard';
import { Box, Card, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";


const AccountPage = () => {

    const chat = [
        {
          name: "John Doe",
          newMessages: 2,
          recentMessage: "Hey, are we meeting today?",
        }
      ];

  return (
    <>

        <Typography>username</Typography>

        <Box>
        <Grid container>
        <img />
            <Grid item><Typography>Posts</Typography></Grid>
            <Grid item><Typography>Followers</Typography></Grid>
            <Grid item><Typography>Following</Typography></Grid>
        </Grid>
        
        </Box>

    </>
  )
}

export default AccountPage;