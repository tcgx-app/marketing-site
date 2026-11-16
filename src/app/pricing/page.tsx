import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { REGISTER_URL, STORE_SETUP_URL, STORES_URL } from '@/lib/site'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { CharacterIllustration } from '../_components/CharacterIllustration'
import CalendlyButton from '../_components/Calendly'
import { Banner } from '../_components/Banner'

const questions = [
  [
    'Do stores pay commission?',
    'No. TCGX charges no commission on buylist transactions. Stores pay a flat monthly subscription, regardless of buylist volume.'
  ],
  ['Is VAT included?', 'Yes. The £25 monthly store subscription includes VAT.'],
  [
    'Do I need payment details for the trial?',
    'Yes. Complete your subscription setup with payment details to start the 14-day trial. The subscription is £25/month including VAT after the trial unless you cancel.'
  ],
  [
    'How do I get started?',
    'Create a TCGX account or sign in, then complete the business subscription setup. If you register by email, verify your email address before continuing. You can then configure your store and buying rules.'
  ],
  [
    'Can I cancel any time?',
    'Yes. Cancel from your account settings. There are no long-term contracts or cancellation fees. Cancel before the trial ends to avoid the monthly subscription charge.'
  ],
  [
    'Who pays players for their cards?',
    'The participating store arranges payment directly with the player, under its own terms and after checking the submitted cards. TCGX does not process or guarantee those payments.'
  ]
]

export default function Pricing() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex min-w-0 grow flex-col items-center'
    >
      <section
        className='container grid w-full gap-8 px-4 py-10 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
        aria-labelledby='pricing-heading'
      >
        <div className='min-w-0 space-y-5'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            Simple pricing for card stores
          </p>
          <h1 id='pricing-heading'>£25 a month. No buylist commission.</h1>
          <p className='text-lg'>
            Including VAT. Start with a 14-day free trial and run your store’s
            buylist for one flat monthly price.
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
            Payment details required. £25/month after the trial. Cancel before
            it ends to avoid the charge.
          </p>
          <p>
            Players use TCGX for free.{' '}
            <a
              href={STORES_URL}
              className='text-blue dark:text-blue-light font-semibold underline'
            >
              Browse store offers
            </a>
            .
          </p>
        </div>
        <CharacterIllustration
          character='pricing-pair'
          className='mx-auto block w-full max-w-xl min-w-0'
          sizes='(min-width: 1024px) 48vw, calc(100vw - 32px)'
          priority
        />
      </section>
      <section className='bg-accent w-full' aria-labelledby='plans-heading'>
        <div className='container grid gap-6 px-4 py-12 sm:px-10 sm:py-16 md:grid-cols-2'>
          <div className='text-center md:col-span-2'>
            <h2 id='plans-heading'>Choose your plan</h2>
            <p>One store subscription. Free accounts for players.</p>
          </div>
          <article className='bg-background border-blue flex min-w-0 flex-col gap-6 rounded-xl border-2 p-6 sm:p-8'>
            <h3 className='mb-0 text-xl'>For stores</h3>
            <p className='text-4xl font-bold'>
              £25<span className='text-lg font-normal'>/month</span>
            </p>
            <p>Including VAT. 14-day free trial.</p>
            <ul className='list-disc space-y-3 pl-5'>
              <li>Fixed and market-based buylist pricing</li>
              <li>Daily market feeds from available sources</li>
              <li>Condition settings and buying limits</li>
              <li>Cash and store-credit buying rates</li>
              <li>One dashboard for incoming submissions</li>
              <li>Priority support</li>
            </ul>
            <div className='mt-auto space-y-4'>
              <a
                href={STORE_SETUP_URL}
                className={cn(
                  buttonVariants({ variant: 'blue', size: 'lg' }),
                  'min-h-11 w-full text-center whitespace-normal hover:no-underline'
                )}
              >
                Start 14-day free trial
              </a>
              <p className='text-muted-foreground text-sm'>
                Payment details required. Then £25/month including VAT. Cancel
                any time.
              </p>
            </div>
          </article>
          <article className='bg-background flex min-w-0 flex-col gap-6 rounded-xl border p-6 sm:p-8'>
            <h3 className='mb-0 text-xl'>For players</h3>
            <p className='text-4xl font-bold'>Free</p>
            <p>No TCGX subscription to sell your cards.</p>
            <ul className='list-disc space-y-3 pl-5'>
              <li>Browse participating stores without signing in</li>
              <li>Search cards and view store offers</li>
              <li>Create and submit buylists</li>
              <li>Track your submissions</li>
            </ul>
            <p className='text-muted-foreground text-sm'>
              Each store sets its own buying prices, payment options, condition
              requirements and delivery terms.
            </p>
            <div className='mt-auto flex flex-col gap-3'>
              <a
                href={STORES_URL}
                className={cn(
                  buttonVariants({ variant: 'outline-blue', size: 'lg' }),
                  'min-h-11 text-center whitespace-normal hover:no-underline'
                )}
              >
                Browse stores and offers
              </a>
              <a
                href={REGISTER_URL}
                className='text-blue dark:text-blue-light inline-flex min-h-11 items-center justify-center font-semibold underline'
              >
                Create a free player account
              </a>
            </div>
          </article>
        </div>
      </section>
      <section
        className='container w-full max-w-4xl px-4 py-12 sm:px-10 sm:py-16'
        aria-labelledby='pricing-questions'
      >
        <h2 id='pricing-questions'>Your pricing questions</h2>
        <Accordion type='single' collapsible className='w-full'>
          {questions.map(([question, answer], index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className='[&>h3]:mb-0'
            >
              <AccordionTrigger className='min-h-14 text-left'>
                {question}
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <Banner />
    </main>
  )
}
