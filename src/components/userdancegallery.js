import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const danceData = [
  {
    name: 'Bharatanatyam',
    image: 'https://media.gettyimages.com/id/160094028/photo/bharatnatyam.jpg?s=612x612&w=gi&k=20&c=CuXCEYuvnZhWO6_Yreq1S9tBaoWYiK-3c14Yuo6RY3w=', // Replace with actual image URL
    description: 'An ancient classical dance from Tamil Nadu, known for its fixed upper torso, bent legs, and intricate footwork.',
  },
  {
    name: 'Kathak',
    image: 'https://i.pinimg.com/originals/95/04/b3/9504b3eded09a236b2c07a81b93ef73e.jpg', // Replace with actual image URL
    description: 'A classical dance form from northern India, focusing on storytelling through intricate footwork and spins.',
  },
  {
    name: 'Kuchipudi',
    image: 'https://media.istockphoto.com/id/507419740/photo/girl-dancing-classical-indin-dance-kuchipudi.jpg?s=612x612&w=0&k=20&c=C5rFrMoVni6YgyCTjLPxvlJwRoV9C9GQpujwAOPmbQc=', // Replace with actual image URL
    description: 'A dance-drama from Andhra Pradesh, known for its graceful movements and expressive gestures.',
  },
  {
    name: 'Odissi',
    image: 'https://media.gettyimages.com/id/481615532/photo/odissi.jpg?s=612x612&w=gi&k=20&c=klHrvw9lXrdowIEQFTp0JZJwMTPtFfqEaV2QWvxb__g=', // Replace with actual image URL
    description: 'One of the oldest classical dances from Odisha, showcasing fluid movements and sculpturesque poses.',
  },
  {
    name: 'Kathakali',
    image: 'https://media.istockphoto.com/id/1221935714/photo/kathakali-kerala-classical-dance-men-unique-body-expression.jpg?s=612x612&w=0&k=20&c=l5jkczq7yyJocnBqNcntTEx-OoZevZNcXePnp05i_hc=', // Replace with actual image URL
    description: 'A vibrant dance-drama from Kerala, known for its colorful makeup, elaborate costumes, and expressive eye movements.',
  },
  {
    name: 'Manipuri',
    image: 'https://i.pinimg.com/originals/cf/b9/26/cfb9261071a3c73fc832ac838e081f99.jpg', // Replace with actual image URL
    description: 'A classical dance from Manipur, known for its graceful and flowing movements, often depicting stories from Hindu epics.',
  },
];

const UserDanceGallery = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Traditional Dances of India
      </Typography>
      <Grid container spacing={4}>
        {danceData.map((dance, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={dance.image}
                alt={dance.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {dance.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dance.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserDanceGallery;
