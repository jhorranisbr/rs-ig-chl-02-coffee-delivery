import styled from 'styled-components'

export const ButtonContainer = styled.button`
  flex: 1;
  width: 100%;

  padding: 0.75rem 0.5rem;

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
