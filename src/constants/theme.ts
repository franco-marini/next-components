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
    primary: '#40A3C2',
    secondary: '#58D5D1',
    background: '#FAFAFA',
    font: '#1F1F1F',
    shadow: '#0F0F0F3A',
    subtext: '#B0B0B0',
    disabled: '#4A4A4A',
    black: '#1F1F1F',
    white: '#FAFAFA',
    error: '#D32F2F',
    success: '#2E7D32',
  },
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#40A3C2',
    secondary: '#58D5D1',
    background: '#333333',
    font: '#FAFAFA',
    shadow: '#FAFAFA1F',
    disabled: '#B5B5B5',
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
    background-color: #FAFAFA;
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

  input {
    /* 18px */
    font-size: 1.8rem;
  }

  p,
  li,
  span,
  label, div {
    /* 16px */
    font-size: 1.6rem;
  }

`
