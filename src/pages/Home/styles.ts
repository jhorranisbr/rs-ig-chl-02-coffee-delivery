import styled from 'styled-components'

import imgIntroBackground from '../../assets/intro-background.png'

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;

  background-image: url(${imgIntroBackground});
  background-size: cover;
`

export const IntroContent = styled.div`
  max-width: 70rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;
`

export const IntroInfos = styled.div`
  max-width: 36rem;
`

export const IntroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const IntroTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-title']};
`

export const IntroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-text']};
`

export const IntroItems = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    line-height: 1.3;
  }
`

const ICON_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IntroItemIconProps {
  $background: keyof typeof ICON_COLORS
}

export const IntroItemIcon = styled.div<IntroItemIconProps>`
  min-width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.background};

  background: ${(props) => props.theme[ICON_COLORS[props.$background]]};

  border-radius: 50%;
`

export const IntroCover = styled.img`
  max-width: 100%;
  height: auto;
`
