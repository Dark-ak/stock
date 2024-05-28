import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Graph from './Graph'
import ISBar from './IS'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Content = () => {

    const [stock, setStock] = useState<number>(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setStock(newValue);
    };

    console.log(stock)
    return (
        <Box>
            <Box>
                <Box sx={{ py: 2 }}>
                    <Typography sx={{ fontSize: 26, fontWeight: 600 }}>
                        Your Stocks
                    </Typography>
                    <Tabs
                        value={stock}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Tesla" />
                        <Tab label="IBM" />
                        <Tab label="Google" />
                        <Tab label="Apple" />
                    </Tabs>

                </Box>
                <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                    Tesla
                </Typography>
                <Grid container sx={{ display: "flex", gap: 1 }} columns={{ xs: 3, sm: 6, md: 12 }}>
                    <Grid xs={2} sm={3} md={4}>
                        <Box sx={{ border: 1, borderColor: "gray", borderRadius: 2, px: 3, py: 2, overflow: "auto" }}>
                            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Profile</Typography>
                            <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
                                Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States
                            </Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: 20, py: 1 }}>Key Data</Typography>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Box sx={{bgcolor:"action.selected", px: 1, pt: 1, width: "100%" }}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 16, color: "gray" }}>Growth (FY)</Typography>
                                    <Box sx={{ py: 0.5 }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, pb: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, pb: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} /><Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} /><Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                    </Box>
                                </Box>
                                <Box sx={{ bgcolor: "action.selected", borderRadius: 2, px: 1, pt: 1, width: "100%" }}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 16, color: "gray" }}>Growth (FY)</Typography>
                                    <Box sx={{ py: 0.5 }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, pb: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, pb: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} /><Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} /><Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>Growth (FY)</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: 14, py: 1 }}>-2.80%</Typography>
                                        </Box>
                                        <Divider sx={{ color: "white" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs="auto" sm={4} md={7.5}>
                        <Graph />
                    </Grid>
                </Grid>
                <ISBar />
            </Box>
        </Box>
    )
}

export default Content