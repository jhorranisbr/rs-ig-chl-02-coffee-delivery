import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodFormContainer, Select } from './styles'

export function PaymentMethodForm() {
  return (
    <PaymentMethodFormContainer>
      <Select type="button">
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </Select>

      <Select type="button">
        <Bank size={16} />
        <span>Cartão de débito</span>
      </Select>

      <Select type="button">
        <Money size={16} />
        <span>Dinheiro</span>
      </Select>
    </PaymentMethodFormContainer>
  )
}
