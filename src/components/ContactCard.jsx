import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const ContactCard = ({ username, status, onClick }) => {

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
      width: 56, height: 56
    },
    children: `${name.at(0)}`,
  };
}
// ********************

  return (
    <Card
      sx={{
        width: "100%", // Makes sure it fills the ListItem
        bgcolor: "gray",
        color: "white",
        mt: 1,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": { bgcolor: "#4a4a4a" }, // Darker gray on hover
      }}
      onClick={onClick}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* User Avatar */}
        <Avatar  {...stringAvatar(username)}/>
        
        {/* Contact Details */}
        <Box>
          <Typography variant="h6">{username}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Status Indicator */}
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: status === "online" ? "green" : "red",
              }}
            />
            <Typography variant="body2">{status}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
