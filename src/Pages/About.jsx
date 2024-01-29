import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Layout from './Layout'
const About = () => {
  return (
    <Layout >
      <Container sx={{ height: "70.3vh", textAlign:'center',padding:'2rem 1.5rem' ,'@media (max-width: 870px)': {
                        height:'auto',
                      }}}>
        <Typography variant='h5' sx={{fontWeight:700}}>
          About My Company
        </Typography>

        <Box>
          <Typography variant='body2' sx={{display:'flex', justifyContent:'center', textAlign:'justify', mt:2}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsam, repellendus iste tempora perspiciatis numquam quis. Beatae debitis eius, laborum labore nam vero nihil sed adipisci eveniet nostrum. Repellat porro laboriosam maiores rem voluptatum aliquid eveniet alias provident assumenda libero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit, possimus accusantium totam similique consectetur. Aut saepe natus incidunt facilis, neque id voluptas vero ipsum in veritatis, quo quos nemo animi voluptatem temporibus repellat suscipit error doloremque, perspiciatis asperiores vel fugiat ratione inventore? Unde magni odio impedit fugit temporibus qui. Tenetur consectetur est quia sit aliquam praesentium eum libero. Repudiandae ex ullam minus, eos laboriosam vitae fugit, cupiditate consectetur pariatur doloribus quisquam corrupti voluptatem similique quidem nesciunt voluptates harum at perferendis. Consequuntur eaque aut aperiam maiores placeat, fuga minima perferendis a quis, suscipit ipsum sequi? Obcaecati odio totam maxime eius.
          </Typography>
          <Typography variant='body2' sx={{display:'flex', justifyContent:'center', textAlign:'justify', mt:2}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsam, repellendus iste tempora perspiciatis numquam quis. Beatae debitis eius, laborum labore nam vero nihil sed adipisci eveniet nostrum. Repellat porro laboriosam maiores rem voluptatum aliquid eveniet alias provident assumenda libero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit, possimus accusantium totam similique consectetur. Aut saepe natus incidunt facilis, neque id voluptas vero ipsum in veritatis, quo quos nemo animi voluptatem temporibus repellat suscipit error doloremque, perspiciatis asperiores vel fugiat ratione inventore? Unde magni odio impedit fugit temporibus qui. Tenetur consectetur est quia sit aliquam praesentium eum libero. Repudiandae ex ullam minus, eos laboriosam vitae fugit, cupiditate consectetur pariatur doloribus quisquam corrupti voluptatem similique quidem nesciunt voluptates harum at perferendis. Consequuntur eaque aut aperiam maiores placeat, fuga minima perferendis a quis, suscipit ipsum sequi? Obcaecati odio totam maxime eius.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default About
