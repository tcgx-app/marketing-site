import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata(
  'TCGX pricing | £25/month for stores, free for players',
  'Try TCGX free for 14 days, then £25/month including VAT for stores. No buylist commission. Players can browse offers and create an account for free.',
  '/pricing/'
)

interface PricingLayoutProps {
  children: React.ReactNode
}

export default async function PricingLayout({ children }: PricingLayoutProps) {
  return <>{children}</>
}
