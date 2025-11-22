import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../app/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | TCGX',
    default: 'TCGX'
  },
  description: 'TCGX web app'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
