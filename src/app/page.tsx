import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '@/_components/ui/button'
import { SquareUserRound, Store, Trophy } from 'lucide-react'
import { AutoplayVideo } from './_components/autoplay-video'

export default function Home() {
  const appUrl = 'https://app.tcgx.co.uk'
  return (
    <main className='flex h-full min-h-full grow flex-col flex-wrap items-center'>
      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='space-y-6 md:basis-[calc(50%-16px)]'>
          <p className='text-xl'>For TCG stores & players</p>
          <h1>Run your TCG buylists on autopilot</h1>
          <p>
            Customers submit buylists online. You control prices with live
            marketplace data.
          </p>
          <div className='flex w-full justify-center'>
            <Link
              href={`${appUrl}/signin`}
              className={twMerge(
                buttonVariants({ variant: 'default' }),
                'cursor-pointer hover:no-underline'
              )}
            >
              Get started
            </Link>
          </div>
        </div>
        <div className='md:basis-[calc(50%-16px)]'>Image</div>
      </div>

      <div className='bg-accent w-full'>
        <div className='container flex flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
          <div className='mb-4 flex basis-full flex-col items-center'>
            <h1>Who is TCGX for?</h1>
            <p className='text-xl'>Pick what best describes you.</p>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-4xl'>
              For <strong>players</strong>
            </h2>
            <SquareUserRound className='mx-auto h-50 w-50 stroke-1' />
            <p className='text-xl'>Sell your TCG cards to stores online!</p>
            <ul className='mx-auto w-fit text-left'>
              <li className='list-disc'>Browse store buylists</li>
              <li className='list-disc'>Submit your cards</li>
            </ul>
            <div className='flex w-full justify-center'>
              <Link
                href={`${appUrl}/signin`}
                className={twMerge(
                  buttonVariants({ variant: 'default' }),
                  'cursor-pointer hover:no-underline'
                )}
              >
                Sell my cards
              </Link>
            </div>
          </div>
          <div className='bg-background grow space-y-6 rounded-md p-8 text-center md:basis-[calc(50%-16px)]'>
            <h2 className='text-4xl'>
              For <strong>businesses</strong>
            </h2>
            <Store className='mx-auto h-50 w-50 stroke-1' />
            <p className='text-xl'>Create a buylist for your store!</p>
            <ul className='mx-auto w-fit text-left'>
              <li className='list-disc'>Set your buy prices</li>
              <li className='list-disc'>Get card offers online</li>
            </ul>
            <div className='flex w-full justify-center'>
              <Link
                href={`${appUrl}/signin`}
                className={twMerge(
                  buttonVariants({ variant: 'default' }),
                  'cursor-pointer hover:no-underline'
                )}
              >
                Set up my store
              </Link>
            </div>
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
          <div className='flex w-auto items-center justify-center rounded-md p-4 text-xl font-bold italic'>
            ...and more coming soon!
          </div>
          {/* <div className='dark:bg-foreground bg-muted flex w-62.5 max-w-40 items-center justify-center rounded-md p-4 md:max-w-62.5'>
            <Image
              src='/assets/images/riftbound.png'
              alt='Riftbound TCG logo'
              width='250'
              height='150'
              className='max-h-15 w-auto md:max-h-25'
            />
          </div> */}
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

      <div className='bg-accent w-full'>
        <div className='container flex flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
          <div className='flex flex-col justify-center space-y-6 md:basis-[calc(40%-16px)]'>
            <h1>Customer buylists in a few clicks</h1>
            <p>
              Let players search your inventory, build a buylist, and send it
              straight to your store for payout.
            </p>
            <ol className='ml-5'>
              <li className='list-decimal'>
                Search by card name, set, or number
              </li>
              <li className='list-decimal'>Choose condition and quantity</li>
              <li className='list-decimal'>
                Submit the buylist for cash or store credit
              </li>
            </ol>
          </div>
          <div className='md:basis-[calc(60%-16px)]'>
            <AutoplayVideo
              src='https://tcgxstorageaccount.blob.core.windows.net/tcgx-ebay/buylist2.mp4'
              className='drop-shadow-foreground/20 dark:drop-shadow-background/20 w-full drop-shadow-xl'
              controls
              muted
              loop
            />
          </div>
        </div>
      </div>

      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='max-md:order-2 md:basis-[calc(60%-16px)]'>
          <AutoplayVideo
            src='https://tcgxstorageaccount.blob.core.windows.net/tcgx-ebay/priceSettings.mp4'
            className='drop-shadow-foreground/20 dark:drop-shadow-background/20 w-full drop-shadow-xl'
            controls
            muted
            loop
          />
        </div>
        <div className='flex flex-col justify-center space-y-6 max-md:order-1 md:basis-[calc(40%-16px)]'>
          <h1>Smart pricing rules</h1>
          <p>
            Connect your store to TCGPlayer or Cardmarket and control exactly
            what you pay for every card.
          </p>
          <ol className='ml-5'>
            <li className='list-decimal'>Choose your price source</li>
            <li className='list-decimal'>
              Set rules by rarity, set, or price band
            </li>
            <li className='list-decimal'>
              Offer different rates for cash vs store credit
            </li>
            <li className='list-decimal'>
              Bulk update your whole buylist in one go
            </li>
          </ol>
        </div>
      </div>

      <div className='bg-accent w-full'>
        <div className='container space-y-10 px-4 py-10 text-center sm:px-10 sm:py-20 lg:space-y-15'>
          <h1>Data Providers</h1>
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

      <div className='container flex w-full flex-wrap gap-8 px-4 py-10 sm:px-10 sm:py-20'>
        <div className='max-lg:order-2 lg:basis-[calc(50%-16px)]'>
          <Image
            src='/assets/images/ebay-award.png'
            alt='TCGX eBay Start-Up Winner Award'
            width='500'
            height='500'
            className='w-full brightness-120'
          />
        </div>
        <div className='flex flex-col justify-center space-y-6 max-lg:order-1 lg:basis-[calc(50%-16px)]'>
          <Image
            src='/assets/images/ebay.png'
            alt='eBay logo'
            width='250'
            height='150'
            className='md:max-h-25'
          />
          <h1 className='flex items-center gap-4'>
            <Trophy className='mr-4 h-30 w-30 shrink-0 stroke-1' />
            <span>
              eBay 2025 Business Awards <br /> <strong>Start-Up Winner</strong>
            </span>
          </h1>
          <p className='text-xl'>
            TCGX was recognised by eBay in the 2025 Business Awards for
            innovation in TCG e-commerce.
          </p>
        </div>
      </div>
    </main>
  )
}
