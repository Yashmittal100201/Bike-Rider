import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <>
        <Box  sx={{bgcolor:'black',p:4}} >
            <Box sx={{color:'white', textAlign:'center'}}>
                <InstagramIcon className='media_icon' fontSize='large'/>
                <TwitterIcon className='media_icon' fontSize='large'/>
                <YouTubeIcon className='media_icon' fontSize='large'/>
                <GitHubIcon className='media_icon' fontSize='large'/>
            </Box>
            <Box sx={{textAlign:'center', color:'white', minWidth:'100%'}}>
                <Typography variant={'h6'} className='footer_text'>
                    
                    Wellcome here @Copywrite. 
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default Footer
