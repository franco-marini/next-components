import { DefaultTheme } from 'styled-components'

type Color = keyof DefaultTheme['colors']

export interface StyledTextColor {
  color: Color
}
