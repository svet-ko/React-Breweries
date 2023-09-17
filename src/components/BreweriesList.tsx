import {Brewery} from '../types/types';
import BreweryListItem from './BreweryListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

type BreweriesListProps = {
  breweries: Brewery[];
}

const BreweriesList = (props: BreweriesListProps) => {
  return (
    <Container maxWidth="md">
      <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {props.breweries.map(b => (
          <BreweryListItem key={b.id} brewery={b}/>
      ))}
      </Box>
    </Container>)
}

export default BreweriesList;