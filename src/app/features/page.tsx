import { Banknote, Package, SlidersHorizontal, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { STORE_SETUP_URL } from '@/lib/site'
import CalendlyButton from '../_components/Calendly'
import { ProductPreview } from '../_components/ProductPreview'
import { SupportedGames } from '../_components/SupportedGames'
import { DataSources } from '../_components/DataSources'
import { PricingExample } from '../_components/PricingExample'
import { Banner } from '../_components/Banner'

const features = [
  {
    title: 'Buying rules that fit your store',
    items: [
      'Set fixed offers or a percentage of a market reference price.',
      'Choose the conditions, quantities and products you accept.',
      'Set different rates for cash and store credit.'
    ]
  },
  {
    title: 'Online, in store and at events',
    items: [
      'Let customers build and submit a buylist online.',
      'Use the same system for in-person buying at your counter or at shows.',
      'Share your store page so players can find your buying catalogue.'
    ]
  },
  {
    title: 'Card search and useful filters',
    items: [
      'Find cards by name, set or collector number.',
      'Narrow the catalogue by game, set, rarity and printing.',
      'Check the exact version and condition before adding a card.'
    ]
  },
  {
    title: 'One place for submissions',
    items: [
      'Review the cards, quantities and values customers submit.',
      'Manage the progress of incoming buylists from your dashboard.',
      'Keep a record of completed and previous submissions.'
    ]
  },
  {
    title: 'Listing exports',
    items: [
      'Export accepted buylist items for supported sales platforms.',
      'Available formats include Cardmarket CSV, Whatnot CSV and general CSV.',
      'Export formats and product coverage depend on the destination.'
    ]
  },
  {
    title: 'A flat monthly subscription',
    items: [
      'Pay £25/month including VAT after your 14-day trial.',
      'TCGX charges no buylist transaction commission.',
      'Get priority support from a business that buys and sells trading cards.'
    ]
  }
]

export default function Features() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex min-w-0 grow flex-col items-center'
    >
      <section
        className='container grid w-full gap-10 px-4 py-10 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
        aria-labelledby='features-heading'
      >
        <div className='min-w-0 space-y-6'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            The TCG buylist platform for stores
          </p>
          <h1 id='features-heading'>
            Buy cards on your terms. Keep the work in one place.
          </h1>
          <p className='text-lg'>
            Set your buying rules, let customers submit cards online, and manage
            incoming buylists from one dashboard.
          </p>
          <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <a
              href={STORE_SETUP_URL}
              className={cn(
                buttonVariants({ variant: 'blue', size: 'lg' }),
                'min-h-11 text-center whitespace-normal hover:no-underline'
              )}
            >
              Start 14-day free trial
            </a>
            <CalendlyButton />
          </div>
          <p className='text-muted-foreground text-sm'>
            Then £25/month including VAT. Payment details required. Cancel
            before the trial ends to avoid the monthly charge.
          </p>
        </div>
        <ProductPreview priority />
      </section>
      <section className='bg-accent w-full' aria-labelledby='how-it-works'>
        <div className='container px-4 py-12 sm:px-10 sm:py-16'>
          <h2 id='how-it-works' className='text-center'>
            How it works
          </h2>
          <ol className='grid gap-6 lg:grid-cols-3'>
            <li className='bg-background min-w-0 space-y-4 rounded-xl p-6'>
              <SlidersHorizontal
                aria-hidden='true'
                className='text-blue dark:text-blue-light h-10 w-10'
              />
              <h3>1. Set your buying rules</h3>
              <p>
                Choose a price source and set fixed offers or percentages.
                Decide which conditions and quantities your store will buy.
              </p>
            </li>
            <li className='bg-background min-w-0 space-y-4 rounded-xl p-6'>
              <Package
                aria-hidden='true'
                className='text-blue dark:text-blue-light h-10 w-10'
              />
              <h3>2. Receive customer buylists</h3>
              <p>
                Customers find their cards, see your offers and submit a buylist
                online. You review each submission.
              </p>
            </li>
            <li className='bg-background min-w-0 space-y-4 rounded-xl p-6'>
              <Banknote
                aria-hidden='true'
                className='text-blue dark:text-blue-light h-10 w-10'
              />
              <h3>3. Check cards and arrange payment</h3>
              <p>
                Follow your store’s process for receiving and checking the
                cards, paying the seller and preparing accepted stock for sale.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <PricingExample />
      <section
        className='container w-full px-4 py-12 sm:px-10 sm:py-16'
        aria-labelledby='included-features'
      >
        <h2 id='included-features' className='text-center'>
          The tools to run your buylist
        </h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map(feature => (
            <article
              key={feature.title}
              className='border-border min-w-0 rounded-xl border p-6'
            >
              <h3 className='text-xl'>{feature.title}</h3>
              <ul className='space-y-4'>
                {feature.items.map(item => (
                  <li key={item} className='flex items-start gap-3'>
                    <Check
                      aria-hidden='true'
                      className='text-blue dark:text-blue-light mt-1 h-5 w-5 shrink-0'
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <DataSources />
      <section
        className='container w-full space-y-5 px-4 py-12 sm:px-10 sm:py-16'
        aria-labelledby='source-coverage'
      >
        <h2 id='source-coverage'>
          Clear expectations about prices and payments
        </h2>
        <p className='max-w-3xl'>
          Market feeds refresh daily. Reference prices and available sources
          vary by game, card and product type; they help inform your offers
          rather than guarantee a selling price.
        </p>
        <p className='max-w-3xl'>
          Each store sets its own buying terms, checks submitted cards and
          arranges payment and delivery directly with the seller. TCGX provides
          the platform and does not process or guarantee those payments.
        </p>
      </section>
      <SupportedGames />
      <Banner />
    </main>
  )
}
