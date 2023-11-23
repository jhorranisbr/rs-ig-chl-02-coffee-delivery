import { Coffee } from '../../utils/coffeeData'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

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

interface CoffeCardProps {
  data: Coffee
}

export function CoffeeCardCatalog({
  data: { name, description, thumbnail, tags, price },
}: CoffeCardProps) {
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
            <button title="Diminuir quantidade">
              <Minus size={14} />
            </button>

            <span>10</span>

            <button title="Aumentar quantidade">
              <Plus size={14} />
            </button>
          </Counter>

          <CartButton title="Adicionar ao carrinho">
            <ShoppingCartSimple size={18} weight="fill" />
          </CartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  )
}
