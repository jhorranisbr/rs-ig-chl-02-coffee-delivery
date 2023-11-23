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

interface CoffeCardProps {
  data: Coffee
}

export function CoffeeCardCart({
  data: { name, thumbnail, price },
}: CoffeCardProps) {
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
              <button title="Diminuir quantidade">
                <Minus size={14} />
              </button>

              <span>10</span>

              <button title="Aumentar quantidade">
                <Plus size={14} />
              </button>
            </Counter>

            <CartButton title="Adicionar ao carrinho">
              <Trash size={16} /> <span>Remover</span>
            </CartButton>
          </Actions>
        </Footer>
      </Infos>
    </CoffeeCardContainer>
  )
}
