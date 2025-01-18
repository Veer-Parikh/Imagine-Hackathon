import React, { useState } from "react";
import { Typography, Badge, Box } from "@mui/material";
import lightTheme from "../Theme";

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      name: "John Doe",
      newMessages: 2,
      recentMessage: "Hey, are we meeting today?",
    },
    {
      name: "Jane Smith",
      newMessages: 0,
      recentMessage: "Thanks for the help!",
    },
    {
      name: "Mike Ross",
      newMessages: 5,
      recentMessage: "Let's catch up later.",
    },
    {
      name: "Rachel Green",
      newMessages: 1,
      recentMessage: "Can you share the document?",
    },
  ];

  const handleChatClick = (chatName) => {
    setSelectedChat(chatName);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <ul style={{ listStyle: "none", marginTop: "40px", padding: 0 }}>
        {chats.map((chat) => (
          <li key={chat.name} style={{ marginBottom: "16px" }}>
            <Box
              onClick={() => handleChatClick(chat.name)}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor:
                  selectedChat === chat.name
                    ? lightTheme.palette.grey[300]
                    : lightTheme.palette.white.main,
                padding: "12px 16px",
                borderRadius: "8px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: lightTheme.palette.grey[200],
                },
              }}
            >
              <Badge
                color="primary"
                badgeContent={chat.newMessages}
                invisible={chat.newMessages === 0}
                sx={{ marginRight: "16px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color:
                      selectedChat === chat.name
                        ? lightTheme.palette.black.main
                        : lightTheme.palette.grey[800],
                  }}
                >
                  {chat.name}
                </Typography>
              </Badge>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: lightTheme.palette.grey[600],
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                  marginLeft: "8px",
                }}
              >
                {chat.recentMessage}
              </Typography>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
