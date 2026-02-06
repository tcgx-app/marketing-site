import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '@/components/ui/button'
import { Banknote, Check, Package, SlidersHorizontal } from 'lucide-react'

export default function Features() {
  const appUrl = 'https://buylist.tcgx.co.uk'
  return (
    <main className='flex h-full min-h-full grow flex-col flex-wrap items-center'>
      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='flex flex-col justify-center space-y-6 md:basis-[calc(50%-16px)]'>
          <div className='max-w-fit self-center'>
            <h1>
              Buy smarter.
              <br />
              Sell more.
              <br />
              Waste less time.
            </h1>
            <p>The buylist platform built for TCG stores</p>
          </div>
          <div className='flex w-full justify-center'>
            <Link
              href={`${appUrl}/signin`}
              className={twMerge(
                buttonVariants({ variant: 'blue' }),
                'cursor-pointer hover:no-underline'
              )}
            >
              Start 14-day free trial
            </Link>
          </div>
        </div>
        <div className='md:basis-[calc(50%-16px)]'>
          <Image
            src='/assets/images/tcgx-app.png'
            alt='TCGX app screenshot'
            width='500'
            height='500'
            className='drop-shadow-foreground/20 dark:drop-shadow-background/20 w-full drop-shadow-xl'
          />
        </div>
      </div>

      <div className='bg-accent w-full'>
        <div className='container flex flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
          <div className='mb-4 flex basis-full flex-col items-center'>
            <h1>How it works</h1>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(33%-18px)]'>
            <SlidersHorizontal className='stroke-blue dark:stroke-blue-light mx-auto h-20 w-20 stroke-2' />
            <h2 className='text-3xl'>1. Set your buylist rules</h2>
            <p className='text-xl'>
              Set a fixed price or percenatge of price source.
            </p>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(33%-18px)]'>
            <Package className='stroke-blue dark:stroke-blue-light mx-auto h-20 w-20 stroke-2' />
            <h2 className='text-3xl'>2. Players submit buylists</h2>
            <p className='text-xl'>Online - In-Store - Events</p>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(33%-18px)]'>
            <Banknote className='stroke-blue dark:stroke-blue-light mx-auto h-20 w-20 stroke-2' />
            <h2 className='text-3xl'>3. Review and export listings</h2>
            <p className='text-xl'>
              Export to TCGPlayer, CardMarket, Whatnot - or sell in-store
            </p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='container flex flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
          <div className='mb-4 flex basis-full flex-col items-center'>
            <h1>A better way to buy cards at scale</h1>
          </div>
          <div className='bg-accent grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-3xl'>Rule-based buylist pricing</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 list-disc'>
                Live pricing from CardMarket and TCGPlayer
              </li>
              <li className='ml-6 list-disc'>
                Set fixed prices or percentages of the market
              </li>
              <li className='ml-6 list-disc'>
                Our engine will automatically update your offerings
              </li>
            </ul>
          </div>
          <div className='bg-accent grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-3xl'>In-store and online buylist</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 list-disc'>
                Have customers around the world sell to you buylist
              </li>
              <li className='ml-6 list-disc'>
                Use the platofmr when vending at shows or even ste up an
                in-store kiosk to buy in person
              </li>
            </ul>
          </div>
          <div className='bg-accent grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-3xl'>Fast card search & smart filters</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 list-disc'>
                Fast search and smart filters enable you to find the card
                you&#39;re looking for in seconds
              </li>
              <li className='ml-6 list-disc'>
                Over 100,000+ cards in our catalog and new cards are added
                regularly.
              </li>
            </ul>
          </div>
          <div className='bg-accent grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-3xl'>Omni-channel listings</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 list-disc'>
                Export your buylists directly into your sales platforms and sell
                with ease.
              </li>
              <li className='ml-6 list-disc'>
                Set fixed prices or percentages of the market
              </li>
              <li className='ml-6 list-disc'>
                Currently support Cardmarket, TCGplayer and Whatnot
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-accent w-full'>
        <div className='container space-y-10 px-4 py-10 text-center sm:px-10 sm:py-20 lg:space-y-15'>
          <h1>Works with the tools you already use</h1>
          <div className='space-between flex flex-wrap items-stretch justify-center gap-4 lg:gap-8'>
            <Link
              href='/'
              className='dark:bg-foreground bg-background flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'
            >
              <Image
                src='/assets/images/tcgplayer.png'
                alt='TCGPlayer logo'
                width='250'
                height='150'
                className='max-h-15 w-auto md:max-h-25'
              />
            </Link>
            <Link
              href='/'
              className='dark:bg-foreground bg-background flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'
            >
              <Image
                src='/assets/images/cardmarket.png'
                alt='Cardmarket logo'
                width='250'
                height='150'
                className='max-h-15 w-auto md:max-h-25'
              />
            </Link>
            <Link
              href='/'
              className='dark:bg-foreground bg-background flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'
            >
              <Image
                src='/assets/images/ebay.png'
                alt='eBay logo'
                width='250'
                height='150'
                className='max-h-15 w-auto md:max-h-25'
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='container flex flex-wrap gap-8 px-4 pt-10 sm:px-10 sm:pt-20'>
          <div className='mb-4 flex basis-full flex-col items-center'>
            <h1>Everything included</h1>
          </div>
          <div className='border-accent grow space-y-6 rounded-md border-2 p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-2xl'>Pricing & automation</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Set simple buy rules using fixed prices or market percentages
              </li>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Auto-price from live Cardmarket or TCGplayer data
              </li>
            </ul>
          </div>
          <div className='border-accent grow space-y-6 rounded-md border-2 p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-2xl'>Selling & integrations</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Export buylists directly to TCGplayer, Cardmarket, or Whatnot
              </li>
            </ul>
          </div>
          <div className='border-accent grow space-y-6 rounded-md border-2 p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-2xl'>Workflow & scale</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Manage all incoming buylists from one central dashboard
              </li>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Use the same system for online, in-store, and event buying
              </li>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Works across all major TCGs you buy
              </li>
            </ul>
          </div>
          <div className='border-accent grow space-y-6 rounded-md border-2 p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-2xl'>Cost & support</h2>
            <ul className='mx-auto w-fit space-y-4 text-left text-xl'>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                No per-order or transaction fees - just one flat monthly price
              </li>
              <li className='ml-6 flex list-none gap-2'>
                <Check size='20' className='mt-1 shrink-0' />
                Priority support from someone who actually sells TCGs New
                features shipped regularly based on store feedbacl See Pricing
              </li>
            </ul>
          </div>
          <div className='flex w-full justify-center'>
            <Link
              href='/pricing'
              className={twMerge(
                buttonVariants({ variant: 'blue' }),
                'min-w-[200px] cursor-pointer text-lg hover:no-underline'
              )}
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>

      <div className='container w-full space-y-10 px-4 py-10 text-center sm:px-10 sm:py-20 lg:space-y-15'>
        <h1>Supported TCGs</h1>
        <div className='space-between flex flex-wrap items-stretch justify-center gap-4 lg:gap-8'>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/pokemon.png'
              alt='Pokemon TCG logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/mtg.png'
              alt='Magic: The Gathering logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/one-piece.png'
              alt='One Piece TCG logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/lorcana.png'
              alt='Disney Lorcana logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/yugioh.png'
              alt='Yu-Gi-Oh! TCG logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/riftbound.png'
              alt='Riftbound TCG logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div>
          <div className='flex w-auto items-center justify-center rounded-md p-4 text-xl font-bold italic'>
            ...and more coming soon!
          </div>
          {/* <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
                  <Image
                    src='/assets/images/starwars.png'
                    alt='Star Wars TCG logo'
                    width='250'
                    height='150'
                    className='max-h-15 w-auto md:max-h-25'
                  />
                </div> */}
        </div>
      </div>
      <div className='relative container flex max-w-full justify-center max-sm:px-4'>
        <div className='bg-blue absolute top-6 left-0 flex h-full max-h-30 w-full items-center justify-center sm:top-12 md:max-h-45 lg:top-20 lg:max-h-62.5'>
          <span className='max-w-1/3 text-center text-white md:text-4xl'>
            From binder to cash in a few clicks
          </span>
        </div>
        <div className='flex w-full justify-between lg:max-w-[1600px]'>
          <div className='max-w-1/3'>
            <Image
              src='/assets/images/tcgx-image-3.png'
              alt='TCGX app screenshot'
              width='500'
              height='500'
              className='w-full'
            />
          </div>
          <div className='mt-16 max-w-1/3 lg:mt-30'>
            <Image
              src='/assets/images/tcgx-image-2.png'
              alt='TCGX app screenshot'
              width='500'
              height='500'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
