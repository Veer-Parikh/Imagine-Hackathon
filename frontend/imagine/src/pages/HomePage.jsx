import React from 'react';
import SideNavbar from '../Components/SideNavbar';
import PostCard from '../Components/PostCard';
import Grid from "@mui/material/Grid2"
import { Typography, Box } from '@mui/material';
import { useTheme } from "../Theme/ThemeProvider"; 
import Theme1 from "../Theme/Theme";

const HomePage = () => {

  const { isDarkTheme } = useTheme(); 

  return (
    <>
        <Box style={{marginTop:'-10px', paddingTop:'60px', paddingLeft:'20px',  backgroundColor: isDarkTheme?Theme1.palette.dark.main:Theme1.palette.white.main, overflowX:'hidden'}}>
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