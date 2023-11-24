import styled, { css } from 'styled-components'

interface InputContainerProps {
  $sizeMode: 'default' | 'fixed' | 'small'
}

export const InputContainer = styled.div<InputContainerProps>`
  flex: 1;

  position: relative;

  ${(props) =>
    props.$sizeMode === 'fixed' &&
    css`
      max-width: 3.75rem;
    `}

  ${(props) =>
    props.$sizeMode === 'small' &&
    css`
      max-width: 12.5rem;
    `}

  & > span {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme['base-label']};

    transform: translateY(-50%);
  }
`

export const BaseInput = styled.input`
  width: 100%;

  padding: 0.75rem;

  background: ${({ theme }) => theme['base-input']};

  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    outline: none;
    border-color: ${({ theme }) => theme['yellow-dark']};
  }
`
