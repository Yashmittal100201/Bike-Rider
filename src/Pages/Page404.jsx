import { Container, Typography } from "@mui/material";
import React from "react";

import "./page404.css";
const Page404 = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "black",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography
        variant="h1"
        className="error_message align_message"
        sx={{ fontFamily: "Emilys Candy, serif" }}
      >
        ERROR
      </Typography>
      <Typography
        variant="h1"
        className="code_404_message align_message"
        sx={{ fontFamily: "Emilys Candy, serif" }}
      >
        404
      </Typography>
    </Container>
  );
};

export default Page404;
