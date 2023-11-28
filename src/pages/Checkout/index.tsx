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
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { Order } from '../../reducers/cart/reducers'

import { v4 as uuidv4 } from 'uuid'

const addAddressScheme = zod.object({
  zipCode: zod.string(),
  street: zod.string().min(1, 'Informe o nome rua'),
  complement: zod.string().optional(),
  number: zod.string().min(1, 'Informe o número'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  region: zod.string().length(2, 'Informe a UF'),
})

type AddAddressFormData = zod.infer<typeof addAddressScheme>

export function Checkout() {
  const navigate = useNavigate()

  const { checkout, coffees, paymentMethod } = useContext(CartContext)

  const addAddressForm = useForm<AddAddressFormData>({
    resolver: zodResolver(addAddressScheme),
    defaultValues: {
      zipCode: import.meta.env.VITE_ADDRESS_ZIPCODE,
      street: import.meta.env.VITE_ADDRESS_STREET,
      number: import.meta.env.VITE_ADDRESS_NUMBER,
      complement: import.meta.env.VITE_ADDRESS_COMPLEMENT,
      district: import.meta.env.VITE_ADDRESS_DISTRICT,
      city: import.meta.env.VITE_ADDRESS_CITY,
      region: import.meta.env.VITE_ADDRESS_REGION,
    },
  })

  const { handleSubmit } = addAddressForm

  function handleNewOrder(data: AddAddressFormData) {
    const items = coffees.map((coffee) => {
      return {
        id: coffee.id,
        amount: coffee.amount,
      }
    })

    const order: Order = {
      id: uuidv4(),
      date: new Date(),
      delivery: data,
      items,
      paymentMethod,
    }

    checkout(order)

    navigate('/success', { replace: true })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleNewOrder)}>
        <FormProvider {...addAddressForm}>
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
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
