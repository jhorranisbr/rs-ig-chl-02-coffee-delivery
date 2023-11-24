import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;

  gap: 1.25rem;

  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme['base-card']};

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const Infos = styled.div`
  width: 100%;
`

export const InfosTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  strong {
    color: ${({ theme }) => theme['base-text']};
  }
`

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  margin-top: 0;
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

  > span {
    width: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${({ theme }) => theme['base-button']};

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
  }

  transition: background 0.1s;

  /* &:hover {
    background: ${({ theme }) => theme.purple};
  } */
`
