import React from 'react'
import { useEffect, useState } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  type Brewery = {
    id: string,
    name: string,
    city: string,
    brewery_type: string,
    address_1: string,
  }

  const [data, setData] = useState<Brewery[]>();
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getBreweries()
  }, [])

  const getBreweries = async () => {
    try {
      const response = await axios.get<any, AxiosResponse<Brewery[]>>('https://api.openbrewerydb.org/v1/breweries');
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
      setError(error.message)
    }
  }

  return (
    <div>
        {error && (
          <p>Error happens</p>
        )}

        {
          data && !error && (<div>
          {
            data.map(b => (
              <div key={b.id}>
                <p>{b.name}</p>
                <p>{b.city}</p>
                <Link to={b.id}>Read more</Link>
              </div>
            ))
          }
        </div>)
        }
        <Outlet />
      </div>
  )
}

export default Home