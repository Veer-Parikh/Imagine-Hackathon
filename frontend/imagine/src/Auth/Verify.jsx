import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export const OTPVerification = () => {
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    if (otp.trim() === "") {
      alert("Please enter the OTP.");
      return;
    }
    // Perform OTP verification logic here
    console.log("Entered OTP:", otp);
    alert("OTP verified successfully!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          width: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          OTP Verification
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Enter the OTP sent to your registered number.
        </Typography>
        <TextField
          label="Enter OTP"
          variant="outlined"
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Stack spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerifyOTP}
            sx={{ textTransform: "none" }}
          >
            Verify OTP
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
