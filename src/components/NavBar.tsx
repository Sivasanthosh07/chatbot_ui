import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function NavBar() {

  React.useState<null | HTMLElement>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ background: "#263238" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Dashboard"
            sx={{ mr: 2 }}
            href='/'
          >
            <img src={"/logo.svg"} style={{ width: "50px" }}></img>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Chatbot
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              href='/'
              sx={{
                paddingRight: "40px"
              }}
            >
              Home
            </IconButton>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              href='/admin'
            >
              Admin
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>


    </Box>
  );
}
