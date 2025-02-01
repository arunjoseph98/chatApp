import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    const handleSignup = () => {
      if (username && email && password) {
        dispatch(signup({ username, email }));
      }
    };
  
    return (
      <Box
               sx={{
                 width: { xs: "90%", sm: "60%", md: "40%" },
                 margin: "auto",
                 mt: 3,
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
               }}
             >
               <Paper sx={{ p: 4, width: "100%", textAlign: "center" }} elevation={3}>
               <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="filled"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          variant="filled"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
                 <Button
                   variant="contained"
                   color="secondary"
                   
                   sx={{ mt: 2,
                      width: { xs: "60%", sm: "50%", md: "40%" } }}
                   onClick={handleSignup}
                 >
                   Signup
                 </Button>
                 <Typography  sx={{
                 marginTop: 2,
               }}>
                  or
                 </Typography>
                 <Button
                   
                   color="secondary"
                   
                   sx={{ mt: 2 ,
                      width: { xs: "60%", sm: "50%", md: "30%" }
                   }}
                   onClick={e=>navigate('/')}
                 >
                   Login 
                 </Button>
               </Paper>
             </Box>
      
    );
  };

export default SignUp