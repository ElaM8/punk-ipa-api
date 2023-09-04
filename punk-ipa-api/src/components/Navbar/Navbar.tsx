import './Navbar.scss'
import { FormEventHandler, ChangeEventHandler } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import  Options from '../../types/Options'
import SelectionControls from '../SelectionControls/SelectionControls'

type NavbarProps = {
  handleInput: FormEventHandler<HTMLInputElement>,
  options: Options,
  searchTerm: string;
  handleOptionsChange: ChangeEventHandler<HTMLInputElement>
}

const Navbar = ( { searchTerm, handleInput, options, handleOptionsChange }: NavbarProps) => {

  return (
    <>
      <h2>Navbar</h2>
      <SearchBox label="Search by name:" searchTerm={searchTerm} handleInput={handleInput}/>
      <SelectionControls options={ {...options} } onChange={handleOptionsChange}/>
    </>
    
  )
}

export default Navbar;