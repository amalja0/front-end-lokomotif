import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { statusDescription } from '../../utils/Constants'

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
        <Typography sx={{ color: '#855ef5' }}>Lokomotif Status Description</Typography>
      </Grid>
      <Grid2 item>
        {
          detailedStatusDescription.map((status) => {
            return (
              <Typography sx={{ marginBottom: '0.25rem' }}>
                Status of <span style={{ color: '#855ef5' }}>{status.status}</span>: {status.description}
              </Typography>
            )
          })
        }
      </Grid2>
    </Grid>
  )
}

export default StatusDescription;