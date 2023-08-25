import './Card.scss'
import { Ipa } from '../../types/Ipa'

type CardProps = {
  ipas: Ipa[]
};



const Card = ({ ipas }: CardProps) => {

  return (
    <>
{ipas.map((ipa) => {
  return (

    <div className='card--ipa' key={ipa.id}>
      <img src={ipa.image_url} alt="" />
      <h2>{ipa.name}</h2>
      <p>{ipa.description}</p>
    </div>
  )
})}
    </>
  )
}

export default Card;