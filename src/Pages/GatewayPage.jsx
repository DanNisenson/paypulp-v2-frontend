import { useLoaderData } from 'react-router-dom'
import Login from 'Components/Login/Login'
import Checkout from 'Components/Gateway/Checkout'
import useGateway from 'Hooks/useGateway'

const GatewayPage = () => {
  const sellerInfo = useLoaderData()
  const {
    buyerToken,
    setBuyerToken,
    funds,
    payMets,
    isSubmit,
    confirmTransaction,
    handleRadioDonation,
    resetPage,
  } = useGateway(sellerInfo)

  return (
    <>
      {!buyerToken && !isSubmit && <Login setBuyerToken={setBuyerToken} />}
      {buyerToken && (
        <Checkout
          sellerInfo={sellerInfo}
          payMets={payMets}
          funds={funds}
          confirmTransaction={confirmTransaction}
          handleRadioDonation={handleRadioDonation}
          resetPage={resetPage}
        />
      )}
    </>
  )
}

export default GatewayPage
