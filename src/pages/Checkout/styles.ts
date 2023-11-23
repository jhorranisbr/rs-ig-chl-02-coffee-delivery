import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 2.5rem auto;

  form {
    display: flex;
    gap: 2rem;
  }

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0.125rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  section {
    padding: 2.5rem;

    border-radius: 6px;
    background: ${({ theme }) => theme['base-card']};
  }
`

const HEADER_ICON_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface HeaderIconProps {
  $color: keyof typeof HEADER_ICON_COLORS
}

export const HeaderIcon = styled.div<HeaderIconProps>`
  color: ${(props) => props.theme[HEADER_ICON_COLORS[props.$color]]};
`

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-subtitle']};

  margin-bottom: 0.25rem;
`

export const Completions = styled.div`
  max-width: 40rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Selections = styled.div`
  flex: 1;
`
