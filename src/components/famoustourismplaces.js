import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const touristPlaces = [
  {
    name: 'Taj Mahal',
    image: 'https://thumbs.dreamstime.com/b/travel-to-agra-india-taj-mahal-red-stormy-sky-artist-rendition-angry-clouds-backdrop-ancient-43411756.jpg', // Replace with actual image URL
    description: 'A symbol of love, the Taj Mahal in Agra is one of the most iconic monuments in the world.',
  },
  {
    name: 'Jaipur',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-amber-fort-or-amer-fortified-residence-of-raja-in-photo-image_3028187.jpg', // Replace with actual image URL
    description: 'Known as the Pink City, Jaipur is famous for its palaces, forts, and rich history.',
  },
  {
    name: 'Kerala Backwaters',
    image: 'https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    description: 'A network of canals, rivers, and lakes in Kerala, offering serene and scenic beauty.',
  },
  {
    name: 'Varanasi',
    image: 'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg', // Replace with actual image URL
    description: 'One of the oldest cities in the world, Varanasi is a major cultural and religious hub.',
  },
  {
    name: 'Hampi',
    image: 'https://t4.ftcdn.net/jpg/01/28/09/39/360_F_128093989_O8eefaRlYneRc1TanYBDP6hXrYRry6UC.jpg', // Replace with actual image URL
    description: 'A UNESCO World Heritage site, Hampi is known for its ancient temples and ruins.',
  },
  {
    name: 'Goa Beaches',
    image: 'https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=', // Replace with actual image URL
    description: 'Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage.',
  },
];

const TourismGallery = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Famous Tourist Places of India
      </Typography>
      <Grid container spacing={4}>
        {touristPlaces.map((place, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={place.image}
                alt={place.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {place.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TourismGallery;
