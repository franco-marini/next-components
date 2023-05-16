import 'styled-components'

type RemValue = `${number}rem`
type ColorScheme = string

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      size: Record<'h1' | 'h2' | 'h3' | 'h4' | 'body', RemValue>
      type: {
        primary: string
      }
      weight: {
        100?: 100
        200?: 200
        300?: 300
        400: 400
        500?: 500
        600?: 600
        700: 700
        800?: 800
        900?: 900
        normal: 400
        bold: 700
      }
    }
    colors: {
      primary: ColorScheme
      secondary: ColorScheme
      background: ColorScheme
      font: ColorScheme
      shadow: ColorScheme
      subtext: ColorScheme
      white: ColorScheme
      black: ColorScheme
      error: ColorScheme
      success: ColorScheme
      disabled: ColorScheme
    }
  }
}
