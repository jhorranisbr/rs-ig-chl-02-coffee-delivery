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

export function Success() {
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
              <p>Entrega em </p>
            </Info>

            <Info $color="yellow">
              <span>
                <Timer weight="fill" size={16} />
              </span>
              <p>Previsão de entrega </p>
            </Info>

            <Info $color="yellowDark">
              <span>
                <CurrencyDollar size={16} />
              </span>
              <p>Previsão de entrega </p>
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
