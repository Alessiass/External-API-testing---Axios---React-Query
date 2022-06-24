import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function ReactQuery() {

  const axios = require('axios').default;

  const { isLoading, error, data, refetch } = useQuery('repoData', () =>
  axios.get('https://catfact.ninja/fact')
  )

if (isLoading) return <div>Your random cat fact is now loading!</div>

if (error) return <div>Couldn't get your random cat fact because of an error</div>

return (
  <div>
    <h1>Your random cat fact:</h1>
    <p>{data.data.fact}</p>

    <button onClick={()=>refetch()}>Press this button to get another cat fact!</button>
  </div>
)
}

