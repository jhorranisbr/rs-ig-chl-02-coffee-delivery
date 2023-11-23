import {
  CartContainer,
  CartList,
  FooterItem,
  CartFooter,
  Button,
} from './styles'

import { coffeeData } from '../../../../utils/coffeeData'
import { CoffeeCardCart } from '../../../../components/CoffeeCardCart'

export function Cart() {
  return (
    <CartContainer>
      <CartList>
        <CoffeeCardCart data={coffeeData[0]} />
        <CoffeeCardCart data={coffeeData[1]} />
      </CartList>

      <CartFooter>
        <FooterItem>
          <span>Total de itens</span>
          <div>R$ 27,90</div>
        </FooterItem>

        <FooterItem>
          <span>Entrega</span>
          <div>R$ 3,90</div>
        </FooterItem>

        <FooterItem>
          <strong>Total</strong>

          <div>
            <strong>R$ 32,90</strong>
          </div>
        </FooterItem>
      </CartFooter>

      <Button type="submit">Confirmar Pedido</Button>
    </CartContainer>
  )
}
