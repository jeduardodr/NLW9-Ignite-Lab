import { ApolloClient, InMemoryCache } from "@apollo/client/core"
export const client = new ApolloClient({
  //Importar API Leitura do Ficheiro Env.local
  uri:import.meta.env.VITE_API_URL, 
   //Importar API Escrita subscriber do Ficheiro Env.local
  headers:{
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  }, 
  cache: new InMemoryCache()
})