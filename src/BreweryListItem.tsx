import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Brewery} from './types';

type BreweriesListItemProps = {
  brewery: Brewery;
}

const BreweryListItem = (props: BreweriesListItemProps) => {
  return (
    <Card sx={{ 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "space-between",
      width: "30%",
      minHeight: "10em",
      marginRight: 2,
      marginBottom: 2
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.brewery.name}
        </Typography>
        <Typography variant="body2">
          {props.brewery.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" component={Link} to={props.brewery.id}>
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default BreweryListItem