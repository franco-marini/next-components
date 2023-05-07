'use client'

import { ThemeProvider } from 'styled-components'

import theme from '@/constants/theme'

export default function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
