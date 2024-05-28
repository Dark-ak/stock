import React, { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type SideProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
    dark: boolean,
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        display: 'flex',
        width: drawerWidth,
        flexShrink: 0,
        fontWeight: "bold",
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor:"red",
        justifyContent: "flex-end",
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const Sidebar: React.FC<SideProps> = ({setPage, dark, setDark}) => {
    const [open, setOpen] = useState(false);

    const iconComponent = (index: number) => {
        switch(index){
            case 0:
                return <AccountBoxIcon />

            case 1:
                return dark ? <LightModeIcon /> :<DarkModeIcon />
        
                // return <DarkModeIcon />

            case 2:
                return <LogoutIcon />

        }
    }

    const handeMode = (index: number) => {
        if (index==1){
            setDark(!dark)
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} sx={{bgcolor:"red"}}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(!open)}>
                        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <Box>
                        <List>
                            {['Dashboard', 'LeaderBoard'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                        onClick={() => setPage(index)}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 2 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                            color='inherit'
                                        >
                                            {index % 2 === 0 ? <HomeIcon /> : <LeaderboardIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{
                                            opacity: open ? 1 : 0, fontSize: 50
                                        }} primaryTypographyProps={{ fontSize: '18px', fontWeight: "600" }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box>
                        <Divider />
                        <List>
                            {['Profile',!dark ? 'Dark Mode' : 'Light mode', 'LogOut'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            // justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}

                                        onClick={() =>handeMode(index)}
                                    >
                                        <ListItemText primary={text} sx={{
                                            opacity: open ? 1 : 0, typography: {
                                                fontSize: "50px",
                                            }
                                        }} />
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 2 : 'auto',
                                            }}
                                        >
                                            {iconComponent(index)}
                                        </ListItemIcon>

                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}
