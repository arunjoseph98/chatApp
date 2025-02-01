import React from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import ContactCard from "./ContactCard";

const UserList = ({ userList, onLogout }) => {
  
  
  return (
    <Box sx={{ width: "100%", color: "white", p: 2, position: "relative", height: "100vh" }}>
      <Typography variant="h6" gutterBottom>Active Users</Typography>
      <Box sx={{ height: "70vh", overflowY: "auto", p: 1 }}>
        <List sx={{ p: 0 }}>
          {userList.map((user, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ContactCard username={user.username} status="online" />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ position: "absolute", bottom: 50, right: 16 }}>
        <Button variant="contained" color="error" onClick={onLogout}>Log Out</Button>
      </Box>
    </Box>
  );
};

export default UserList;
