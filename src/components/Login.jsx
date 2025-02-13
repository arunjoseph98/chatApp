import { Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/echo-03.png'
const Login = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const [username, setUsername] = useState("");


  const handleLogin = () => {
    if(!username) return
    sessionStorage.setItem("user" , username)
    // setUser(username)
    navigate('/chat')
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "60%", md: "40%" },
        margin: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, width: "100%", textAlign: "center" }} elevation={3}>
        <Box
                        component="div"
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" }, 
                            alignItems: "center",
                            justifyContent: "center",
                            gap: { xs: 2, sm: 4 }, 
                        }}
                    >
                        <img
                            height="100px"
                            src={logo}
                            alt="Logo"
                            style={{
                                maxWidth: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="filled"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <TextField
             fullWidth
             label="Password"
             variant="filled"
             type="password"
             margin="normal"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           /> */}
        <Button
          variant="contained"
          color="secondary"

          sx={{
            mt: 2,
            width: { xs: "60%", sm: "50%", md: "40%" }
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

      </Paper>
    </Box>
  );
};

export default Login