import React from 'react';
import SideNavbar from '../Components/SideNavbar';
import PostCard from '../Components/PostCard';
import Grid from "@mui/material/Grid2"
import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
        <Box style={{marginTop:'50px', marginLeft:'20px'}}>
        <Typography style={{fontSize:'30px', textAlign:'left', fontWeight:600, marginBottom:'15px'}}>
          Blogs
        </Typography>

        <div >
          <PostCard />
        </div>
        </Box>
    </>
  )
}

export default HomePage;