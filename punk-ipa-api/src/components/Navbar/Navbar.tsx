import './Navbar.scss'
import { useState, FormEventHandler, FormEvent } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'
import { Ipa } from '../../types/Ipa'

type NavbarProps = {
  ipas: Ipa[];
}

const Navbar = ( { ipas }: NavbarProps) => {
  const [ searchTerm, setSearchTerm ] = useState<string>("");

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value) 
  }

  let filteredByNameIpas: Ipa[] = [];

  if (searchTerm) {
    filteredByNameIpas = ipas.filter((ipa: Ipa) => 
    ipa.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <>
      <h2>Navbar</h2>
      <SearchBox label="Search by name:" searchTerm={searchTerm} handleInput={handleInput}/>
      <FiltersList filteredByNameIpas={filteredByNameIpas}/>
    </>
    
  )
}

export default Navbar;