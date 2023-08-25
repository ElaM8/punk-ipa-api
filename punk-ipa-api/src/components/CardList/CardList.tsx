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
{ipas.map((ipa, i) => {
  return (
  <Card key={i} ipas={ipas}/>
  )
})}
</div>
    </>

  )
}

export default CardList;