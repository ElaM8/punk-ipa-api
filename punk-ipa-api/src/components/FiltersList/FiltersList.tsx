import CheckedIpa from "../../types/CheckedIpa";
import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";

type FiltersListProps = {
  filteredByNameIpas: Ipa[];
  checkedIpas: CheckedIpa[];
}
const FiltersList = ( { filteredByNameIpas, checkedIpas }: FiltersListProps) => {

  return (
    <>
    <h2>FiltersList</h2>
    {filteredByNameIpas.map((ipa, i) => {
  return (
  <Card key={i} ipas={filteredByNameIpas}/>
  )}
    )}
    {checkedIpas.map((ipa, i) => {
  return (
  <Card key={i} ipas={checkedIpas}/>
  )}
    )}
  </>
  )
}

export default FiltersList;