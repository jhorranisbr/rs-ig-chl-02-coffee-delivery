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
