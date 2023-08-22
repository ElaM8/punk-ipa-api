import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";

type FiltersListProps = {
  filteredByNameIpas: Ipa[]
}
const FiltersList = ( { filteredByNameIpas }: FiltersListProps) => {

  return (
    <>
    <h2>FiltersList</h2>
    {filteredByNameIpas.map((ipa, i) => {
  return (
  <Card key={i} ipas={filteredByNameIpas}/>
  )}
    )}
  </>
  )
}

export default FiltersList;