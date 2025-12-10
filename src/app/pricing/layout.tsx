import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Pricing | TCGX',
    default: 'Pricing'
  },
  description:
    'Discover TCGX pricing plans tailored to your business needs. Choose the perfect plan to elevate your digital presence with our expert services.'
}

interface PricingLayoutProps {
  children: React.ReactNode
}

export default async function PricingLayout({ children }: PricingLayoutProps) {
  return <>{children}</>
}
