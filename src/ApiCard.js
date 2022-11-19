import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const ApiCard = ({ el }) => {


  return (
    <Card sx={{ maxWidth: 345 }}>
      
      
      <img src={require('./cap1.png')} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.username}
        </Typography>
      </CardContent>
      <CardActions>
        
       
        
        
      </CardActions>
    </Card>
  );
};

export default ApiCard;