import {Brewery} from './types';
import BreweryListItem from './BreweryListItem';

type BreweriesListProps = {
  breweries: Brewery[];
}

const BreweriesList = (props: BreweriesListProps) => {
  return (
    <div>
      {props.breweries.map(b => (
        <BreweryListItem key={b.id} brewery={b}/>
      ))}
    </div>)
}

export default BreweriesList;