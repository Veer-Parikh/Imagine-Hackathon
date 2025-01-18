import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import signupImage from "../images/signup.png";
import axios from "axios"

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    const signUpData = {
      username,
      password,
      email,
      phonenumber: phoneNumber,
      age,
    };

    try {
      const response = await axios.post(
        "https://imagine-hackathon.onrender.com/user/signup",
        signUpData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      alert("Signup successful. OTP sent to your phone.");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        border: 2,
        pl: 10,
        ml: "8%",
        mr: "8%",
        mt: "2%",
        mb: "2%",
        borderRadius: 8,
        overflow: "hidden",
        border: `1.5px solid #624391`,
        boxShadow: "0 15px 20px rgba(98, 67, 145, 0.2)",
        zIndex: 999,
      }}
    >
      <Grid container>
        {/* Left Side: Form */}
        <Grid
          item
          xs={6}
          sx={{
            padding: 5,
            height: "90vh",
            width:'50%'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            Glad to have you on board!
          </Typography>
          <TextField
            id="filled-basic-name"
            label="Username"
            name="username"
            type="text"
            autoFocus
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 3, width: "100%" }}
          />
          <TextField
            id="filled-basic-email"
            label="Email"
            name="email"
            type="text"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3, width: "100%" }}
          />
          <TextField
            id="filled-basic-password"
            label="Password"
            name="password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3, width: "100%" }}
          />
          <TextField
            id="filled-basic-phone"
            label="Mobile Number"
            name="mobile"
            type="tel"
            variant="filled"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ mb: 3, width: "100%" }}
          />
          <TextField
            id="filled-basic-age"
            label="Age"
            name="age"
            variant="filled"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ mb: 3, width: "100%" }}
          />
          <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
            <Button
              sx={{ backgroundColor: "#624391", width: "100%" }}
              variant="contained"
              onClick={handleSignUp}
            >
              SIGN UP
            </Button>
          </Stack>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:'50%'
          }}
        >
          <img
            src={signupImage}
            alt="Sign Up"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
