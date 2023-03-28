import TextInput from './TextInput'
import { signupSchema } from 'Helpers/validationSchemas'
import 'Styles/AddPaymentMethod.css'

const AddPaymentMethodForm = ({
  watch,
  errors,
  isValid,
  register,
  onCardOwnerNameChange,
  onCardNumberChange,
}) => {
  const schema = signupSchema(watch)
  const { longText, cardNumber } = schema

  return (
    <>
      <div className="login-form__inputs">
        <TextInput
          type="text"
          name="cardOwnerName"
          label="Nombre del titular"
          register={register}
          validationType={longText}
          errors={errors}
          onChange={(e) => onCardOwnerNameChange(e)}

        />
        <TextInput
          type="text"
          name="cardNumber"
          label="Número de la tarjeta"
          register={register}
          validationType={cardNumber}
          errors={errors}
          onChange={(e) => onCardNumberChange(e)}
        />
      </div>

      <div className="addPaymentMethod-form__button">
        <button className="btn btn-solid btn-long" disabled={!isValid}>
          Guardar método de pago
        </button>
      </div>
    </>
  )
}

export default AddPaymentMethodForm
