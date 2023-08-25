import './Navbar.scss'
import { useState, FormEvent, ChangeEvent } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'
import { Ipa } from '../../types/Ipa'
import CheckedIpa from '../../types/CheckedIpa'
import SelectionControls from '../SelectionControls/SelectionControls'

type NavbarProps = {
  ipas: Ipa[];
}

const Navbar = ( { ipas }: NavbarProps) => {
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
  let checkedIpas: CheckedIpa[] | any;

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
    }
  }

if (options.classicRange === true || 
      options.highAcidity === true || 
      options.highAlcohol === true) {
    
   
    checkedIpas = checkFilter(ipas)
    console.log("checked ipas", checkedIpas)
  }

  return (
    <>
      <h2>Navbar</h2>
      <SearchBox label="Search by name:" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList filteredByNameIpas={filteredByNameIpas} checkedIpas={checkedIpas}/>
      <SelectionControls options={ {...options} } onChange={handleOptionsChange}/>
    </>
    
  )
}

export default Navbar;