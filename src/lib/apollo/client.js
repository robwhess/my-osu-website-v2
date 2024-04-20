import { ApolloClient, InMemoryCache } from '@apollo/client'

import documentTransform from './documentTransform'

const uri = import.meta.env.VITE_GRAPHQL_URL
const apiKey = import.meta.env.VITE_SUPABASE_API_KEY

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  headers: { apiKey },
  documentTransform
})

export default client
