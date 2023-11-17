import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';

const centerContentStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Dashboard() {
  return (
    <div>
      <Container >
        <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{ height: '97vh' }}>
          <Grid item md={2}  sx={ centerContentStyles }>
            <Header/>
          </Grid>
          <Grid item md={6}  sx={ centerContentStyles }>
            <Typography>Hi</Typography>
          </Grid>
          <Grid item md={4}  sx={ centerContentStyles }>
            <Typography>Hi</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Dashboard;