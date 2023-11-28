import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import successCover from '../../assets/success-cover.svg'

import {
  SuccessContainer,
  Content,
  Title,
  Subtitle,
  InfoContainer,
  InfoWrapper,
  Info,
} from './styles'

const PAYMENT_METHODS = {
  'credit-card': 'Cartão de Crédito',
  'debit-card': 'Cartão de Débito',
  cash: 'Dinheiro',
}

export function Success() {
  const { orders } = useContext(CartContext)
  const { orderId } = useParams()

  const order = orders.find((order) => order.id === orderId)

  let deliveryTop = ''
  let deliveryBottom = ''
  let paymentMethod = ''

  if (order) {
    deliveryTop = `${order?.delivery.street}, ${order?.delivery.number}`

    if (order.delivery.complement) {
      deliveryTop = String(deliveryTop).concat(', ', order.delivery.complement)
    }

    deliveryBottom = `${order?.delivery.district} - ${order?.delivery.city}, ${order?.delivery.region}`

    paymentMethod = PAYMENT_METHODS[order.paymentMethod]
  }

  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <Content>
        <InfoContainer>
          <InfoWrapper>
            <Info $color="purple">
              <span>
                <MapPin weight="fill" size={16} />
              </span>
              <p>
                Entrega em <strong>{deliveryTop}</strong> <br />
                {deliveryBottom}
              </p>
            </Info>

            <Info $color="yellow">
              <span>
                <Timer weight="fill" size={16} />
              </span>
              <p>
                Previsão de entrega <br /> <strong>20min - 30min</strong>{' '}
              </p>
            </Info>

            <Info $color="yellowDark">
              <span>
                <CurrencyDollar size={16} />
              </span>
              <p>
                Pagamento na entrega <br /> <strong>{paymentMethod}</strong>
              </p>
            </Info>
          </InfoWrapper>
        </InfoContainer>

        <img
          src={successCover}
          alt="Ilustração de um homem com camisa amarela e calça verde em cima de uma moto scooter da cor roxa levando uma caixa com o pedido realizado. "
        />
      </Content>
    </SuccessContainer>
  )
}
