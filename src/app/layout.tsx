import './main.css'

import Providers from '@/components/client/providers'
import { fonts } from '@/constants/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fonts.inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
