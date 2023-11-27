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

  margin-bottom: 1.5rem;
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
