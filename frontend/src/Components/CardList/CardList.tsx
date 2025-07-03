import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList = (props: Props) => {
  return (<div>
    <Card coinName='Bitcoin' ticker='BTC' price={103000}></Card>
    <Card coinName='Etherium' ticker='ETH' price={2300}></Card>
    <Card coinName='Solana' ticker='SOL' price={130}></Card>
    </div>
  )
}

export default CardList