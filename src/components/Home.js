import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button
        LinkComponent={Link}
        to="/books"
        sx={{ marginTop: 15, background: "gray" }}
        variant="contained"
      >
        <Typography variant="h3" sx={{ fontFamily: "fantasy" }}>
          View all Products
        </Typography>
      </Button>
    </Box>
  );
};

export default Home;
