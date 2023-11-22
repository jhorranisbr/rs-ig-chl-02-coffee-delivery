import { v4 as uuidv4 } from 'uuid'

import imgExpressoAmericano from '../assets/catalog/expresso-americano.png'
import imgArabe from '../assets/catalog/arabe.png'
import imgCafeComLeite from '../assets/catalog/cafe-com-leite.png'
import imgExpressoGelado from '../assets/catalog/expresso-gelado.png'
import imgCapuccino from '../assets/catalog/capuccino.png'
import imgChocolateQuente from '../assets/catalog/chocolate-quente.png'
import imgCubano from '../assets/catalog/cubano.png'
import imgExpressoCremoso from '../assets/catalog/expresso-cremoso.png'
import imgExpressoTradicional from '../assets/catalog/expresso-tradicional.png'
import imgHavaiano from '../assets/catalog/havaiano.png'
import imgIrlandes from '../assets/catalog/irlandes.png'
import imgLatte from '../assets/catalog/latte.png'
import imgMochaccino from '../assets/catalog/mochaccino.png'
import imgMacchiato from '../assets/catalog/macchiato.png'

export interface Coffee {
  id: string
  thumbnail: string
  name: string
  description: string
  price: number
  tags: Array<{
    name: string
  }>
}

export const coffeeData: Coffee[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    thumbnail: imgExpressoTradicional,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    thumbnail: imgExpressoAmericano,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    thumbnail: imgExpressoCremoso,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    thumbnail: imgExpressoGelado,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    thumbnail: imgCafeComLeite,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    thumbnail: imgLatte,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    thumbnail: imgCapuccino,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    thumbnail: imgMacchiato,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    thumbnail: imgMochaccino,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    thumbnail: imgChocolateQuente,
    price: 990,
    tags: [
      {
        name: 'Tradicional',
      },
      {
        name: 'Com Leite',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    thumbnail: imgCubano,
    price: 990,
    tags: [
      {
        name: 'Especial',
      },
      {
        name: 'Alcoólico',
      },
      {
        name: 'Gelado',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    thumbnail: imgHavaiano,
    price: 990,
    tags: [
      {
        name: 'Especial',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    thumbnail: imgArabe,
    price: 990,
    tags: [
      {
        name: 'Especial',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    thumbnail: imgIrlandes,
    price: 990,
    tags: [
      {
        name: 'Especial',
      },
      {
        name: 'Alcoólico',
      },
    ],
  },
]
