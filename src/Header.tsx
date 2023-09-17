import { AppBar, Box, Button, ButtonGroup, Icon, Toolbar, Typography } from '@mui/material'
import SportsBarIcon from '@mui/icons-material/SportsBar';
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{
          display: "flex",
          alignItems: "center"
        }}>
          <Typography variant="h3">Breweries </Typography>
          <Icon component={SportsBarIcon} fontSize="large"/>
        </Box>
        <ButtonGroup variant="contained">
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="about">About</Button>
        </ButtonGroup>         
      </Toolbar>
    </AppBar>
  )
}

export default Header