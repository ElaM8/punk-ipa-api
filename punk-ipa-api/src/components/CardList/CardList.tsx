import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";

type CardListProps = {
  ipas: Ipa[]
};

const CardList = ( { ipas }: CardListProps) => {

  return (
    <>
{ipas.map((ipa, i) => {
  return (
  <Card key={i} ipas={ipas}/>
  )
})}
    </>

  )
}

export default CardList;