import { userContext } from 'Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import PaymentMethods from 'Services/PaymentMethods'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const { userCtxt, setUserCtxt } = useContext(userContext)
  const [payMets, setPayMets] = useState([])

  useEffect(() => {
    let userData
    let payMetsData
    const getData = async () => {
      try {
        const { data } = await UserInfo.getUserInfo()
        userData = data
        setUserCtxt(userData)
      } catch (err) {
        toast.error(
          'Ha habido un problema accediendo a tu informacion. Intentalo de nuevo mas tarde',
        )
      }
    }
    getData()

    const getUserPayMets = async () => {
      try {
        const { data } = await PaymentMethods.getPayMets()
        payMetsData = data
        setPayMets(payMetsData)
      } catch (err) {
        console.log(err)
        toast.error('Ha habido un error accediendo a tus metodos de pago')
      }
    }
    getUserPayMets()
  }, [])

  return { userCtxt, setUserCtxt, payMets, setPayMets }
}
