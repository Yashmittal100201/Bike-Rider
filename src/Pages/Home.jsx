import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../Images/banner2.jpg";
import Layout from "./Layout";
import './home.css';
const Home = () => {
  return (
    <Layout>
      <Container sx={{ display:'flex',flexDirection:'column', backgroundImage: `url(${banner})`, height: "90vh", backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', '@media (min-width: 1200px)':{ maxWidth: 'none'}}}>
        <Box sx={{width:'500px',padding:'90px 35px'}}>
          <Typography variant='h3'>
            Hello Riders🚵‍♀️
          </Typography>
          
          <Typography variant="h5">
            Best Bikes In India..
          </Typography>

          <Button variant="contained" sx={{bgcolor:'red', mt:2}}>
            <Link to="/projects">More Rides</Link>
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
