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
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

        </Typography>
        <Typography variant="h5" component="div">
          {props.brewery.name}
        </Typography>
        <Typography variant="body2">
          {props.brewery.city}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="small"><Link to={props.brewery.id}>Read more</Link></Button>
      </CardActions>
    </Card>
  )
}

export default BreweryListItem