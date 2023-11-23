import { CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { AddAddressForm } from './components/AddAddressForm'
import {
  CheckoutContainer,
  Title,
  HeaderIcon,
  Completions,
  Selections,
} from './styles'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { Cart } from './components/Cart'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <Completions>
          <Title>Complete seu pedido</Title>
          <section>
            <header>
              <HeaderIcon $color="yellow">
                <MapPin size={22} />
              </HeaderIcon>

              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </header>
            <AddAddressForm />
          </section>

          <section>
            <header>
              <HeaderIcon $color="purple">
                <CurrencyDollar size={22} />
              </HeaderIcon>

              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>
            <PaymentMethodForm />
          </section>
        </Completions>

        <Selections>
          <Title>Cafés selecionados</Title>

          <Cart />
        </Selections>
      </form>
    </CheckoutContainer>
  )
}
