import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";

type CardListProps = {
  ipas: Ipa[]
};

const CardList = ( { ipas }: CardListProps) => {

  return (
    <>
{ipas.map((ipa) => {
  return (
    <>
  <Card ipas={ipas}/>
  </>
  )
})}
    </>

  )
}

export default CardList;