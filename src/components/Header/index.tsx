import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  HeaderContainer,
  Menu,
  Logotipo,
  Actions,
  LocationButton,
  CartButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <Logotipo
          src={logoCoffeeDelivery}
          alt="Imagem de um copo à esquerda com a seguinte escrita: Coffee Delivery"
        />
        <Actions>
          <LocationButton>
            <MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span>
          </LocationButton>
          <CartButton>
            <ShoppingCart size={18} weight="fill" />
          </CartButton>
        </Actions>
      </Menu>
    </HeaderContainer>
  )
}
