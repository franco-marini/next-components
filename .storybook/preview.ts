import type { Preview } from '@storybook/react'

import { addons } from '@storybook/addons'
import { UPDATE_GLOBALS } from '@storybook/core-events'
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
    backgrounds: {
      values: [
        { name: 'light', value: '#FAFAFA' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
}

const channel = addons.getChannel()

const themeListener = (args) => {
  if (args.globals.theme) {
    let colorTheme = args.globals.theme
    channel.removeListener(UPDATE_GLOBALS, themeListener)
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: colorTheme,
        backgrounds:
          colorTheme === 'dark'
            ? { name: 'dark', value: '#333333' }
            : { name: 'light', value: '#FAFAFA' },
      },
    })
    channel.addListener(UPDATE_GLOBALS, themeListener)
  }
}

function setupBackgroundListener() {
  channel.addListener(UPDATE_GLOBALS, themeListener)
}

export default preview

setupBackgroundListener()
