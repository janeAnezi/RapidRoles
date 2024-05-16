import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="../src/assets/images/about05.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sales
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We've curated a diverse range of job opportunities to cater to a multitude of talents and interests. 
          Whether you're a seasoned sales professional looking for your next challenge or a compassionate caregiver eager 
          to make a difference, our platform offers an array of roles suited to your expertise.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }