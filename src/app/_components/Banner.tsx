import { STORE_SETUP_URL, STORES_URL } from '@/lib/site'
import { CharacterIllustration } from './CharacterIllustration'

export const Banner = () => (
  <section
    className='bg-blue w-full text-white'
    aria-labelledby='next-step-heading'
  >
    <div className='container grid grid-cols-2 items-end gap-x-4 gap-y-6 px-4 py-10 sm:px-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] md:items-center'>
      <div className='order-1 col-span-2 min-w-0 space-y-5 text-center md:order-2 md:col-span-1'>
        <h2 id='next-step-heading' className='mb-0 text-3xl'>
          Ready to build your store’s next buylist?
        </h2>
        <p>
          Try TCGX free for 14 days. Then £25/month including VAT, with no
          buylist commission.
        </p>
        <a
          href={STORE_SETUP_URL}
          className='inline-flex min-h-11 max-w-full items-center justify-center rounded bg-white px-5 py-3 font-semibold text-[#2d4fa2] hover:no-underline'
        >
          Start your free trial
        </a>
        <p className='text-sm'>
          Here to sell cards?{' '}
          <a
            href={STORES_URL}
            className='inline-flex min-h-11 items-center font-semibold underline'
          >
            Browse stores
          </a>
        </p>
      </div>
      <CharacterIllustration
        character='collector'
        className='order-2 block w-full min-w-0 md:order-1'
        sizes='(min-width: 1280px) 340px, (min-width: 768px) 28vw, 45vw'
        decorative
      />
      <CharacterIllustration
        character='store-owner'
        className='order-3 block w-full min-w-0'
        sizes='(min-width: 1280px) 340px, (min-width: 768px) 28vw, 45vw'
        decorative
      />
    </div>
  </section>
)
