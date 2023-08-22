import { useState, useEffect } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { Ipa } from './types/Ipa'

const App = () => {
let [ ipas, setIpas  ] = useState<Ipa[]>([])

useEffect(() => {
    getData()
    },[])

const getData = async () => {
  const res = await fetch("https:api.punkapi.com/v2/beers?per_page=80")
    const data = await res.json()
    setIpas(data)
}

return (
    <>
    <Navbar ipas={ipas}/>
    <h1>Punk API</h1>
    <Main ipas={ipas}/>
    
   </>
  )
}

export default App;
