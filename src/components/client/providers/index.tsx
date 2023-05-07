import StyledThemeProvider from '@/components/client/providers/theme'
import StyledComponentsRegistry from '@/lib/styled-components-registry'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </StyledComponentsRegistry>
  )
}
