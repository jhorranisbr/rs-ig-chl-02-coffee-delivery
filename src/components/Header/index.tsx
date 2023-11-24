import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  HeaderContainer,
  Menu,
  Logotipo,
  Actions,
  LocationButton,
  Amount,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <NavLink to="/">
          <Logotipo
            src={logoCoffeeDelivery}
            alt="Imagem de um copo à esquerda com a seguinte escrita: Coffee Delivery"
          />
        </NavLink>
        <Actions>
          <LocationButton>
            <MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span>
          </LocationButton>

          <NavLink to="/checkout">
            <ShoppingCart size={18} weight="fill" />
            <Amount>3</Amount>
          </NavLink>
        </Actions>
      </Menu>
    </HeaderContainer>
  )
}
