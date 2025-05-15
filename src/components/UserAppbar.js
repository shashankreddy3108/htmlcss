import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (route) => {
    navigate(route);
    setDrawerOpen(false); // Close the drawer after selecting a menu
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    navigate('/signin'); // Navigate to the login page upon logout
  };

  const modules = [
    { name: 'View Gallery', route: '/usernav/viewgallery' },
    { name: 'Submit Feedback', route: '/usernav/feedback' },
    
    { name: 'Indian Dances', route: '/usernav/userdancegallery' },
    { name: 'Indian Food', route: '/usernav/userfoodgallery' },
    { name: 'Indian Tourism', route: '/usernav/famoustourismplaces' },
    { name: 'Indian Festivals', route: '/usernav/indianfestivals' }
    
  ];

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appbar}>
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h6" sx={styles.projectName}>
            Culture Heritage Hub
          </Typography>
          <Box>
            {/* Logout button */}
            <Button color="inherit" onClick={handleLogout} sx={styles.logoutButton}>
              Logout
            </Button>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={styles.drawerList}>
          {modules.map((module) => (
            <ListItem button key={module.route} onClick={() => handleMenuClick(module.route)} sx={styles.menuButton}>
              <ListItemText primary={module.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Welcome message centered on the page */}
      <Box sx={styles.welcomeContainer}>
        <Typography variant="h4" sx={styles.welcomeMessage}>
          Welcome to Indian Culture and Heritage Website
        </Typography>
      </Box>
    </Box>
  );
};

// Styles for the navbar
const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appbar: {
    background: 'linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)',
    padding: '10px 20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Increased shadow for depth
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectName: {
    fontWeight: 'bold',
    color: '#fff',
  },
  drawerList: {
    width: '250px',
    background: 'linear-gradient(180deg, rgba(50, 50, 89, 1) 0%, rgba(255, 100, 100, 1) 100%)', // Updated gradient for the drawer
    height: '100%',
    padding: '10px 0',
    borderRight: '2px solid rgba(255, 255, 255, 0.2)', // Right border for bar-like look
  },
  menuButton: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle hover effect
    },
    padding: '15px 20px', // Increased padding for a bar-like button
    borderRadius: '4px', // Slightly rounded corners for elegance
    marginBottom: '5px', // Space between menu items
  },
  logoutButton: {
    marginRight: '15px',
    fontWeight: 'bold',
  },
  welcomeContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px', // Adjust height as needed
    background: 'linear-gradient(135deg, rgba(255, 204, 153, 1) 0%, rgba(255, 102, 178, 1) 100%)', // Gradient background for welcome message
    width: '100%', // Full width for the gradient background
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#333',
  },
};

export default UserNavbar;