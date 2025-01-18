import React from "react";
import { Card, CardContent, CardMedia, Avatar, Typography, IconButton, Box, Button, } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import Grid from "@mui/material/Grid2";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PostCard = () => {
  return (
    <Card sx={{maxWidth:'500px', margin: "auto", borderRadius: 3, boxShadow: 3, bgcolor:"#dfebff" }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: "#6C63FF", mr: 2 }}>G</Avatar>
            <Typography variant="subtitle1" fontWeight="bold">
              George Lobko
            </Typography>
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Hi everyone, today I was on the most beautiful mountain in the world{" "}
          <span role="img" aria-label="emoji">
            😍
          </span>
          , I also want to say hi to{" "}
          <Typography component="span" color="primary" fontWeight="bold">
            Silena
          </Typography>
          ,{" "}
          <Typography component="span" color="secondary" fontWeight="bold">
            Olya
          </Typography>
          , and{" "}
          <Typography component="span" color="error" fontWeight="bold">
            Davis
          </Typography>
          !
        </Typography>

        {/* Image Gallery */}
        <Grid container spacing={1} mt={1}>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="80"
              image="https://via.placeholder.com/150"
              alt="Image 1"
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="80"
              image="https://via.placeholder.com/150"
              alt="Image 2"
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="80"
              image="https://via.placeholder.com/150"
              alt="Image 3"
              sx={{ borderRadius: 1 }}
            />
          </Grid>
        </Grid>

        {/* Actions */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <IconButton>

              <RemoveRedEyeIcon/>
            </IconButton>
            <Typography variant="body2">6355</Typography>
            <IconButton>
                <FavoriteIcon/>
                
            
            </IconButton>
            <IconButton>
                <CommentIcon/>
                
            
            </IconButton>
          </Box>
          <Button
            variant="contained"
            startIcon={<EmojiEmotionsIcon />}
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              textTransform: "none",
              borderRadius: 3,
              fontWeight: "bold",
            }}
          >
            Woow!!!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
