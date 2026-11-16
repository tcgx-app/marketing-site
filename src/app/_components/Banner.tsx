import { STORE_SETUP_URL, STORES_URL } from '@/lib/site'
import { CharacterIllustration } from './CharacterIllustration'

export const Banner = () => (
  <section
    className='bg-blue w-full text-white'
    aria-labelledby='next-step-heading'
  >
    <div className='container flex flex-col items-center justify-between gap-6 px-4 py-9 sm:px-10 md:flex-row md:gap-10'>
      <div className='min-w-0 space-y-4 text-center md:text-left'>
        <h2 id='next-step-heading' className='mb-0 text-3xl'>
          Put your buying rules to work.
        </h2>
        <p>
          14 days free. Then £25/month including VAT. No buylist commission.
        </p>
        <a
          href={STORE_SETUP_URL}
          className='inline-flex min-h-11 max-w-full items-center justify-center rounded bg-white px-5 py-3 font-semibold text-[#2d4fa2] hover:no-underline'
        >
          Start your free trial
        </a>
        <p className='text-sm'>
          Payment details required. Cancel before the trial ends to avoid the
          charge.
        </p>
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
        character='pricing-pair'
        className='block w-40 shrink-0 md:w-64'
        sizes='(min-width: 768px) 256px, 160px'
        decorative
      />
    </div>
  </section>
)
