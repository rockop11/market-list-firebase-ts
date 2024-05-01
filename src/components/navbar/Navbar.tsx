import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
