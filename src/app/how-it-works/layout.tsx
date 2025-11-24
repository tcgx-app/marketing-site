import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | How It Works | TCGX',
    default: 'How It Works'
  },
  description: 'How the TCGX app works'
}

interface HowItWorksLayoutProps {
  children: React.ReactNode
}

export default async function HowItWorksLayout({
  children
}: HowItWorksLayoutProps) {
  return <>{children}</>
}
