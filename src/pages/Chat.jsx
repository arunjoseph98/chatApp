import React, { useState, useEffect } from "react";
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UserList from "../components/UserList";
import ChatArea from "../components/ChatArea";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";

const SERVERURL = "https://chatapp-server-23u6.onrender.com"; // Update this if hosting elsewhere

const Chat = () => {
  const navigate = useNavigate()
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const [userList, setUserList] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  // Initialize Socket.IO connection
  useEffect(() => {
    const newSocket = socketIOClient(SERVERURL);
    setSocket(newSocket);
  
    // Wait for the connection to be established
    newSocket.on("connect", () => {
      console.log("Socket connected with ID:", newSocket.id);
  
      if (user) {
        newSocket.emit("userJoined", { username: user, socketId: newSocket.id });
      }
    });
  
    // Listen for chat and user events
    newSocket.on("chat", (senderChat) => setChats(senderChat));
    newSocket.on("users", (users) => setUserList(users));
  
    return () => newSocket.disconnect();
  }, [user]);
  
  

  console.log("ulist",userList);
  const sendMessage = (message) => {
    if (!message) return;
    const newChat = { user, message, time: new Date().toLocaleTimeString() };
    setChats((prev) => {
      const updatedChats = [...prev, newChat];
      socket.emit("chat", updatedChats);
      return updatedChats;
    });
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate('/')
  };

  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: { xs: "100%", sm: "50%", md: "35%", lg: "25%" }, bgcolor: "#222", color: "white", px: 1, display: { xs: "none", sm: "block" } }}>
        <UserList userList={userList} onSelect={() => setMobileOpen(false)} onLogout={logout} />
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ "& .MuiDrawer-paper": { width: "75%", bgcolor: "#222", color: "white" } }}>
        <UserList userList={userList} onSelect={() => setMobileOpen(false)} onLogout={logout} />
      </Drawer>

      {/* Chat Area */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        {!isDesktop && (
          <IconButton sx={{ position: "absolute", top: 10, left: 10, display: { xs: "block", sm: "none" }, color: "white" }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <ChatArea sendMessage={sendMessage} chats={chats} user={user} />
      </Box>
    </Box>
  );
};

export default Chat;
