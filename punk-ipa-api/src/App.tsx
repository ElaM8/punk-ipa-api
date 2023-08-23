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
  let pageNbr: number = 1;
  let prevResult: Ipa[] = []
  let allData: Ipa[] = []
  do {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNbr}&per_page=80`)
      const data = await res.json();
      prevResult = data;
      data.forEach(ipa => {
        const { id, name, description, image_url, abv, first_brewed, ph } = ipa;
        allData.push({ id, name, description, image_url, abv, first_brewed, ph })
      });
      pageNbr++
    } while (prevResult.length !== 0)
      setIpas(allData)
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
