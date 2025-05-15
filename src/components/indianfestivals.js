import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const festivalData = [
  {
    name: 'Diwali',
    image: 'https://media.istockphoto.com/id/1351592257/photo/traditional-diya-lamps-lit-during-diwali-celebration.jpg?s=612x612&w=0&k=20&c=kxt66SWeJmTPBrc1tLJ6Gwn3A8TxGd1Mh9VCp6TNWMI=', // Replace with actual image URL
    description: 'The Festival of Lights, celebrated by millions across the world with lamps, fireworks, and sweets.',
  },
  {
    name: 'Holi',
    image: 'https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTAyFnheEbcFcs8YfqVjRMzlBdl0lGG7F0bcGJyG5tU=', // Replace with actual image URL
    description: 'The Festival of Colors, celebrated with vibrant colors, water balloons, and festive food.',
  },
  {
    name: 'Eid',
    image: 'https://www.itl.cat/pngfile/big/300-3003021_eid-mubarak-hd-photos-wallpapers-free-download-mehtab.jpg', // Replace with actual image URL
    description: 'A significant Islamic festival celebrated with prayers, feasting, and community gatherings.',
  },
  {
    name: 'Navratri',
    image: 'https://i.pinimg.com/736x/85/ea/d1/85ead1544ed8104d93fd0104f5990fdd.jpg', // Replace with actual image URL
    description: 'A nine-night festival dedicated to the worship of the goddess Durga, celebrated with dance and music.',
  },
  {
    name: 'Pongal',
    image: 'https://c8.alamy.com/comp/ET09W2/women-celebrating-pongal-festival-tamil-nadu-india-ET09W2.jpg', // Replace with actual image URL
    description: 'A harvest festival celebrated in Tamil Nadu, marked by cooking the traditional Pongal dish.',
  },
  {
    name: 'Raksha Bandhan',
    image: 'https://thumbs.dreamstime.com/b/rakshabandhan-sister-tie-rakhi-as-symbol-intense-love-her-brother-celebrated-india-festival-denoting-relationship-187468160.jpg', // Replace with actual image URL
    description: 'A festival celebrating the bond between brothers and sisters, marked by tying of a protective thread.',
  },
];

const IndianFestivals = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Famous Indian Festivals
      </Typography>
      <Grid container spacing={4}>
        {festivalData.map((festival, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={festival.image}
                alt={festival.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {festival.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {festival.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndianFestivals;
