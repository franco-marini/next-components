import { createGlobalStyle, DefaultTheme } from 'styled-components'

import { fonts } from './fonts'

// If theme is being modified please update the file `types/styled.d.ts`
export const lightTheme: DefaultTheme = {
  typography: {
    type: {
      primary: fonts.inter.style.fontFamily,
    },
    weight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
      normal: 400,
      bold: 700,
    },
    size: {
      h1: '2.4rem',
      h2: '2rem',
      h3: '1.8rem',
      h4: '1.6rem',
      body: '1.6rem',
    },
  },
  colors: {
    primary: '#40A3C2FF',
    secondary: '#58D5D1FF',
    background: '#FAFAFAF0',
    font: '#1F1F1F',
    shadow: '#0F0F0F3A',
  },
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    primary: '#40A3C2FF',
    secondary: '#58D5D1FF',
    background: '#333333FF',
    font: '#FAFAFA',
    shadow: '#FAFAFA1F',
  },
}

// Should be same as `src/app/main.css`
export const GlobalStyles = createGlobalStyle`
  html {
  /* Convert rem to 10px */
  font-size: 62.5%;
  color: #1f1f1f;
  font-family: "'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4', Arial, sans-serif",
}

  body {
    display: block;
    background-color: #fafafa;
    margin: 0px;
  }

  h1 {
    /* 24px */
    font-size: 2.4rem;
  }

  h2 {
    /* 20px */
    font-size: 2rem;
  }

  h3 {
    /* 18px */
    font-size: 1.8rem;
  }

  h4 {
    /* 16px */
    font-size: 1.6rem;
  }

  p,
  li,
  span {
    /* 16px */
    font-size: 1.6rem;
  }
`
