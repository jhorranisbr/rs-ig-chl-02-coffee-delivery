import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;

  margin-top: 1rem;
  padding: 2.5rem;

  border-radius: 6px;
  border-top-right-radius: 44px !important;
  border-bottom-left-radius: 44px !important;
`

export const CartList = styled.div`
  margin-bottom: 1.5rem;
`

export const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.3;
  color: ${({ theme }) => theme['base-text']};

  span {
    flex: 1;

    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Button = styled.button`
  width: 100%;

  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
  text-align: center;
  text-transform: uppercase;

  border-radius: 6px;
  border: none;

  cursor: pointer;

  transition: background 0.1s;

  background: ${({ theme }) => theme.yellow};

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
