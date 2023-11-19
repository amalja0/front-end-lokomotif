import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


const dummy = [
  {
    status: 1,
    total: 12
  },
  {
    status: 2,
    total: 5
  },
  {
    status: 3,
    total: 9
  },
  {
    status: 4,
    total: 3
  },
  {
    status: 5,
    total: 1
  },
  {
    status: 6,
    total: 6
  },
  {
    status: 7,
    total: 14
  },
  {
    status: 8,
    total: 7
  },
  {
    status: 9,
    total: 5
  },
  {
    status: 10,
    total: 3
  },
];

Chart.register(CategoryScale);

function ReportSummary() {
  const [chartData, setChartData] = useState({
    labels: dummy.map((data) => data.status),
    datasets: [
      {
        label: 'Total lokomotif in database',
        data: dummy.map((data) => data.total),
        backgroundColor: ["#855ef5"]
      }
    ],
  })
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
        <Typography sx={{ color: '#855ef5' }}>Lokomotifs Status Statistic in Database</Typography>
      </Grid>
      <Grid2 item>
        <Bar 
          data={chartData} 
          options={{
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                title: {
                  text: 'Lokomotif status',
                  display: true
                }
              },
              y: {
                title: {
                  text: 'Total lokomotif in database',
                  display: true
                }
              },
            }
          }}
        />
      </Grid2>
    </Grid>
  )
}

export default ReportSummary