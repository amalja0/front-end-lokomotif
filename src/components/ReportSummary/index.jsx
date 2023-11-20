import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { getAllLokomotifFromYesterday } from '../../services/lokomotif'
import { groupLokomotifStatusandTotal } from '../../utils/HelperFunctions'

Chart.register(CategoryScale);

function ReportSummary() {

  const [chartData, setChartData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    getAllLokomotifFromYesterday()
      .then((res) => {
        const data = groupLokomotifStatusandTotal(res);
        const labels = data.map((lokomotif => lokomotif.status + 1));
        const datasets = {
          label: 'Total lokomotif in database',
          data: data.map((lokomotif => lokomotif.total)),
          backgroundColor: ["#ad917f"]
        }
        
        setChartData({
          labels: labels,
          datasets: [datasets],
        })

        setIsFetched(true);

      }).catch((err) => {
        console.log(err);
      });
  }, []);

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
        <Typography variant='h6' fontWeight={"bold"} sx={{ color: '#855ef5' }}>Lokomotifs Status Statistic in Database</Typography>
      </Grid>
      <Grid2 item>
        {
          isFetched && (
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
                    },
                    ticks: {
                      stepSize: 1
                    }
                  },
                }
              }}
            />
          )
        }
      </Grid2>
    </Grid>
  )
}

export default ReportSummary