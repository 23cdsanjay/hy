// src/RegisterPage.js
import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="#fff0f5"
        p={3}
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" component="h1" gutterBottom color="secondary">
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          color="primary"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          color="primary"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          color="primary"
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          color="primary"
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2, bgcolor: "#d81b60" }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage;