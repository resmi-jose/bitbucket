import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Raken Test
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
