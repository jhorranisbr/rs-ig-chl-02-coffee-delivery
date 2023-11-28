import styled, { css } from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['yellow-dark']};

  margin-bottom: 0.25rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  gap: 6rem;
`

export const InfoContainer = styled.div`
  flex: 1;
  margin-top: 2.5rem;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-origin: border-box;
  ${({ theme }) => css`
    background-image: linear-gradient(
      to bottom right,
      ${theme.yellow},
      ${theme.purple}
    );
  `}

  border: 1px solid transparent;

  overflow: hidden;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  background: ${({ theme }) => theme.background};
`

const INFO_ICON_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface InfoProps {
  $color: keyof typeof INFO_ICON_COLORS
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${(props) => props.theme[INFO_ICON_COLORS[props.$color]]};
    color: ${({ theme }) => theme.background};
  }
`
