import styled from 'styled-components'

export const PaymentMethodFormContainer = styled.div`
  display: flex;

  gap: 0.75rem;
`

export const Select = styled.button`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 6px;

  cursor: pointer;

  background: ${({ theme }) => theme['base-button']};

  transition: background 0.1s border-color;

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    color: ${({ theme }) => theme['base-subtitle']};
    background: ${({ theme }) => theme['base-hover']};
  }

  &:focus {
    background: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme.purple};

    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
  }
`
