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
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffees } = useContext(CartContext)

  const amount = coffees.length

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

            {amount > 0 && <Amount>{coffees.length}</Amount>}
          </NavLink>
        </Actions>
      </Menu>
    </HeaderContainer>
  )
}
