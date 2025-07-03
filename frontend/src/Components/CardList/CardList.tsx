import React, { JSX } from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (<div>
    <Card coinName='Bitcoin' ticker='BTC' price={103000}></Card>
    <Card coinName='Etherium' ticker='ETH' price={2300}></Card>
    <Card coinName='Solana' ticker='SOL' price={130}></Card>
    </div>
  )
}

export default CardList