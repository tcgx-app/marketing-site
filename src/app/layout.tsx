import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { MainNav } from './_components/main-nav'

import '../app/tailwind.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
