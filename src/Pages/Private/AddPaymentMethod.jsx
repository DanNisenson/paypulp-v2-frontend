import AddPaymentMethodForm from 'Components/Elements/AddPaymentMathodForm'
import TextHeader from 'Components/Elements/TextHeader'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import useAddPaymentMethod from 'Hooks/useAddPaymentMethod'
import { useState } from 'react'
import CardImage from 'Components/Elements/CardImage'

const addPaymentDefaultValues = {
  cardOwnerName: 'Robert Robertz',
  cardNumber: '1234 5678 9012 3456',
}

const AddPaymentMethod = () => {
  const { onSubmit } = useAddPaymentMethod()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: addPaymentDefaultValues,
  })

  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  const [cardInfo, setCardInfo] = useState({
    cardOwnerName: '',
    cardNumber: '',
  })
  const onCardOwnerNameChange = (e) => {
    setCardInfo((prevState) => ({
      ...prevState,
      cardOwnerName: e.target.value,
    }))
  }
  const onCardNumberChange = (e) => {
    const input = e.target.value
    const last4Digits = input.substr(-4)
    setCardInfo((prevState) => ({
      ...prevState,
      cardNumber: last4Digits,
    }))
  }

  const onSubmitHandler = (data) => {
    onSubmit(data)
  }

  return (
    <>
      <TextHeader text={'Agregar tarjeta nueva'} navigate={goBack} />
      <div className="addPaymentMethod-card__container">
        <CardImage cardInfo={cardInfo} gradient="card__gradient--1" />
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmitHandler)}>
        <AddPaymentMethodForm
          register={register}
          watch={watch}
          errors={errors}
          isValid={isValid}
          onCardOwnerNameChange={onCardOwnerNameChange}
          onCardNumberChange={onCardNumberChange}
        />
      </form>
    </>
  )
}

export default AddPaymentMethod
