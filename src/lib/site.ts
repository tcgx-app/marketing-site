import type { Metadata } from 'next'

export const SITE_URL = 'https://www.tcgx.co.uk'
export const APP_URL = 'https://buylist.tcgx.co.uk'
export const STORES_URL = `${APP_URL}/stores`
export const STORE_SETUP_URL = `${APP_URL}/subscription/upgrade`
export const SIGN_IN_URL = `${APP_URL}/api/auth/signin?returnTo=%2Fdashboard`
export const DEMO_URL = 'https://calendly.com/brian-tcgx/tcgx-demo'
export const AWARD_URL =
  'https://www.ebay.co.uk/sellercentre/news/november-uk-leaders'

const callback = new URL('/api/auth/sso-callback', APP_URL)
callback.searchParams.set('returnTo', '/stores')
const registration = new URL('/register', 'https://auth.tcgx.co.uk')
registration.searchParams.set('callbackUrl', callback.toString())
export const REGISTER_URL = registration.toString()

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
      siteName: 'TCGX',
      url: `${SITE_URL}${path}`,
      images: [
        {
          url: `${SITE_URL}/assets/tcgx-social.png`,
          width: 1200,
          height: 630,
          alt: 'TCGX — online buylists for trading card stores and players'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/assets/tcgx-social.png`]
    }
  }
}
