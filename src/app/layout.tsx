import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { MainNav } from '../components/common/main-nav'

import '../app/tailwind.css'

import { Public_Sans } from 'next/font/google'
const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | TCGX',
    default: 'TCGX'
  },
  description: 'TCGX'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={publicSans.className}>
        <ThemeProvider
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <MainNav>{children}</MainNav>
        </ThemeProvider>
      </body>
    </html>
  )
}
