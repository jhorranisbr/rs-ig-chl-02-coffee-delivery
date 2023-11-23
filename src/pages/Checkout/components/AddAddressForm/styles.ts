import styled from 'styled-components'

export const FormContainer = styled.div`
  flex: 1;
  gap: 2rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};

  h3 {
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.3;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const BaseInput = styled.input`
  flex: 1;

  padding: 0.75rem;

  background: ${({ theme }) => theme['base-input']};

  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    outline: none;
    border-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const SmallInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const FixedInput = styled(BaseInput)`
  width: 3.75rem;
`

export const RowInput = styled.div`
  display: flex;
  gap: 0.75rem;

  & + & {
    margin-top: 1rem;
  }
`
