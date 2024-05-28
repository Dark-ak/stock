import { Box, Paper, TableSortLabel, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { visuallyHidden } from '@mui/utils';


interface Data {
    rank: number,
    name: string,
    cRatio: number,
    profit: number,
    avgProfit: number,
    win: number,
    price: number | undefined,
    action: string
}



const sampleData: Data[] = [
    { rank: 1, name: 'Alpha Corp', cRatio: 1.23, profit: 453.23, avgProfit: 45.32, win: 60, price: 1023.45, action: 'Buy' },
    { rank: 2, name: 'Beta Inc', cRatio: 2.15, profit: 789.56, avgProfit: 78.95, win: 70, price: undefined, action: 'Hold' },
    { rank: 3, name: 'Gamma Ltd', cRatio: 0.97, profit: 350.89, avgProfit: 35.09, win: 50, price: 875.60, action: 'Sell' },
    { rank: 4, name: 'Delta LLC', cRatio: 1.75, profit: 634.12, avgProfit: 63.41, win: 80, price: 940.75, action: 'Buy' },
    { rank: 5, name: 'Epsilon Co', cRatio: 1.42, profit: 512.34, avgProfit: 51.23, win: 65, price: undefined, action: 'Hold' },
    { rank: 6, name: 'Zeta Systems', cRatio: 0.88, profit: 278.45, avgProfit: 27.85, win: 45, price: 789.10, action: 'Sell' },
    { rank: 7, name: 'Eta Solutions', cRatio: 1.56, profit: 479.67, avgProfit: 47.97, win: 55, price: 910.25, action: 'Buy' },
    { rank: 8, name: 'Theta Enterprises', cRatio: 2.05, profit: 645.89, avgProfit: 64.59, win: 75, price: undefined, action: 'Hold' }
];



type Order = 'asc' | 'desc';


interface headCell {
    disablePadding: boolean
    id: keyof Data,
    label: string,
    numeric: boolean
}

const headCells: readonly headCell[] = [
    {
        id: 'rank',
        numeric: true,
        disablePadding: false,
        label: "Rank"
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: "Name"
    },
    {
        id: 'cRatio',
        numeric: true,
        disablePadding: false,
        label: "Calmar Ratio"
    },
    {
        id: 'profit',
        numeric: true,
        disablePadding: false,
        label: "Overall Profit"
    },
    {
        id: 'avgProfit',
        numeric: true,
        disablePadding: false,
        label: "Avg. Daily Profit"
    },
    {
        id: 'win',
        numeric: true,
        disablePadding: false,
        label: "Win % (Day)"
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: "Price (Rs.)"
    },
]


const Leaderboard = () => {
    const [slippage, setSlippage] = useState<number | null>(0)
    const [data,setData] = useState<Data[]>(sampleData)
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('rank');

    useEffect(() => {
        const sortedData = [...data].sort((a, b) => {
          if (a[orderBy]! < b[orderBy]!) {
            return order === 'asc' ? -1 : 1;
          }
          if (a[orderBy]! > b[orderBy]!) {
            return order === 'asc' ? 1 : -1;
          }
          return 0;
        });
        setData(sortedData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [order, orderBy]);

    const handleSlippage = (_event: React.MouseEvent<HTMLElement>, newSlip: number | null) => {
        setSlippage(newSlip)
    }

    const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

    const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

    return (
        <Box sx={{ my: 2, width: "100%" }}>
            <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                LeaderBoard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: 26, py: 1, fontWeight: 600, color: "gray" }}>
                    Basic Backtest
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography sx={{ fontSize: 16, py: 1, fontWeight: 600, }}>
                        Slippage:
                    </Typography>
                    <ToggleButtonGroup value={slippage} exclusive onChange={handleSlippage}>
                        <ToggleButton value={0} sx={{ px: 4, borderRadius: 10, py: 0 }}>
                            <Typography sx={{ fontSize: 14 }}>
                                0%
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value={0.5} sx={{ px: 4, borderRadius: 10, py: 0 }}>
                            <Typography sx={{ fontSize: 14 }}>
                                0.5%
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value={1.5} sx={{ px: 4, borderRadius: 10, py: 0 }}>
                            <Typography sx={{ fontSize: 14 }}>
                                1.5%
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <TableContainer sx={{ py: 1 }} component={Paper}>
                <Table aria-label='simple table' sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {headCells.map((headCell) => {
                                return <TableCell
                                    key={headCell.id}
                                    align={headCell.numeric ? 'right' : 'left'}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                    sortDirection={orderBy === headCell.id ? order : false}
                                    sx={{ fontSize: 20 }}
                                >
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={createSortHandler(headCell.id)}
                                    >
                                        {headCell.label}
                                        {orderBy === headCell.id ? (
                                            <Box component="span" sx={visuallyHidden}>
                                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            })}
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
                                    <TableCell align="center" sx={{ color: row.cRatio < 0 ? "red" : "green", fontWeight: 500 }}>{row.cRatio}</TableCell>
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