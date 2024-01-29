import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'

const Projects = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get('https://dummyapi.online/api/movies')
        .then((res) => {
          setProducts(res.data);
        })
    }, [])


  return (
    <Layout>
      
        <Container  sx={{padding:'2rem 1.5rem'}}>
          <Typography variant='h4' sx={{fontWeight:'900', textAlign:'center', textDecoration:'underline'}}>
            List of Products
          </Typography>
          <Box sx={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
        {
          products.map((movie)=>{
          return (
            <>
                <Card sx={{width:'290px', m:2}}>
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="200px"
                      image="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Paella dish"/>
                    <CardContent>
                      <Typography variant="h6" fontWeight='500' color="text.primary">
                        {movie.movie}
                      </Typography>
                      
                      <Box>
                        <Rating
                          name="simple-controlled"
                          value={movie.rating}
                          sx={{}}
                          
                        />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </>
          );
        })
      }
      </Box>
      
            </Container>
    </Layout>
  )
}

export default Projects
