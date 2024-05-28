import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            align: "start",
            labels: {
                boxWidth: 16,
                boxHeight: 16,
                // padding: ,
                font: {
                    family: "Source Code Pro, monospace"
                }
            }
        },

    },
    scales: {
        y: {
            position: "right",
            font: {
                family: "Source Code Pro, monospace"
            }
        },
        x: {
            font: {
                family: "Source Code Pro, monospace"
            }
        }
    }
};


const ISBar = () => {

    const [type, setType] = useState<string | null>("annual")

    const handleType = (
        event: React.MouseEvent<HTMLElement>,
        newType: string | null,
      ) => {
        setType(newType);
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','April', 'May', 'June'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(72,176,237)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(219,134,74)',
            },
        ],
    };

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(72,176,237)',
            },
        ],
    };
    const data2 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgb(72,176,237)',
            },
        ],
    };
    return (
        <Box sx={{py:2}}>
            <ToggleButtonGroup sx={{py:2}} value={type} exclusive onChange={handleType}>
                <ToggleButton value="annual">
                    <Typography>Annual</Typography>
                </ToggleButton>
                <ToggleButton value="quaterly">
                    <Typography>Quaterly</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <Grid container gap={1} columns={{ xs: 3, sm: 7, md: 11 }}>
                <Grid sx={{ border: 1, borderColor: "gray", borderRadius: 2, px: 3, py: 2, height: "51vh" }} xs={3.5}>
                    <Typography sx={{ fontSize: 14 }}>Income Statement</Typography>
                    <Bar options={options} data={data} />
                </Grid>
                <Grid sx={{ border: 1, borderColor: "gray", borderRadius: 2, px: 3, py: 2, height: "51vh" }} xs={3.5}>
                    <Typography sx={{ fontSize: 14 }}>Net Income</Typography>
                    <Bar options={options} data={data1} />
                </Grid>
                <Grid sx={{ border: 1, borderColor: "gray", borderRadius: 2, px: 3, py: 2, height: "51vh" }} xs={3.5}>
                    <Typography sx={{ fontSize: 14 }}>Gross Profit</Typography>
                    <Bar options={options} data={data2} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ISBar