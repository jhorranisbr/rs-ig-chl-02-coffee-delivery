import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodFormContainer, Select } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { PaymentMethods } from '../../../../reducers/cart/reducers'

export function PaymentMethodForm() {
  const { paymentMethod, setPaymentMethod } = useContext(CartContext)

  function handleSetPaymentMethod(method: PaymentMethods) {
    setPaymentMethod(method)
  }

  function isPaymentMethodSelected(method: PaymentMethods) {
    return method === paymentMethod
  }

  return (
    <PaymentMethodFormContainer>
      <Select
        type="button"
        $isSelected={isPaymentMethodSelected('credit-card')}
        onClick={() => handleSetPaymentMethod('credit-card')}
      >
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </Select>

      <Select
        type="button"
        $isSelected={isPaymentMethodSelected('debit-card')}
        onClick={() => handleSetPaymentMethod('debit-card')}
      >
        <Bank size={16} />
        <span>Cartão de débito</span>
      </Select>

      <Select
        type="button"
        $isSelected={isPaymentMethodSelected('cash')}
        onClick={() => handleSetPaymentMethod('cash')}
      >
        <Money size={16} />
        <span>Dinheiro</span>
      </Select>
    </PaymentMethodFormContainer>
  )
}
