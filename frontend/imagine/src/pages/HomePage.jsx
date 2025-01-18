import React from 'react';
import SideNavbar from '../Components/SideNavbar';
import PostCard from '../Components/PostCard';
import Grid from "@mui/material/Grid2"

const HomePage = () => {
  return (
    <>
      <div style={{display:'flex'}}>
        <div style={{width:'600px'}}>
          <PostCard />
        </div>
        <div style={{width:'600px'}}>
          <PostCard />
        </div>
      </div>

    </>
  )
}

export default HomePage;