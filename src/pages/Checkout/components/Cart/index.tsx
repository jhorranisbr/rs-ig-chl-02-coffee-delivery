import { useContext } from 'react'

import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCardCart } from '../../../../components/CoffeeCardCart'
import { CartContainer, CartList, FooterItem, CartFooter } from './styles'
import { Coffee } from '../../../../utils/coffeeData'
import { Button } from '../../../../components/Button'

export function Cart() {
  const { coffees } = useContext(CartContext)

  const cartNotEmpty = coffees.length > 0

  const totalDelivery = cartNotEmpty ? 350 / 100 : 0
  const totalAmount = cartNotEmpty ? coffees.reduce(calculateTotalAmount, 0) : 0

  const total = totalAmount + totalDelivery

  const numberFormatOptions = {
    style: 'decimal',
    currency: 'BRL',

    minimumFractionDigits: 2,
  }

  const formattedTotalDelivery = new Intl.NumberFormat(
    'pt-BR',
    numberFormatOptions,
  ).format(totalDelivery)

  const formattedTotalAmount = new Intl.NumberFormat(
    'pt-BR',
    numberFormatOptions,
  ).format(totalAmount)

  const formattedTotal = new Intl.NumberFormat(
    'pt-BR',
    numberFormatOptions,
  ).format(total)

  function calculateTotalAmount(acc: number, coffee: Coffee): number {
    return (coffee.price / 100) * coffee.amount + acc
  }

  return (
    <CartContainer>
      {coffees.length > 0 && (
        <CartList>
          {coffees.map((coffee) => {
            return <CoffeeCardCart key={coffee.id} data={coffee} />
          })}
        </CartList>
      )}

      <CartFooter>
        <FooterItem>
          <span>Total de itens</span>
          <div>R$ {formattedTotalAmount}</div>
        </FooterItem>

        <FooterItem>
          <span>Entrega</span>
          <div>R$ {formattedTotalDelivery}</div>
        </FooterItem>

        <FooterItem>
          <strong>Total</strong>

          <div>
            <strong>R$ {formattedTotal}</strong>
          </div>
        </FooterItem>
      </CartFooter>

      <Button type="submit" disabled={!cartNotEmpty}>
        Confirmar Pedido
      </Button>
    </CartContainer>
  )
}
