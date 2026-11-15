import Link from 'next/link'
import { APP_URL, STORES_URL } from '@/lib/site'

const policies = [
  ['Terms and Conditions', 'terms-and-conditions'],
  ['Privacy Policy', 'privacy-policy'],
  ['Acceptable Use Policy', 'acceptable-use-policy'],
  ['Cookie Policy', 'cookie-policy'],
  ['Disclaimer', 'disclaimer']
]

export function Footer() {
  return (
    <footer className='bg-muted w-full border-t'>
      <div className='container grid gap-8 px-4 py-10 sm:px-10 md:grid-cols-2'>
        <div className='min-w-0 space-y-4'>
          <p className='text-2xl font-bold'>TCGX</p>
          <p>Online buylists for trading card stores and players.</p>
          <a
            href='mailto:contact@tcgx.co.uk'
            className='inline-flex min-h-11 max-w-full items-center break-all underline'
          >
            contact@tcgx.co.uk
          </a>
          <p className='text-muted-foreground text-sm'>
            Each store sets its own offers and terms, checks submitted cards,
            and arranges payment and delivery directly with the seller.
          </p>
        </div>
        <div className='min-w-0'>
          <nav
            aria-label='Footer navigation'
            className='grid grid-cols-2 gap-x-5'
          >
            <Link
              href='/features/'
              className='inline-flex min-h-11 items-center underline'
            >
              Features
            </Link>
            <Link
              href='/pricing/'
              className='inline-flex min-h-11 items-center underline'
            >
              Pricing
            </Link>
            <a
              href={STORES_URL}
              className='inline-flex min-h-11 items-center underline'
            >
              Find a store
            </a>
            <a
              href={`${APP_URL}/faqs`}
              className='inline-flex min-h-11 items-center underline'
            >
              FAQs
            </a>
          </nav>
          <nav aria-label='Policies' className='mt-4 flex flex-wrap gap-x-5'>
            {policies.map(([label, path]) => (
              <a
                key={path}
                href={`${APP_URL}/${path}`}
                className='inline-flex min-h-11 items-center text-sm underline'
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className='text-muted-foreground text-sm md:col-span-2'>
          © TCGX LTD, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
