import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata(
  'TCG buylist features: pricing rules and submissions | TCGX',
  'Set buying rules, receive customer buylists, search your card catalogue and manage submissions with TCGX. Built for online, in-store and event buying.',
  '/features/'
)

interface FeaturesLayoutProps {
  children: React.ReactNode
}

export default async function FeaturesLayout({
  children
}: FeaturesLayoutProps) {
  return <>{children}</>
}
