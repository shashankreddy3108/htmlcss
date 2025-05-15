import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (route) => {
    navigate(route);
    setDrawerOpen(false); // Close the drawer after selecting a menu
  };

  const handleLogout = () => {
    navigate('/signin'); // Navigate to the login page upon logout
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const modules = [
    { name: 'View Feedback', route: '/admin/viewfeedback' },
    { name: 'Add User', route: '/admin/adduser' },
    { name: 'Edit User', route: '/admin/edituser' },
    { name: 'Delete User', route: '/admin/deleteuser' },
    { name: 'View User', route: '/admin/viewusers' },
    { name: 'Add Item', route: '/admin/additem' },
    { name: 'Delete Item', route: '/admin/deleteitem' },
    { name: 'Update Item', route: '/admin/edititem' },
    { name: 'View Items', route: '/admin/viewitem' },
  ];

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appbar}>
        <Toolbar sx={styles.toolbar}>
          {/* Logo and Project Name */}
          <Box sx={styles.logoContainer}>
            <img
              src="https://i.pinimg.com/474x/1a/0d/fa/1a0dfa05938deda72c374718f4fc5d22.jpg"
              alt="Logo"
              style={styles.logo}
            />
            <Typography variant="h6" sx={styles.projectName}>
              Culture Heritage Hub
            </Typography>
          </Box>

          {/* Menu Button */}
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          {/* Log Out Button */}
          <Button variant="contained" color="secondary" onClick={handleLogout} sx={styles.logoutButton}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer that holds the module list */}
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
          Welcome to Admin Module
        </Typography>
      </Box>
    </Box>
  );
};

// Styles for the navbar
const styles = {
  container: {
    width: '100%', // Full width for the navbar
  },
  appbar: {
    background: 'linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)', // Cool gradient for the AppBar
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px', // Adjusted padding for the AppBar
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Increased shadow for depth
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 50, // Logo width
    height: 50, // Logo height
    marginRight: '10px', // Margin between the logo and text
  },
  projectName: {
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  },
  drawerList: {
    width: '210px',
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
    marginLeft: 'auto', // Align the button to the right
    fontWeight: 'bold',
  },
  welcomeContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px', // Adjust height as needed
    background: 'linear-gradient(135deg, rgba(153, 204, 255, 1) 0%, rgba(255, 204, 204, 1) 100%)', // Gradient background for welcome message
    width: '100%', // Full width for the gradient background
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#333',
  },
};

export default AdminNavbar;