import { InputHTMLAttributes } from 'react'
import { BaseInput, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeMode?: 'fixed' | 'small' | 'default'
  optionalLabel?: boolean
}

export function Input({
  sizeMode = 'default',
  optionalLabel = false,
  ...props
}: InputProps) {
  return (
    <InputContainer $sizeMode={sizeMode}>
      <BaseInput {...props} />

      {optionalLabel && <span>Opcional</span>}
    </InputContainer>
  )
}
