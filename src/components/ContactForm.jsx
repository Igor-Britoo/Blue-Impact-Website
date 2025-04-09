import React, { forwardRef, useState } from "react"
import { FormContainer, InputContainer, InputLabel, InputField, SubmitButton, TextArea, FormTitle, ErrorSpan } from './styled/ContactFormComponents'
import { toast } from 'react-toastify'
import { postData } from '../utils/api'

const ContactForm = forwardRef((props, ref) => {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    description: '',
  })
  const [errors, setErrors] = useState({})

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/
    return phoneRegex.test(phoneNumber)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value.trimStart(),
    }))
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length > 2 && value.length <= 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } 
    else if (value.length > 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value,
    }))
  }

  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      phoneNumber: '',
      description: '',
    })
    setErrors({})
  }

  const handleSubmit = (event) => {
    setIsSubmittingForm(true)
    event.preventDefault()
    const newErrors = {}

    if (!validatePhoneNumber(formValues.phoneNumber)) {
      newErrors.phoneNumber = 'Telefone inválido. Use o padrão (XX) 9XXXX-XXXX'
    }

    if (Object.keys(newErrors).length === 0) { 
      setErrors({})
      const data = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phoneNumber,
        description: formValues.description,
      }
      postData('/send-email/', { data })
      .then((result) => {
        console.log(result)
        toast.success('Email sent successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        })
        resetForm()
        setTimeout(() => setIsSubmittingForm(false), 500)
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error sending email. Please try again.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        })
        setTimeout(() => setIsSubmittingForm(false), 500)
      })      
    }
    else {  
      setErrors(newErrors)
      setTimeout(() => setIsSubmittingForm(false), 500)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit} ref={ref} {...props}>
      <FormTitle>CONTATO</FormTitle>

      <InputContainer>
        <InputLabel htmlFor="name">Nome</InputLabel>
        <InputField
          type="text"
          placeholder="Ex. John Doe"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          placeholder="ex.doe@gmail.com"
          id="email"
          value={formValues.email}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          onChange={handleChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="phoneNumber">Telefone</InputLabel>
        <InputField
          type="tel"
          placeholder="(XX) 9XXXX-XXXX"
          id="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handlePhoneChange}
          required
        />
        {errors.phoneNumber && <ErrorSpan>{errors.phoneNumber}</ErrorSpan>}
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="description">Descrição</InputLabel>
        <TextArea
          rows="4"
          placeholder="Descrição resumida"
          id="description"
          value={formValues.description}
          onChange={handleChange}
          required
        ></TextArea>
      </InputContainer>

      <SubmitButton type="submit" disabled={isSubmittingForm}>ENVIAR</SubmitButton>
    </FormContainer>
  )
})

export default ContactForm
