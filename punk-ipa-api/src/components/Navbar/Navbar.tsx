import './Navbar.scss'
import SearchBox from '../SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'

const Navbar = () => {

  return (
    <>
      <h2>Navbar</h2>
      <SearchBox/>
      <FiltersList/>
    </>
    
  )
}

export default Navbar;