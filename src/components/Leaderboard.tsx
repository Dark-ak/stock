import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';


function CreateData(
    rank: number,
    name: string,
    cRatio: number,
    profit: number,
    avgProfit: number,
    win: number,
    price: number | undefined,
    action: string
){
    return {rank, name,cRatio,profit, avgProfit, win,price, action}
}

const data = [
    CreateData(1, 'Alpha Corp', 1.23, 453.23, 45.32, 60, 1023.45, 'Buy'),
    CreateData(2, 'Beta Inc', 2.15, 789.56, 78.95, 70, undefined, 'Hold'),
    CreateData(3, 'Gamma Ltd', -0.97, 350.89, 35.09, 50, 875.60, 'Sell'),
    CreateData(4, 'Delta LLC', 1.75, 634.12, 63.41, 80, 940.75, 'Buy'),
    CreateData(5, 'Epsilon Co', 1.42, 512.34, 51.23, 65, undefined, 'Hold'),
    CreateData(6, 'Zeta Systems', -0.88, 278.45, 27.85, 45, 789.10, 'Sell'),
    CreateData(7, 'Eta Solutions', 1.56, 479.67, 47.97, 55, 910.25, 'Buy'),
    CreateData(8, 'Theta Enterprises', 2.05, 645.89, 64.59, 75, undefined, 'Hold')
];


const Leaderboard = () => {

    const [slippage,setSlippage] = useState<number | null>(0)

    const handleSlippage = (event: React.MouseEvent<HTMLElement>,newSlip: number | null) => {
        setSlippage(newSlip)
    }
    
    return (
        <Box sx={{ my: 2, width: "100%" }}>
            <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                LeaderBoard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: 26, py: 1, fontWeight: 600, color: "gray" }}>
                    Basic Backtest
                </Typography>
                <Box sx={{display:"flex", gap:2}}>
                    <Typography sx={{ fontSize: 16, py: 1, fontWeight: 600,}}>
                        Slippage:
                    </Typography>
                    <ToggleButtonGroup value={slippage} exclusive onChange={handleSlippage}>
                        <ToggleButton value={0} sx={{px:4,borderRadius:10, py:0 }}>
                            <Typography sx={{fontSize:14}}>
                                0%
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value={0.5} sx={{px:4,borderRadius:10, py:0 }}>
                            <Typography sx={{fontSize:14}}>
                                0.5%
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value={1.5} sx={{px:4,borderRadius:10, py:0 }}>
                            <Typography sx={{fontSize:14}}>
                                1.5%
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <TableContainer sx={{ border: 1, borderRadius: 3, py: 1 }}>
                <Table aria-label='simple table' sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: 20 }}>Rank</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Name</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Calmar Ratio</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Overall Profit</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Avg. Daily Profit</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Win % (Day)</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Price (Rs.)</TableCell>
                            <TableCell align='left' sx={{ fontSize: 20 }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            return (
                                <TableRow key={row.rank} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope='row'>
                                        {row.rank}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="center" sx={{color: row.cRatio < 0 ? "red" : "green", fontWeight: 500}}>{row.cRatio}</TableCell>
                                    <TableCell align="center">{row.profit}</TableCell>
                                    <TableCell align="center">{row.avgProfit}</TableCell>
                                    <TableCell align="center">{row.win}</TableCell>
                                    <TableCell align="center">{row.price ? row.price : "-"}</TableCell>
                                    <TableCell align="center">{row.action}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Leaderboard