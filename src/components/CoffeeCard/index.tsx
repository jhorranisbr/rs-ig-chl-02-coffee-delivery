import { CoffeeCardContainer, Tags, Tag } from './styles'

import { Coffee } from '../../utils/coffeeData'

interface CoffeCardProps {
  data: Coffee
}

export function CoffeeCard({
  data: { name, description, thumbnail, tags },
}: CoffeCardProps) {
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
    </CoffeeCardContainer>
  )
}
