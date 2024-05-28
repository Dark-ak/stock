import { Box, Typography } from '@mui/material'
import React from 'react'
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  scales,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const createGradient = (startColor: string, endColor: string) => {
  const ctx = document.createElement('canvas').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, startColor);
  gradient.addColorStop(1, endColor);
  return gradient;
};


const Graph = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        position: "right"
      },
      x: {
        type: "time",
        offset:true,
        position: "bottom",
        autSkip: "true",
        maxRotation: 0,
        sampleSize: 100,
        ticks:{
          major: {
            enabled: true
          }
        }

      }
    },
    plugins:{
      tooltip:{
        intersect: false,
        mode:"index"
      }
    }

  };

  const labels = [
    "2022-03-15 08:42:17",
    "2022-06-28 14:21:39",
    "2022-09-05 10:03:55",
    "2022-11-11 21:17:02",
    "2023-01-19 05:38:47",
    "2023-04-27 18:59:10",
    "2023-08-03 23:46:28",
    "2023-10-29 16:07:12",
    "2024-01-05 08:30:51",
    "2024-04-12 13:54:20",
    "2024-05-13 17:54:20",
    "2024-06-14 17:54:20",
    "2024-07-15 18:54:20",


  ];
  

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(91, 255, 127)',
        backgroundColor: "green",
        tension: 0.001
      },
    ],
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ border: 1, borderColor: "gray", borderRadius: 2, px: 3, py: 2, height: "51vh" }}>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Tesla 177.3 <span style={{ color: "rgb(91, 255, 127)" }}>+23%</span></Typography>
        <Line options={options} data={data} />
      </Box>


    </Box>
  )
}

export default Graph