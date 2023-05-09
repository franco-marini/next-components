import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme, GlobalStyles } from '../src/constants/theme'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
