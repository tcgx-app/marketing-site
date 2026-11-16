import Link from 'next/link'
import Image from 'next/image'
import { Trophy } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AWARD_URL, STORE_SETUP_URL, STORES_URL } from '@/lib/site'
import { AutoplayVideo } from '@/components/common/autoplay-video'
import CalendlyButton from './_components/Calendly'
import { CharacterIllustration } from './_components/CharacterIllustration'
import { ProductPreview } from './_components/ProductPreview'
import { SupportedGames } from './_components/SupportedGames'
import { DataSources } from './_components/DataSources'
import { PricingExample } from './_components/PricingExample'
import { Banner } from './_components/Banner'

export default function Home() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex min-w-0 grow flex-col items-center'
    >
      <section
        className='container grid w-full gap-10 px-4 py-10 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
        aria-labelledby='hero-heading'
      >
        <div className='min-w-0 space-y-6'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            For trading card stores
          </p>
          <h1 id='hero-heading'>Run your TCG buylist on autopilot</h1>
          <p className='max-w-xl text-lg'>
            Publish the cards your store wants to buy, set offers using market
            data, and manage customer submissions in one place.
          </p>
          <p className='font-semibold'>
            14-day free trial. Then £25/month including VAT. No commission.
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
            Create an account, then complete your business subscription setup.
            Payment details are required for the trial; cancel before it ends to
            avoid the monthly charge.
          </p>
          <p>
            Here to sell cards?{' '}
            <a
              href={STORES_URL}
              className='text-blue dark:text-blue-light font-semibold underline'
            >
              Browse store buylists
            </a>{' '}
            without signing in.
          </p>
          <a
            href={AWARD_URL}
            className='inline-flex max-w-full items-center gap-3 text-sm'
          >
            <Trophy
              aria-hidden='true'
              className='text-blue dark:text-blue-light h-6 w-6 shrink-0'
            />
            <span>
              TCGX LTD · Start-Up Award winner
              <br />
              eBay for Business Awards 2025
            </span>
          </a>
        </div>
        <div className='min-w-0'>
          <ProductPreview priority />
        </div>
      </section>
      <section className='bg-accent w-full' aria-labelledby='audiences-heading'>
        <div className='container grid gap-6 px-4 py-12 sm:px-10 sm:py-16 md:grid-cols-2'>
          <div className='text-center md:col-span-2'>
            <h2 id='audiences-heading'>
              A better way for stores and players to connect
            </h2>
            <p>Choose the journey that fits you.</p>
          </div>
          <article className='bg-background flex min-w-0 flex-col items-center gap-6 rounded-xl p-6 text-center sm:p-8'>
            <h3 className='mb-0 text-3xl'>For stores</h3>
            <CharacterIllustration
              character='store-owner'
              className='block w-full max-w-80'
              sizes='(min-width: 768px) 320px, calc(100vw - 80px)'
            />
            <p className='text-xl'>Your store. Your buylist. Your rules.</p>
            <ul className='mx-auto list-disc space-y-2 pl-5 text-left'>
              <li>Set fixed offers or market-based buying rates</li>
              <li>Control conditions and quantity limits</li>
              <li>Offer cash or store credit on your terms</li>
              <li>Review incoming submissions in one dashboard</li>
            </ul>
            <a
              href={STORE_SETUP_URL}
              className={cn(
                buttonVariants({ variant: 'blue' }),
                'mt-auto min-h-11 hover:no-underline'
              )}
            >
              Set up my store
            </a>
          </article>
          <article className='bg-background flex min-w-0 flex-col items-center gap-6 rounded-xl p-6 text-center sm:p-8'>
            <h3 className='mb-0 text-3xl'>For players</h3>
            <CharacterIllustration
              character='collector'
              className='block w-full max-w-80'
              sizes='(min-width: 768px) 320px, calc(100vw - 80px)'
            />
            <p className='text-xl'>Find a store that wants your cards.</p>
            <ul className='mx-auto list-disc space-y-2 pl-5 text-left'>
              <li>Browse participating stores without an account</li>
              <li>Search by card name, set or number</li>
              <li>See each store’s offers before signing in</li>
              <li>Submit your cards online when you are ready</li>
            </ul>
            <a
              href={STORES_URL}
              className={cn(
                buttonVariants({ variant: 'blue' }),
                'mt-auto min-h-11 hover:no-underline'
              )}
            >
              Browse stores and offers
            </a>
            <p className='text-muted-foreground text-sm'>
              Each store sets its own offers, payment options and delivery
              terms, and reviews your cards before payment.
            </p>
          </article>
        </div>
      </section>
      <SupportedGames />
      <section className='bg-accent w-full' aria-labelledby='customer-buylists'>
        <div className='container grid gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'>
          <div className='min-w-0 space-y-5'>
            <h2 id='customer-buylists'>
              Let customers build their buylist online
            </h2>
            <p>
              Players search the cards your store wants to buy, choose condition
              and quantity, and submit a buylist for your review.
            </p>
            <ol className='list-decimal space-y-3 pl-5'>
              <li>
                Find a participating store and search its buying catalogue.
              </li>
              <li>Choose the correct card version, condition and quantity.</li>
              <li>
                Sign in to submit, then follow the store’s delivery
                instructions.
              </li>
            </ol>
            <p className='text-muted-foreground text-sm'>
              Cash, store credit, shipping and drop-off options depend on the
              store.
            </p>
            <a
              href={STORES_URL}
              className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
            >
              Explore participating stores
            </a>
          </div>
          <AutoplayVideo
            src='/assets/videos/customer-buylist.mp4'
            poster='/assets/videos/customer-buylist-poster.webp'
            label='Product demo: searching cards and building a buylist'
            className='h-auto w-full min-w-0 rounded-lg shadow-xl'
          />
        </div>
      </section>
      <PricingExample />
      <section
        className='container grid w-full gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
        aria-labelledby='pricing-demo'
      >
        <AutoplayVideo
          src='/assets/videos/store-pricing.mp4'
          poster='/assets/videos/store-pricing-poster.webp'
          label='Product demo: configuring store buying rules'
          className='order-2 h-auto w-full min-w-0 rounded-lg shadow-xl lg:order-1'
        />
        <div className='order-1 min-w-0 space-y-5 lg:order-2'>
          <h2 id='pricing-demo'>Spend less time updating individual offers</h2>
          <p>
            Choose a price source, set your buying rates and apply changes
            across matching products. Market feeds refresh daily, and
            percentage-based offers use the updated reference prices.
          </p>
          <p>
            You control the prices and products your store accepts. Coverage
            varies by game, product and source.
          </p>
          <Link
            href='/features/'
            className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
          >
            Explore buylist features
          </Link>
        </div>
      </section>
      <DataSources />
      <section
        className='container grid w-full gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
        aria-labelledby='award-heading'
      >
        <picture className='block min-w-0'>
          <source
            type='image/webp'
            srcSet='/assets/images/ebay-award-480.webp 480w, /assets/images/ebay-award-800.webp 800w'
            sizes='(min-width: 1024px) 45vw, 90vw'
          />
          <Image
            src='/assets/images/ebay-award-800.webp'
            alt='TCGX’s eBay Start-Up Award trophy'
            width={800}
            height={800}
            className='mx-auto h-auto w-full max-w-lg'
          />
        </picture>
        <div className='min-w-0 space-y-5'>
          <Trophy
            aria-hidden='true'
            className='text-blue dark:text-blue-light h-12 w-12'
          />
          <h2 id='award-heading'>Built by a trading card business</h2>
          <p>
            TCGX LTD won the Start-Up Award at the 2025 eBay for Business
            Awards.
          </p>
          <p>
            We bring experience of buying and selling trading cards to the tools
            we build for stores and collectors.
          </p>
          <a
            href={AWARD_URL}
            className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
          >
            See eBay’s winners announcement
          </a>
        </div>
      </section>
      <Banner />
    </main>
  )
}
