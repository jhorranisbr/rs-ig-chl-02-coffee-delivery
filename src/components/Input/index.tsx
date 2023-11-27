import { InputHTMLAttributes } from 'react'
import { BaseInput, ErrorMessage, InputContainer } from './styles'
import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeMode?: 'fixed' | 'small' | 'default'
  optionalLabel?: boolean
  registerName: string
  register: UseFormRegister<FieldValues>
}

export function Input({
  sizeMode = 'default',
  optionalLabel = false,
  register,
  registerName,
  ...props
}: InputProps) {
  const { formState } = useFormContext()

  const errorMessage = formState.errors[registerName]?.message?.toString()

  return (
    <InputContainer $sizeMode={sizeMode}>
      <BaseInput {...props} {...register(registerName)} />

      {optionalLabel && <span>Opcional</span>}

      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}
