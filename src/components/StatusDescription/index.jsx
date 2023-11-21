import { Grid, Typography } from '@mui/material';
import React from 'react';
import { statusDescription } from '../../utils/Constants';

function StatusDescription() {
  const detailedStatusDescription = statusDescription;

  return (
    <Grid 
      container 
      gap={2}
      sx={{
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'left',  
        width: '100%', 
        height: '100%', 
        backgroundColor: '#FDF2EF',
        borderRadius: '1rem',
        padding: '1rem' 
      }}
    > 
      <Grid item>
        <Typography variant='h6' fontWeight={"bold"} sx={{ color: '#855ef5' }}>Lokomotif Status Description</Typography>
      </Grid>
      <Grid item>
        {
          detailedStatusDescription.map((status) => {
            return (
              <Typography sx={{ marginBottom: '0.25rem' }}>
                Status of <span style={{ color: '#855ef5', fontWeight:'bold' }}>{status.status}</span>: {status.description}
              </Typography>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export default StatusDescription;