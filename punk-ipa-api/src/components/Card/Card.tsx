import './Card.scss'

type CardProps = {
  image_url: string;
  name: string;
  description: string;
};

const Card = ( { image_url, name, description }: CardProps) => {

  return (

    <div className='ipa-card'>
      <img className='ipa-card__image' src={image_url} alt="" />
      <h2 className='ipa-card__name' >{name}</h2>
      <p className='ipa-card__description' >{description}</p>
    </div>
  )
}

export default Card;