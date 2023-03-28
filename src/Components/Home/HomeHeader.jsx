import 'Styles/Home.css'
import avatar from 'Assets/Images/Avatar.png'
import QuestionMark from 'Components/Elements/Icons/QuestionMark'
import { useNavigate } from 'react-router'

const Header = ({ name }) => {
  const navigate = useNavigate()

  const signOut = () => {
    sessionStorage.clear()
    navigate('/login')
  }

  return (
    <div className="home-header">
      <img className="home-header__avatar" src={avatar} alt="Avatar" onClick={signOut} />
      <h3 className="home-header__greeting">Hola {name}</h3>
      <div className="home-header__help">
        <QuestionMark />
      </div>
    </div>
  )
}

export default Header
