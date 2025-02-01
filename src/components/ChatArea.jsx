import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Paper, styled, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubble from "./ChatBubble";
import logo from "../assets/echo-03.png";

const ChatArea = ({ sendMessage, chats, user }) => {
  const [message, setMessage] = useState("");
  const chatEndRef = useRef(null);
   
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const addMessage = () => {
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ pt: 1, bgcolor: "#00B09C" }}>
        <Typography variant="h6" sx={{ px: 6 }}>
          <img height="40px" src={logo} alt="Logo" />
        </Typography>
      </Box>

      {/* Chat messages */}
      <Paper sx={{ borderRadius: 0, flex: 1, overflowY: "auto", p: 2, color: "white" }}>
        {chats.map((chat, index) => (
          <ChatBubble key={index} msg={chat.message} sender={chat.user} isSender={chat.user === user} time={chat.time}/>
        ))}
        <div ref={chatEndRef} />
      </Paper>

      {/* Message Input */}
      <Box sx={{ display: "flex", p: 2, bgcolor: "#111" }}>
        <TextField fullWidth placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button color="secondary" variant="contained" sx={{ ml: 2, borderRadius: 10 }} onClick={addMessage}>
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatArea;
