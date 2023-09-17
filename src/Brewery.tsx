import React from 'react'
import { useEffect, useState } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

import { Brewery } from './types';
import LoadBox from './LoadBox';

const SingleBrewery = () => {
  const [item, setItem] = useState<Brewery>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const params = useParams<string>();
  const breweryId: string | undefined = params.breweryID;

  useEffect(() => {
    getBrewery();
  }, [])

  const getBrewery = async () => {
    setLoading(true);
    try {
      const response = await axios.get<any, AxiosResponse<Brewery>>(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`);
      setItem(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
      setError(error.message)
    }
    setInterval(() => setLoading(false), 500);
  }

  const navigate = useNavigate();
  const handleReturn = () => navigate('/');
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2em",
        marginBottom: "2em"
      }}
    >
      <Box 
      sx={{
        width: 400,
        height: 400,
        backgroundColor: 'primary.dark',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
        color: "white"
      }}
    >
      {error && !loading && (
        <p>Error happens</p>
      )}

      {!error && loading && (
        <LoadBox />
      )}

        {item && !error && !loading && <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Type: {item.brewery_type}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Country: {item.country}
          </Typography>
          <Typography variant="body1" gutterBottom>
            City: {item.city}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Postal Code: {item.postal_code}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Address: {item.address_1}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: {item.phone}
          </Typography>
        </Box>}
        <Button variant="contained" onClick={handleReturn}>Return to breweries list</Button>
    </Box>
    </Container>
  )
}

export default SingleBrewery