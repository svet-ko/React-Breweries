import React from 'react'
import { useEffect, useState } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Container, TextField, Typography } from '@mui/material';

import {Brewery} from './types';
import BreweriesList from './BreweriesList';
import LoadBox from './LoadBox';

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
    setInterval(() => setLoading(false), 500);
  }

  return (
    <div>
      {error && !loading && (
        <p>Error happens</p>
      )}

      {!error && loading && (
        <LoadBox />
      )}

      {filteredBreweries && !error && !loading && (
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <TextField 
            sx={{
              marginTop: "1em",
              marginBottom: "1.3em"
            }}
            id="outlined-basic"
            label="Search by name:"
            variant="outlined"
            onChange={(e) => setFilter(e.currentTarget.value)}/>
          <BreweriesList breweries={filteredBreweries} />
        </Container>
      )}

      <Outlet />
    </div>
  )
}

export default Home