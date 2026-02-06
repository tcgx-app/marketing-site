import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export default function Pricing() {
  const appUrl = 'https://buylist.tcgx.co.uk'
  return (
    <main className='flex h-full min-h-full grow flex-col flex-wrap items-center'>
      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='flex flex-col justify-center space-y-6 md:basis-[calc(50%-16px)]'>
          <h1>Simple pricing for card stores</h1>
          <p>
            Players use TCGX for free. Stores pay a low monthly fee - No
            commissions.
          </p>
        </div>
        <div className='md:basis-[calc(50%-16px)]'>
          <Image
            src='/assets/images/tcgx-image-1.png'
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
            <h1>Choose your plan</h1>
            <p className='text-xl'>
              TCGX connects players and card shops through smart buylists.
            </p>
          </div>
          <div className='bg-background flex grow flex-col items-center gap-6 rounded-md p-8 md:basis-[calc(50%-16px)]'>
            <Badge variant='outline-blue' className='w-fit'>
              For Players
            </Badge>
            <h2 className='text-6xl'>FREE</h2>
            <p className='text-xl'>Forever free for players</p>
            <ul className='mx-auto w-fit space-y-4 text-left'>
              <li className='list-disc'>Create buylists and send to stores</li>
              <li className='list-disc'>Track offers and payouts</li>
              <li className='list-disc'>Compare prices across stores</li>
              <li className='list-disc'>Email notifications at every step</li>
            </ul>
            <div className='flex w-full grow flex-col items-center justify-end'>
              <Link
                href={`${appUrl}/signin`}
                className={twMerge(
                  buttonVariants({ variant: 'outline-blue' }),
                  'mb-7 cursor-pointer hover:no-underline'
                )}
              >
                Create a free account
              </Link>
            </div>
          </div>
          <div className='bg-background drop-shadow-foreground/20 dark:drop-shadow-background/20 dark:border-blue-light border-blue flex grow flex-col items-center space-y-6 rounded-md border-2 p-8 text-center drop-shadow-xl md:basis-[calc(50%-16px)]'>
            <Badge variant='blue' className='w-fit'>
              For Stores
            </Badge>
            <h2 className='text-3xl'>
              £<span className='text-6xl'>25</span>/month
            </h2>
            <p className='text-xl'>Inc. VAT. No hidden fees</p>
            <ul className='mx-auto w-fit space-y-4 text-left'>
              <li className='list-disc'>Rules-based buylist pricing</li>
              <li className='list-disc'>
                Live market pricing from CardMarket & TCGPlayer
              </li>
              <li className='list-disc'>
                Central dashboard for all incoming buylists
              </li>
              <li className='list-disc'>Works across all major TCGs</li>
              <li className='list-disc'>Priority support</li>
            </ul>
            <div className='flex w-full flex-col items-center gap-2'>
              <Link
                href={`${appUrl}/signin`}
                className={twMerge(
                  buttonVariants({ variant: 'blue' }),
                  'cursor-pointer hover:no-underline'
                )}
              >
                Start 14-day free trial
              </Link>
              <p className='text-xs italic'>
                *Cancel anytime. £25/month after trial
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container flex w-full max-w-[1000px] flex-col items-center space-y-8 px-4 py-10 sm:px-10 sm:py-20 lg:space-y-15'>
        <Accordion
          type='single'
          collapsible
          defaultValue='item-1'
          className='w-full space-y-4'
        >
          <AccordionItem value='item-1' className='[&>h3]:mb-2!'>
            <AccordionTrigger>Do stores pay commission?</AccordionTrigger>
            <AccordionContent className='text-base'>
              No. TCGX does <strong>not</strong> charge commission on any
              buylist transactions. Stores pay a single flat monthly fee,
              regardless of volume.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='[&>h3]:mb-2!'>
            <AccordionTrigger>Is VAT included?</AccordionTrigger>
            <AccordionContent className='text-base'>
              Yes. The £25 monthly price <strong>includes VAT</strong>. There
              are no additional fees or hidden charges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3' className='[&>h3]:mb-2!'>
            <AccordionTrigger>Can I cancel any time?</AccordionTrigger>
            <AccordionContent className='text-base'>
              Yes. You can cancel your subscription at any time from your
              account settings. There are no long-term contracts or cancellation
              fees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href='/features'
          className={twMerge(
            buttonVariants({ variant: 'blue' }),
            'min-w-[200px] cursor-pointer text-lg hover:no-underline'
          )}
        >
          See all features
        </Link>
      </div>

      <div className='relative container flex max-w-full justify-center max-sm:px-4'>
        <div className='bg-blue absolute top-6 left-0 flex h-full max-h-30 w-full items-center justify-center sm:top-12 md:max-h-45 lg:top-20 lg:max-h-62.5'>
          <span className='max-w-1/3 text-center text-white md:text-4xl'>
            From binder to cash in a few clicks
          </span>
        </div>
        <div className='z-1 flex w-full justify-between lg:max-w-[1600px]'>
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
