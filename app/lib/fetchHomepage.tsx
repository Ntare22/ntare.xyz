import { gql, useQuery } from '@apollo/client';
import client from './apolloClient';



// const { data, loading, error } = useQuery(GET_HOMEPAGE, { 
//   variables: { id: 1000 }
// });

export async function fetchHomepage() {
  // const { data } = await client.query({ query: GET_HOMEPAGE });
  // return data.homepage;
}