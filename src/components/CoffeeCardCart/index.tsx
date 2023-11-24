import { useContext } from 'react'

import { Coffee } from '../../utils/coffeeData'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

import {
  CoffeeCardContainer,
  Counter,
  Footer,
  Actions,
  CartButton,
  InfosTitle,
  Infos,
} from './styles'
import { CartContext } from '../../contexts/CartContext'

interface CoffeCardProps {
  data: Coffee
}

export function CoffeeCardCart({ data }: CoffeCardProps) {
  const { decreaseAmount, increaseAmount, removeCoffee } =
    useContext(CartContext)

  const { thumbnail, price, name, amount, id } = data

  function handleDecreaseAmount() {
    decreaseAmount(id)
  }

  function handleIncreaseAmount() {
    increaseAmount(id)
  }

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',

    minimumFractionDigits: 2,
  }).format(price / 100)

  return (
    <CoffeeCardContainer>
      <img src={thumbnail} alt="" />

      <Infos>
        <InfosTitle>
          <span>{name}</span>
          <span>
            <strong>
              R$
              {formattedPrice}
            </strong>
          </span>
        </InfosTitle>

        <Footer>
          <Actions>
            <Counter>
              <button
                type="button"
                title="Diminuir quantidade"
                onClick={handleDecreaseAmount}
              >
                <Minus size={14} />
              </button>

              <span>{amount}</span>

              <button
                type="button"
                title="Aumentar quantidade"
                onClick={handleIncreaseAmount}
              >
                <Plus size={14} />
              </button>
            </Counter>

            <CartButton
              title="Adicionar ao carrinho"
              onClick={handleRemoveCoffee}
            >
              <Trash size={16} /> <span>Remover</span>
            </CartButton>
          </Actions>
        </Footer>
      </Infos>
    </CoffeeCardContainer>
  )
}
