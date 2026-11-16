import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Trophy } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AWARD_URL, STORE_SETUP_URL, STORES_URL } from '@/lib/site'
import { AutoplayVideo } from '@/components/common/autoplay-video'
import CalendlyButton from './_components/Calendly'
import { CharacterIllustration } from './_components/CharacterIllustration'
import { BuyingRulePreview } from './_components/BuyingRulePreview'
import { Banner } from './_components/Banner'

const workflow = [
  [
    'Set your buying rules',
    'Choose a reference source, fixed offers or percentages, conditions and buying limits.'
  ],
  [
    'Receive customer buylists',
    'Players see your offers and submit the cards they want to sell.'
  ],
  [
    'Review, check and pay',
    'Manage submissions in one place. Your store checks the cards and arranges payment.'
  ]
]
const games = [
  ['Pokémon', 'pokemon'],
  ['Magic: The Gathering', 'mtg'],
  ['One Piece', 'one-piece'],
  ['Disney Lorcana', 'lorcana'],
  ['Yu-Gi-Oh!', 'yugioh'],
  ['Riftbound', 'riftbound']
]

export default function Home() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex min-w-0 grow flex-col items-center'
    >
      <section
        className='container grid w-full gap-8 px-4 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12'
        aria-labelledby='hero-heading'
      >
        <div className='min-w-0 space-y-5'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            For trading card stores
          </p>
          <h1
            id='hero-heading'
            className='text-[2rem] leading-[1.2] sm:text-[2.5rem] sm:leading-[1.22]'
          >
            Your buying rules.
            <br className='hidden sm:block' /> Automatically updated offers.
          </h1>
          <p className='max-w-xl text-lg'>
            Set what your store wants to buy. TCGX updates your market-based
            offers and brings customer buylists together for you to review.
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
            Payment details required. Cancel before the trial ends to avoid the
            monthly charge.
          </p>
          <p className='text-sm'>
            Here to sell cards?{' '}
            <a
              href={STORES_URL}
              className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
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
              className='text-blue dark:text-blue-light h-5 w-5 shrink-0'
            />
            <span>
              eBay for Business Awards 2025
              <br />
              <span className='text-muted-foreground'>
                TCGX LTD · Start-Up Award winner
              </span>
            </span>
          </a>
        </div>
        <BuyingRulePreview />
      </section>
      <section
        id='how-it-works'
        className='bg-accent w-full scroll-mt-8'
        aria-labelledby='workflow-heading'
      >
        <div className='container px-4 py-10 sm:px-10 sm:py-14'>
          <div className='mb-7 flex flex-wrap items-end justify-between gap-4'>
            <div>
              <p className='text-blue dark:text-blue-light mb-2 text-sm font-semibold'>
                THE STORE WORKFLOW
              </p>
              <h2 id='workflow-heading' className='mb-0'>
                From buying rule to buylist.
              </h2>
            </div>
            <Link
              href='/features/'
              className='text-blue dark:text-blue-light inline-flex min-h-11 items-center gap-2 font-semibold underline'
            >
              Explore the tools{' '}
              <ArrowRight aria-hidden='true' className='h-4 w-4' />
            </Link>
          </div>
          <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-12'>
            <figure className='min-w-0'>
              <AutoplayVideo
                src='/assets/videos/store-pricing.mp4'
                poster='/assets/videos/store-pricing-poster.webp'
                label='Product demo: configuring store buying rules'
                className='h-auto w-full rounded-lg shadow-lg'
              />
              <figcaption className='text-muted-foreground mt-3 text-sm'>
                See fixed offers, percentage rates and bulk updates in TCGX.
              </figcaption>
            </figure>
            <ol className='space-y-6'>
              {workflow.map(([title, description], index) => (
                <li key={title} className='flex gap-4'>
                  <span
                    className='bg-background text-blue dark:text-blue-light flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold'
                    aria-hidden='true'
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className='mb-2 text-xl'>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section
        className='container w-full px-4 py-9 sm:px-10'
        aria-labelledby='supported-games'
      >
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h2 id='supported-games' className='mb-0 text-xl'>
            Built for your card catalogue
          </h2>
          <Link
            href='/features/#compatibility'
            className='text-blue dark:text-blue-light inline-flex min-h-11 items-center text-sm font-semibold underline'
          >
            Check games, price sources and exports
          </Link>
        </div>
        <ul className='mt-4 grid grid-cols-3 items-center gap-4 lg:grid-cols-6'>
          {games.map(([name, file]) => (
            <li
              key={file}
              className='flex h-14 items-center justify-center rounded-lg px-2 dark:bg-white'
            >
              <Image
                src={'/assets/images/' + file + '.png'}
                alt={name + ' logo'}
                width={250}
                height={150}
                className='h-10 w-full object-contain'
              />
            </li>
          ))}
        </ul>
        <p className='text-muted-foreground mt-4 text-sm'>
          Daily market feeds from available TCGplayer, Cardmarket and eBay UK
          sources. Coverage depends on the game and product.
        </p>
      </section>
      <section
        id='customer-buylists-section'
        className='border-border w-full border-t'
        aria-labelledby='customer-buylists'
      >
        <div className='container grid items-center gap-8 px-4 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12'>
          <div className='min-w-0 space-y-5'>
            <h2 id='customer-buylists'>
              Players see your offers.
              <br />
              You review the cards.
            </h2>
            <ul className='space-y-3'>
              {[
                'Customers search your buying catalogue and build a buylist online.',
                'You review their submission before receiving and checking the cards.',
                'Your store arranges payment and delivery directly with the seller.'
              ].map(text => (
                <li key={text} className='flex gap-3'>
                  <Check
                    aria-hidden='true'
                    className='text-blue dark:text-blue-light mt-1 h-5 w-5 shrink-0'
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className='bg-accent flex items-center gap-4 rounded-xl p-4'>
              <CharacterIllustration
                character='collector'
                className='block w-24 shrink-0'
                sizes='96px'
                decorative
              />
              <div>
                <p className='text-sm'>A player looking to sell?</p>
                <a
                  href={STORES_URL}
                  className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
                >
                  Browse stores and offers
                </a>
              </div>
            </div>
          </div>
          <figure className='min-w-0'>
            <AutoplayVideo
              src='/assets/videos/customer-buylist.mp4'
              poster='/assets/videos/customer-buylist-poster.webp'
              label='Product demo: searching cards and building a buylist'
              className='h-auto w-full rounded-lg shadow-lg'
            />
            <figcaption className='text-muted-foreground mt-3 text-sm'>
              The customer journey, from card search to a submitted buylist.
            </figcaption>
          </figure>
        </div>
      </section>
      <Banner />
    </main>
  )
}
