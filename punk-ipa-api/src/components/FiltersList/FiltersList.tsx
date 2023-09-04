import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";

type FiltersListProps = {
  filteredByNameIpas: Ipa[];
}
const FiltersList = ( { filteredByNameIpas }: FiltersListProps) => {

  return (
    <>
    <h2>FiltersList</h2>
    {filteredByNameIpas.map((ipa) => {
  return (
  <Card key={ipa.id} ipas={filteredByNameIpas}/>
  )}
    )}
  </>
  )
}

export default FiltersList;