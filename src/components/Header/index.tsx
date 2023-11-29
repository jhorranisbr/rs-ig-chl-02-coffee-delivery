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
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffees, orders } = useContext(CartContext)

  const [addressString, setAddressString] = useState('Sem Localização')

  const amount = coffees.length

  useEffect(() => {
    if (orders.length > 0) {
      const lastOrder = orders[orders.length - 1]

      setAddressString(
        `${lastOrder.delivery.city}, ${lastOrder.delivery.region}`,
      )
    }
  }, [orders])

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
            <MapPin size={22} weight="fill" /> <span>{addressString}</span>
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
