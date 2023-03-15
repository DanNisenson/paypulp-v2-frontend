import EmailIcon from '@mui/icons-material/Email'
import VisibilityIcon from '@mui/icons-material/Visibility'
import 'Styles/Inputs.css'

const TextInput = ({ name, label }) => {
  return (
    <div className="text-input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
      {name === 'email' && <EmailIcon />}
      {name === 'password' && <VisibilityIcon />}
    </div>
  )
}

export default TextInput
