import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { Ipa } from './types/Ipa'

const App = () => {
let [ ipas, setIpas  ] = useState<Ipa[]>([])
const [ searchTerm, setSearchTerm ] = useState<string>("");
  const [options, setOptions] = useState({
  highAlcohol: false,
  classicRange: false,
  highAcidity: false,
})

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value) 
    
  }

  const handleOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, [e.target.name]: e.target.checked })
  }

  let filteredByNameIpas: Ipa[] = [];
  let checkedIpas: Ipa[] = [];

  if (searchTerm) {
    filteredByNameIpas = ipas.filter((ipa: Ipa) => 
    ipa.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const checkFilter = (ipas: Ipa[]) => {
    ipas.forEach(ipa => ipa.first_brewed = ipa.first_brewed.substring(ipa.first_brewed.length - 4))
    const optionsValues = Object.values(options).toString()
    const ObjAbV = Object.values({highAlcohol: true, classicRange: false, highAcidity: true}).toString()
    const ObjAbv = Object.values({highAlcohol: true, classicRange: false, highAcidity: false}).toString()
    const ObjabV = Object.values({highAlcohol: false, classicRange: false, highAcidity: true}).toString()
    const ObjABV = Object.values({highAlcohol: true, classicRange: true, highAcidity: true}).toString()
    const ObjaBV = Object.values({highAlcohol: false, classicRange: true, highAcidity: true}).toString()
    const ObjABv = Object.values({highAlcohol: true, classicRange: true, highAcidity: false}).toString()
    const ObjaBv = Object.values({highAlcohol: false, classicRange: true, highAcidity: false}).toString()
    if (optionsValues === ObjAbV) {
      return ipas.filter((ipa) => ipa.abv >= 6 && ipa.ph <= 4)
    } else if (optionsValues === ObjAbv) {
      return ipas.filter((ipa) => ipa.abv >= 6 )
    } else if (optionsValues === ObjabV) {
      return ipas.filter((ipa) => ipa.ph <= 4)
    } else if (optionsValues === ObjABV) {
      return ipas.filter((ipa) => ipa.abv >= 6 && +ipa.first_brewed <= 2010 && ipa.ph <= 4)
    } else if (optionsValues === ObjaBV) {
      return ipas.filter((ipa) => +ipa.first_brewed <= 2010 && ipa.ph <= 4)
    } else if (optionsValues === ObjaBv) {
      return ipas.filter((ipa) => +ipa.first_brewed <= 2010)
    } else if (optionsValues === ObjABv) {
      return ipas.filter((ipa) => ipa.abv >= 6 && +ipa.first_brewed <= 2010)
    } else {
      return [];
    }
  }

if (options.classicRange === true || 
      options.highAcidity === true || 
      options.highAlcohol === true) {
    
    checkedIpas = checkFilter(ipas)    
  }

useEffect(() => {
    getData()
    },[])

const getData = async () => {
  let pageNbr: number = 1;
  let allData: Ipa[] = [];
  let endOfData: boolean = false;
      
    while (!endOfData) {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNbr}&per_page=80`)
      const data = await res.json();
      if (data.length === 0) {
        endOfData = true;
      }
      allData.push(...data)
      pageNbr++
  }
  setIpas(allData)
}

return (
  <>
    <Navbar searchTerm={searchTerm} handleInput={handleInput} options={options} handleOptionsChange={handleOptionsChange}/>
    <h1>Punk API</h1>
    {filteredByNameIpas.length > 0 && <Main ipas={filteredByNameIpas}/>}
    {checkedIpas.length > 0 && <Main ipas={checkedIpas}/> }
    {checkedIpas.length === 0 && filteredByNameIpas.length === 0 && <Main ipas={ipas}/>}

  </>
  )
}

export default App;