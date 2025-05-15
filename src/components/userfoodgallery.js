import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const foodData = [
  {
    name: 'Biryani',
    image: 'https://www.shutterstock.com/image-photo/chicken-biryani-quick-tasty-dum-600nw-2468105649.jpg', // Replace with actual image URL
    description: 'A fragrant rice dish made with basmati rice, spices, and meat, often served with raita or curry.',
  },
  {
    name: 'Butter Chicken',
    image: 'https://wallpapers.com/images/hd/orange-colored-butter-chicken-dish-r2692c96mtu9qohw.jpg', // Replace with actual image URL
    description: 'A creamy, tomato-based chicken curry that is rich in flavor and often enjoyed with naan or rice.',
  },
  {
    name: 'Masala Dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    description: 'A crispy, fermented crepe from South India, stuffed with spiced mashed potatoes and served with chutneys and sambar.',
  },
  {
    name: 'Rogan Josh',
    image: 'https://www.shutterstock.com/image-photo/mutton-rogan-josh-masala-indias-260nw-2233183325.jpg', // Replace with actual image URL
    description: 'A flavorful lamb dish from Kashmir, cooked with yogurt, spices, and a rich, aromatic sauce.',
  },
  {
    name: 'Chole Bhature',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZNFg800X79gxUUJfrAXbuYA0H4WBJo0WBQ&s', // Replace with actual image URL
    description: 'A popular North Indian dish consisting of spicy chickpeas served with deep-fried bread (bhature).',
  },
  {
    name: 'Gulab Jamun',
    image: 'data:image/jpeg;base64,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', // Replace with actual image URL
    description: 'A sweet dessert made of deep-fried dough balls soaked in sugar syrup, often flavored with cardamom or rose water.',
  },
];

const UserFoodGallery = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Famous Indian Foods
      </Typography>
      <Grid container spacing={4}>
        {foodData.map((food, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={food.image}
                alt={food.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {food.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {food.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserFoodGallery;
