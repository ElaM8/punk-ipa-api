import './Navbar.scss'
import { useState, FormEventHandler, FormEvent, ChangeEvent } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'
import { Ipa } from '../../types/Ipa'
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
const [checked, setChecked] = useState(false)

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value) 
  }

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  // const { highAlcohol, classicRange, highAcidity } = options;

  const handleOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, [e.target.name]: e.target.checked })
    console.log("handle options change called", options)
  }

  let filteredByNameIpas: Ipa[] = [];

  if (searchTerm) {
    filteredByNameIpas = ipas.filter((ipa: Ipa) => 
    ipa.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const checkFilter = (ipa: Ipa) => {
    if (ipa.abv >= 6 ||
        ipa.ph <= 4 )
        return ipa;
  }

  if (options.classicRange === true || 
      options.highAcidity === true || 
      options.highAlcohol === true) {
        let checkedIpas = ipas.filter(checkFilter)
        console.log("these are checked ipas", checkedIpas)
      }

  return (
    <>
      <h2>Navbar</h2>
      <SearchBox label="Search by name:" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList filteredByNameIpas={filteredByNameIpas}/>
      <SelectionControls name={options} checked={checked} onChange={handleOptionsChange}/>
    </>
    
  )
}

export default Navbar;