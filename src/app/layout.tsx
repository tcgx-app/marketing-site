import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { MainNav } from '../components/common/main-nav'

import '../app/tailwind.css'

import { Public_Sans } from 'next/font/google'
import { pageMetadata, SITE_URL } from '@/lib/site'
const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(
    'TCGX | Online buylists for trading card stores',
    'Create your store’s online TCG buylist. Set market-based buying rules and manage submissions. 14-day trial, then £25/month including VAT. Free for players.',
    '/'
  )
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={publicSans.className}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: 'TCGX',
                  legalName: 'TCGX LTD',
                  url: SITE_URL,
                  logo: `${SITE_URL}/assets/tcgx-black.png`
                },
                {
                  '@type': 'WebSite',
                  name: 'TCGX',
                  url: SITE_URL,
                  publisher: { '@id': `${SITE_URL}/#organization` }
                }
              ]
            })
          }}
        />
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
