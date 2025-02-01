import React from "react";
import { Box, Typography, Avatar, useTheme } from "@mui/material";

const ChatBubble = ({ msg, sender, time, isSender,  }) => {
    const theme = useTheme();
    
    //******************* */

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 40, height: 40, 
        mr: isSender ? 0 :1,
        ml: isSender ? 1 :0
      },
      children: `${name.at(0)}`,
    };
  }
  // ********************

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: isSender ? "flex-end" : "flex-start" }}>
      {!isSender && <Avatar sx={{ mr: 1 }}>{sender[0]}</Avatar>}
      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: isSender ? "#007AFF" : "#444", color: "white", maxWidth: "60%" }}>
        <Typography variant="caption" sx={{ textAlign:isSender ? "right" :"left",fontWeight: "bold", display: "block" }}>{sender}</Typography>
        <Typography>{msg}</Typography>
        <Typography variant="caption" sx={{ textAlign:isSender ? "right" :"left",fontSize: "0.70rem", opacity: 0.7, display: "block" }}>{time}</Typography>
      </Box>
      {isSender && <Avatar sx={{ ml: 1 }}>{sender[0]}</Avatar>}
    </Box>
  );
};

export default ChatBubble;
