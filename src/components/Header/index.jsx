import { Container, Grid, Typography } from '@mui/material';
import React from 'react'

function Header() {
  return (
    <div style={{ 
      display:'flex', 
      alignItems: 'center',  
      width: '100%', 
      height: '70%', 
      backgroundColor: '#FDF2EF',
      borderRadius: '1rem' 
    }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Lokomotif Dashboard</Typography>
      </Container>
    </div>
  )
}

export default Header;