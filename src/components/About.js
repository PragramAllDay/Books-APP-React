import { Typography, Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} varient="h2">
          This is a CRUD Application
        </Typography>
        <Typography varient="h3">By Ibrahim Abdullah</Typography>
      </Box>
    </div>
  );
};

export default About;
