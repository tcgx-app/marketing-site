import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard | TCGX',
    default: 'Dashboard'
  },
  description: ''
}

interface BuylistLayoutProps {
  children: React.ReactNode
}

export default async function BuylistLayout({ children }: BuylistLayoutProps) {
  return <>{children}</>
}
