import { Coffee } from '../../utils/coffeeData'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import { produce } from 'immer'

import {
  CoffeeCardContainer,
  Tags,
  Tag,
  Counter,
  Price,
  Footer,
  Actions,
  CartButton,
  PriceContainer,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeCardProps {
  data: Coffee
}

export function CoffeeCardCatalog({ data: coffee }: CoffeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  const { name, description, thumbnail, tags, price, amount } = coffee

  const [finalAmount, setAmount] = useState(amount)

  function handleAddCoffeeToCart() {
    const newCoffee: Coffee = produce(coffee, (draft) => {
      draft.amount = finalAmount
    })

    addCoffeeToCart(newCoffee)
  }

  function handleIncrementAmount() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    setAmount((state) => {
      return state <= 1 ? 1 : state - 1
    })
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',

    minimumFractionDigits: 2,
  }).format(price / 100)

  return (
    <CoffeeCardContainer>
      <img src={thumbnail} alt="" />

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </Tags>

      <h3>{name}</h3>
      <span>{description}</span>

      <Footer>
        <PriceContainer>
          <Price>
            R$
            <span>{formattedPrice}</span>
          </Price>
        </PriceContainer>

        <Actions>
          <Counter>
            <button title="Diminuir quantidade" onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>

            <span>{finalAmount}</span>

            <button title="Aumentar quantidade" onClick={handleIncrementAmount}>
              <Plus size={14} />
            </button>
          </Counter>

          <CartButton
            title="Adicionar ao carrinho"
            onClick={handleAddCoffeeToCart}
          >
            <ShoppingCartSimple size={18} weight="fill" />
          </CartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  )
}
