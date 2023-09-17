import React from 'react'
import { useEffect, useState } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const SingleBrewery = () => {
    type Brewery = {
        id: string,
        name: string,
        city: string,
        brewery_type: string,
        address_1: string,
    }

    const [item, setItem] = useState<Brewery>();
    const [error, setError] = useState<string>('')
    const params = useParams<string>();
    const breweryId: string | undefined = params.breweryID;

    useEffect(() => {
        getBrewery()
    }, [])

    const getBrewery = async () => {
        try {
          const response = await axios.get<any, AxiosResponse<Brewery>>(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`);
          console.log(response.data);
          setItem(response.data);
        } catch (err) {
          const error = err as AxiosError;
          console.log(error.message);
          setError(error.message)
        }
    }

    const navigate = useNavigate();
    const handleReturn = () => navigate('/');
  return (
    <div>
        Brewery
        {item && !error && <div>
            <p>{item.name}</p>
            <p>{item.city}</p>
            <p>{item.brewery_type}</p>
            <p>{item.address_1}</p>
        </div>}
        <button onClick={handleReturn}>Return to breweries list</button>
    </div>
  )
}

export default SingleBrewery