import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        background: "#f9fafb",
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="h6" color="text.secondary">
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default Loader;
