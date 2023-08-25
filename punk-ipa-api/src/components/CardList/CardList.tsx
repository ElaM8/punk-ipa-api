import { Ipa } from "../../types/Ipa";
import Card from "../Card/Card";
import "./CardList.scss"

type CardListProps = {
  ipas: Ipa[]
};

const CardList = ( { ipas }: CardListProps) => {

  return (
    <>
    <div className="card-container__card-list">
{ipas.map((ipa) => {
  return (
  <Card key={ipa.id} ipas={ipas}/>
  )
})}
</div>
    </>

  )
}

export default CardList;