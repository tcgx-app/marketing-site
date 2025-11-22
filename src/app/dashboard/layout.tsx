import { Metadata } from 'next'
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query'

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

export default async function BuylistLayout(
  { children }: BuylistLayoutProps,
  dehydratedState: DehydratedState
) {
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  )
}
