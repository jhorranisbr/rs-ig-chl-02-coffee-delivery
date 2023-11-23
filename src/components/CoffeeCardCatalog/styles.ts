import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ theme }) => theme['base-card']};

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  padding: 0 1.5rem 1.25rem;

  img {
    margin-top: -1.25rem;
    width: 6.25rem;
    height: 6.25rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme['base-label']};
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: 0.75rem 0 1rem;
`

export const Tag = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme['yellow-dark']};
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${({ theme }) => theme['yellow-light']};
`
export const Footer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  margin-top: 2rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-text']};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: inherit;
    line-height: inherit;

    margin-left: 0.125rem;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  padding: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.purple};

    border: none;
    background-color: transparent;

    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    width: 1.25rem;

    display: flex;
    align-items: center;

    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme['base-card']};
  background: ${({ theme }) => theme['purple-dark']};

  cursor: pointer;

  transition: background 0.1s;

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
