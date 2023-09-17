import React from 'react'
import { useEffect, useState } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import { Link, Outlet } from 'react-router-dom';

import {Brewery} from './types';
import BreweriesList from './BreweriesList';

const Home = () => {

  const [breweries, setBreweries] = useState<Brewery[]>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>('');
  const [filteredBreweries, setFilteredBreweries] = useState<Brewery[]>();

  useEffect(() => {
    getBreweries()
  }, [])

  useEffect(()=>{
    if (breweries) {
      setFilteredBreweries(breweries.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase())
      }));
    }
  },[filter])

  const getBreweries = async () => {
    setLoading(true)
    try {
      const response = await axios.get<any, AxiosResponse<Brewery[]>>('https://api.openbrewerydb.org/v1/breweries');
      setBreweries(response.data);
      setFilteredBreweries(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <div>
      {error && !loading && (
        <p>Error happens</p>
      )}

      {!error && loading && (
        <p>Wait</p>
      )}

      {filteredBreweries && !error && !loading && (
        <div>
          <input type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)}/>
          <BreweriesList breweries={filteredBreweries} />
        </div>
      )}
      
      <Outlet />
    </div>
  )
}

export default Home