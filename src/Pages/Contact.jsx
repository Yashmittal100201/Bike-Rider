import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Layout from './Layout';
const Contact = () => {
  return (
    <Layout>
      <Container sx={{ height: "80.3vh",padding:'2rem 1.5rem' ,'@media (max-width: 870px)': {
                        height:'auto',
                      }}}>
        <Typography variant='h4' sx={{fontWeight:700}}>
          Contact Bike Ride
        </Typography>

        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed earum impedit illo consectetur doloremque atque quaerat facilis omnis itaque enim eum molestiae optio nisi asperiores quisquam sit! Fugiat, rerum veritatis. Nostrum, temporibus voluptatibus! Earum vero possimus nam ad corporis officia ex architecto? Adipisci voluptatum assumenda cupiditate perspiciatis? Architecto rem assumenda dolor in delectus iste nihil atque earum suscipit magnam quod maiores doloremque, quasi quae repellat soluta rerum vero distinctio sequi praesentium porro quis itaque saepe! Illo minima neque cupiditate saepe consequuntur tempore, reiciendis deleniti praesentium asperiores quia laborum doloremque, mollitia quasi iusto sed facere magnam magni incidunt. Quod, eos.
        </Typography>

        <TableContainer sx={{maxWidth:'31rem', mt:5}}>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{fontWeight:900, fontSize:20,textAlign:'center', color:'white', bgcolor:'black'}}>
                  <ContactsIcon/>Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{mr:2, color:'red'}}/> 1800-00-0000
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <PhoneIphoneIcon sx={{mr:2, color:'green'}}/> 1234567890
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <BusinessIcon sx={{mr:2, color:'blue'}}/> Address
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  )
}

export default Contact
