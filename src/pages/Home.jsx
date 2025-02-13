import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { Box, useTheme } from '@mui/material'
import logo from '../assets/echo-03.png'
const Home = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#101D25",
                display: "flex",
                flexDirection: "column", 
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: 2, sm: 4 }, 
            }}
        >
            
            <Login />
        </Box>

    )
}

export default Home