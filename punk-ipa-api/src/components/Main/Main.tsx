import CardList from '../CardList/CardList'
import { Ipa } from '../../types/Ipa'

type MainProps = {
  ipas: Ipa[]
}

const Main = ( { ipas }: MainProps) => {

return (
    <>
    <CardList ipas={ipas}></CardList>
   </>
  )
}

export default Main;
