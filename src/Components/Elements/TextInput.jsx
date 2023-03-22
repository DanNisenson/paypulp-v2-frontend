import 'Styles/Inputs.css'

const TextInput = ({ name, label, register, validationType, errors }) => {
  return (
    <div>
      <div className="text-input__wrapper">
        <label htmlFor={name}>{label}</label>
        <input type="text" {...register(name, validationType)} />
        {name === 'email' && <div>E</div>}
        {name === 'password' && <div>P</div>}
      </div>
      {errors?.[name] && <p className="text-input__error">{errors?.[name].message}</p>}
    </div>
  )
}

export default TextInput
