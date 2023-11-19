import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import ReportSummary from '../../components/ReportSummary';
import StatusDescription from '../../components/StatusDescription';

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
        <Grid spacing={3} container direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{ height: '97vh' }}>
          <Grid item md={2}  sx={ centerContentStyles }>
            <Header/>
          </Grid>
          <Grid item md={4} sx={ centerContentStyles }>
            <Grid spacing={4} container sx={{height: '100%'}}>
              <Grid item md={5}>
                <StatusDescription />
              </Grid>
              <Grid item md={7}>
                <ReportSummary />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item md={2}  sx={ centerContentStyles }>
            <Typography>Hi</Typography>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}

export default Dashboard;