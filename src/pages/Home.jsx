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
                flexDirection: "column", // Stacks elements on smaller screens
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: 2, sm: 4 }, // Adds padding for small screens
            }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 2, sm: 4 }, // Adjust spacing
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

            <Login />
        </Box>

    )
}

export default Home