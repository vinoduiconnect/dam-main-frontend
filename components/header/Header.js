import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const styles = {
    appBar: {
      backgroundColor: '#FFFFFF',
      paddingY: '5px',
    },
    siteLogo: {
      flexGrow: 1,
      '& img': {
        width: '240px',
      }
    },
    headerMenu:{
      display: 'flex',
      flexDirection: 'row',
        '& a': {
          m: 1,
          pr: 1.5,
          borderRight: '1px dotted #000000',
          textAlign:'center',
          '&:last-child': {
            borderRight: '0px dotted #000000',
          }
        },
    },
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex'
        }}>
          <Link href="#" sx={styles.siteLogo}>
            <img src="../images/static/site_logo.png" alt="logo" />
          </Link>


          <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
            <Box
              component="div" sx={styles.headerMenu}>
               <Link href="#" underline="none">Intro</Link>
               <Link href="#" underline="none">About Brand Book</Link>
               <Link href="#" underline="none">FAQs</Link>
               <Link href="#" underline="none">Glssary</Link>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
