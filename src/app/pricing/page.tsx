import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '@/_components/ui/button'
import { Badge } from '@/_components/ui/badge'

export default function Pricing() {
  const appUrl = 'https://app.tcgx.co.uk'
  return (
    <main className='flex h-full min-h-full grow flex-col flex-wrap items-center'>
      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='flex flex-col justify-center space-y-6 md:basis-[calc(50%-16px)]'>
          <h1>Simple pricing for players and stores</h1>
          <p>
            Players use TCGX for free. Stores pay a low monthly fee - no hidden
            charges, no contracts.
          </p>
        </div>
        <div className='md:basis-[calc(50%-16px)]'>
          {/* <Image
            src='/assets/images/tcgx-app.png'
            alt='TCGX app screenshot'
            width='500'
            height='500'
            className='drop-shadow-foreground/20 dark:drop-shadow-background/20 w-full drop-shadow-xl'
          /> */}
        </div>
      </div>

      <div className='bg-accent w-full'>
        <div className='container flex flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
          <div className='mb-4 flex basis-full flex-col items-center'>
            <h1>Choose your plan</h1>
            <p className='text-xl'>
              TCGX connects players and card shops through smart buylists.
            </p>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <Badge
              variant='outline'
              className='border-blue text-blue dark:border-blue-light dark:text-blue-light border-2'
            >
              For Players
            </Badge>
            <h2 className='text-6xl'>FREE</h2>
            <p className='text-xl'>Forever free for players</p>
            <ul className='mx-auto w-fit text-left'>
              <li className='list-disc'>Browse store buylists</li>
              <li className='list-disc'>Submit your cards</li>
            </ul>
            <div className='flex w-full justify-center'>
              <Link
                href={`${appUrl}/signin`}
                className={twMerge(
                  buttonVariants({ variant: 'outline-blue' }),
                  'cursor-pointer hover:no-underline'
                )}
              >
                Sign up for free
              </Link>
            </div>
          </div>
          <div className='bg-background drop-shadow-foreground/20 dark:drop-shadow-background/20 dark:border-blue-light border-blue grow space-y-6 rounded-md border-2 p-8 text-center drop-shadow-xl md:basis-[calc(50%-16px)]'>
            <Badge className='bg-blue text-white'>For Stores</Badge>
            <h2 className='text-3xl'>
              £<span className='text-6xl'>25</span>/month
            </h2>
            <p className='text-xl'>Create a buylist for your store!</p>
            <ul className='mx-auto w-fit text-left'>
              <li className='list-disc'>Set your buy prices</li>
              <li className='list-disc'>Get card offers online</li>
            </ul>
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
        </div>
      </div>

      <div className='container w-full space-y-10 px-4 py-10 text-center sm:px-10 sm:py-20 lg:space-y-15'>
        <h1>Everything included in the store plan </h1>
        <div className='space-between flex flex-wrap items-stretch justify-center gap-4 lg:gap-8'>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
          </div>
          <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            Something
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
    </main>
  )
}
