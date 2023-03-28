import { useNavigate } from 'react-router'

const useLogOut = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem('token')
  const logout = () => {
    sessionStorage.removeItem('token')
    window.location.reload()
  }
  return { logout }
}

export default useLogOut
