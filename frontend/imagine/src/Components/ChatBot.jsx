import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const ChatBot = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setResponseText("");
  
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBPbigdbFxpvc9vISE2jvhJpu1r_RTxlqs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: inputText }] }],
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch response from the Gemini API.");
      }
  
      const data = await response.json();
  
      // Parse the response
      const output =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      setResponseText(output);
    } catch (error) {
      setResponseText("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        height: "100%",
        margin: "0 auto",
        padding: 3,
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: 2,
        mt: 5,
      }}
    >
      <Typography variant="h4" mb={3}>
        Gemini Chatbot
      </Typography>
      <TextField
        label="Ask something..."
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        disabled={loading}
      >
        Send
      </Button>
      {loading && (
        <Box mt={2}>
          <CircularProgress />
        </Box>
      )}
      {responseText && (
        <Box mt={2} p={2} bgcolor="#f9f9f9" height="100%" borderRadius={1}>
          <Typography>{responseText}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChatBot;