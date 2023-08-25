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
    {filteredByNameIpas.map((ipa) => {
  return (
  <Card key={ipa.id} ipas={filteredByNameIpas}/>
  )}
    )}
    {checkedIpas.map((ipa) => {
  return (
  <Card key={ipa.id} ipas={checkedIpas}/>
  )}
    )}
  </>
  )
}

export default FiltersList;