import styled from 'styled-components'

export const FormContainer = styled.div`
  flex: 1;
  gap: 2rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};

  > h3 {
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.3;
    margin-bottom: 0.125rem;
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const RowInput = styled.div`
  display: flex;
  gap: 0.75rem;

  & + & {
    margin-top: 1rem;
  }
`
