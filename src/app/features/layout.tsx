import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Features | TCGX',
    default: 'Features'
  },
  description:
    'Discover features that make it easy for anyone to sell their tTCG cards to stores. Connect, list, and manage your cards with tools built for sellers and retailers.'
}

interface FeaturesLayoutProps {
  children: React.ReactNode
}

export default async function FeaturesLayout({
  children
}: FeaturesLayoutProps) {
  return <>{children}</>
}
