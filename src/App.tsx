import { useState } from 'react'
import { Box, createTheme, InputAdornment, TextField, ThemeProvider } from '@mui/material';
import { yellow } from '@mui/material/colors';
// import { light } from '@mui/material/styles/createPalette';
import { Sidebar } from './components/DashBoard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import Content from './components/DashBoard/Content';
import Leaderboard from './components/Leaderboard';


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: yellow,
  },
  typography: {
    fontFamily: "Source Code Pro, monospace",
    fontWeightRegular: "bold"
  }
})

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Source Code Pro, monospace",
  }
})

const renderPage = (page: number) => {

  switch (page){
    case 0:
      return <Content />

    case 1:
      return <Leaderboard />
  }
}


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(0)

  
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex", maxWidth: "100%" }}>
        <Sidebar setPage={setPage} dark={dark} setDark={setDark}/>
        <Box sx={{ px: 2, py: 2 }}>
          <Box sx={{ display: "flex" }}>
            <TextField
              id='outlined-start-adornment' fullWidth
              sx={{ fontFamily: "inherit", width: "1150px", bgcolor: "action.selected" }}
              InputProps={{
                startAdornment: <InputAdornment position='start'><SearchIcon /></InputAdornment>
              }}
              placeholder='Search for stocks'
            />
          </Box>

          {renderPage(page)}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
