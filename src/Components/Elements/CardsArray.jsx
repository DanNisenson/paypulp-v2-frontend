import { useState } from 'react'
import CardImage from './CardImage'
import CardImageFunds from './CardImageFunds'

const CardsArray = ({ payMets = null, funds, rotate, position = null }) => {
  const [order, setOrder] = useState(0)

  let cards = null

  if (payMets.length === 0) {
    cards = <CardImageFunds funds={funds} />
  } else {
    const cardFunds = [<CardImageFunds funds={funds} key={0} />]
    const payMetsComps = payMets.map((met, i) => (
      <CardImage cardInfo={met} gradient={`card__gradient--${i + 1}`} key={i + 1} />
    ))
    cards = cardFunds.concat(payMetsComps)
    cards = cards.slice(order).concat(cards.slice(0, order)).slice(0, 3).reverse()
  }

  const handleSubmit = () => {
    let dataToSubmit

    if (payMets.length === 0 || order === 0) {
      dataToSubmit = funds
    } else {
      dataToSubmit = payMets[order - 1]
    }

    // Submit data to external store
    console.log('Submitting data:', dataToSubmit)
  }

  const handleClick = () => {
    setOrder((order + 1) % (payMets.length + 1))
  }

  return (
    <>
      <div className={`home-cards home-cards__${payMets.length}`} onClick={handleClick}>
        {cards}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
    // <div className={`home-cards home-cards__${payMets.length}`} onClick={rotate}>
    //   {payMets.length >= 3 && (
    //     <CardImage position={position?.[2]} cardInfo={payMets?.[1]} gradient="card__gradient--2" />
    //   )}
    //   {payMets.length >= 2 && (
    //     <CardImage position={position?.[1]} cardInfo={payMets?.[0]} gradient="card__gradient--1" />
    //   )}
    //   <CardImageFunds position={position?.[0]} funds={funds} />
    // </div>
  )
}

export default CardsArray
