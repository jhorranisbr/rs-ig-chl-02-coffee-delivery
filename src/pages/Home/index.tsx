import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

import imgIntroCover from '../../assets/intro-cover.png'

import {
  HomeContainer,
  IntroContainer,
  IntroContent,
  IntroInfos,
  IntroTexts,
  IntroTitle,
  IntroSubtitle,
  IntroItems,
  IntroItem,
  IntroItemIcon,
  IntroCover,
  CatalogContainer,
  Catalog,
} from './styles'

import { coffeeData } from '../../utils/coffeeData'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <IntroInfos>
            <IntroTexts>
              <IntroTitle>
                Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
              <IntroSubtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </IntroSubtitle>
            </IntroTexts>

            <IntroItems>
              <IntroItem>
                <IntroItemIcon $background="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </IntroItemIcon>
                <span>Compra simples e segura</span>
              </IntroItem>
              <IntroItem>
                <IntroItemIcon $background="gray">
                  <Package size={16} weight="fill" />
                </IntroItemIcon>
                <span>Embalagem mantém o café intacto</span>
              </IntroItem>
              <IntroItem>
                <IntroItemIcon $background="yellow">
                  <Timer size={16} weight="fill" />
                </IntroItemIcon>
                <span>Entrega rápida e rastreada</span>
              </IntroItem>
              <IntroItem>
                <IntroItemIcon $background="purple">
                  <Coffee size={16} weight="fill" />
                </IntroItemIcon>
                <span>O café chega fresquinho até você</span>
              </IntroItem>
            </IntroItems>
          </IntroInfos>

          <div>
            <IntroCover
              src={imgIntroCover}
              alt="Imagem com um copo de café e diversos grãos de café sendo mostrados ao lado do copo"
            />
          </div>
        </IntroContent>
      </IntroContainer>

      <CatalogContainer>
        <h2>Nossos cafés</h2>

        <Catalog>
          {coffeeData.map((coffee) => {
            return <CoffeeCard key={coffee.id} data={coffee} />
          })}
        </Catalog>
      </CatalogContainer>
    </HomeContainer>
  )
}
