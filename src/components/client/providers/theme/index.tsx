'use client'

import { ThemeProvider } from 'styled-components'

import * as theme from '@/constants/theme'

export default function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme.darkTheme}>{children}</ThemeProvider>
}
