import PayPulpLogo from 'Components/Elements/Icons/PayPulpLogo'
import 'Styles/CardImage.css'

const CardImageFunds = ({ funds, position }) => {
  return (
    <div className={`card-funds card-funds__gradient ${position}`}>
      <div className="card-funds__top-info">
        <h2 className="card-funds__top-text">PAYPULP COIN</h2>
        <div className="card-funds__logo">
          <PayPulpLogo size="36" />
        </div>
      </div>
      <div className="card-funds__number">Saldo disponible {funds} €</div>
      <div className="card-funds__bottom-info">
        <div className="card-funds__text">First M Lastname</div>
        <div className="card-funds__text">00/00</div>
      </div>
    </div>
  )
}

export default CardImageFunds
