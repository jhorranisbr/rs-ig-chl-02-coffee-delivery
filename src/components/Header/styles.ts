import styled from 'styled-components'

export const HeaderContainer = styled.header``

export const Menu = styled.nav`
  max-width: 70rem;
  margin: 0 auto;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logotipo = styled.img``

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme.purple};
  background: ${({ theme }) => theme['purple-light']};

  padding: 0.5rem;

  cursor: pointer;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme['yellow-dark']};
  background: ${({ theme }) => theme['yellow-light']};

  cursor: pointer;
`
