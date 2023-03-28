import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import useGetUserInfo from './useGetUserInfo'

const useLogOut = () => {
  const navigate = useNavigate()
  const { setUserCtxt, setPayMets } = useGetUserInfo()
  const logout = () => {
    sessionStorage.removeItem('token')
    setUserCtxt({})
    setPayMets([])
    navigate('/login')
  }
  return { logout }
}

export default useLogOut
