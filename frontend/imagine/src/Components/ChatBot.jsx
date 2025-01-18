import React, { useState } from "react";
import { Box, Avatar, TextField, Button, Typography, CircularProgress } from "@mui/material";
import Theme1 from "../Theme/Theme";
import chaticon from "../images/chat.png"

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    setLoading(true);
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBPbigdbFxpvc9vISE2jvhJpu1r_RTxlqs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage.text }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response from the Gemini API.");
      }

      const data = await response.json();
      const chatbotResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

      const botMessage = { text: chatbotResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "An error occurred while fetching the response.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "8px",
        minHeight: "90vh",
        maxHeight: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "white",
        color: "white",
        padding: "16px",
      }}
    >
   
      <Typography
      sx={{
        fontWeight:'bold',
        fontSize:"24px",
        
      }}>
        Chat
      </Typography>
      {/* Chat Display */}
      <Box
        sx={{
          flex: 1,
          borderRadius: "50px",
          overflowY: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: messages.length === 0 ? "center" : "flex-start",
          justifyContent: messages.length === 0 ? "center" : "flex-start",
          gap: "12px",
        }}
      >
        {messages.length === 0 ? (
  <Box
    component="img"
    src={chaticon} // Replace with your image URL
    alt="No messages"
    sx={{
      maxWidth: "50%",
      borderRadius: "8px",
    }}
  />
) : (
  messages.map((message, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        justifyContent:
          message.sender === "user" ? "flex-end" : "flex-start",
      }}
    >
      {message.sender === "bot" && (
        <Avatar
          sx={{
            bgcolor: "#c9B1ff",
            marginRight: "8px",
            alignSelf: "flex-start",
          }}
        >
          AI
        </Avatar>
      )}
      <Box
        sx={{
          maxWidth: "70%",
          padding: "12px",
          borderRadius: "16px",
          backgroundColor:
            message.sender === "user"
              ? "#c9B1ff"
              : Theme1.palette.black.main,
          color:
            message.sender === "user"
              ? Theme1.palette.black.main
              : Theme1.palette.white.main,
        }}
      >
        <Typography>{message.text}</Typography>
      </Box>
      {message.sender === "user" && (
        <Avatar
          sx={{
            bgcolor: "#444",
            marginLeft: "8px",
            alignSelf: "flex-end",
          }}
        >
          U
        </Avatar>
      )}
    </Box>
  ))
)}

        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <CircularProgress sx={{ color: "#c9B1ff" }} />
          </Box>
        )}
      </Box>

      {/* Input Box */}
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          padding: "8px",
          backgroundColor: "#c9B1ff",
          borderRadius: "8px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#c9B1ff", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#c9B1ff", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#c9B1ff", // Border color when focused
              },
            },
            input: { color: Theme1.palette.black.main },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={loading}
          sx={{
            bgcolor: Theme1.palette.black.main,
            color: Theme1.palette.white.main,
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBot;