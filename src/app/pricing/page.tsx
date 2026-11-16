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
    'What does one subscription cover?',
    'Your subscription sets up one TCGX store account. Contact contact@tcgx.co.uk to confirm arrangements for staff access or multiple locations before subscribing.'
  ],
  [
    'Which exports are included?',
    'Cardmarket CSV, Whatnot CSV and a general CSV export are available. Product support and required marketplace identifiers vary by destination. Review exported data before making listings live.'
  ],
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
            Including VAT, for one TCGX store account. Start with a 14-day free
            trial and run your buylist for one flat monthly price.
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
        <aside
          id='plans-heading'
          className='bg-accent border-border min-w-0 scroll-mt-8 rounded-2xl border p-6 sm:p-8'
          aria-labelledby='store-plan-heading'
        >
          <p className='text-blue dark:text-blue-light mb-3 text-sm font-semibold'>
            THE STORE SUBSCRIPTION
          </p>
          <h2 id='store-plan-heading' className='mb-2 text-4xl'>
            £25<span className='text-lg font-normal'> / month</span>
          </h2>
          <p className='text-muted-foreground mb-6 text-sm'>
            Including VAT · 14-day free trial
          </p>
          <h3 className='text-lg'>Included with your store account</h3>
          <ul className='list-disc space-y-3 pl-5'>
            <li>Fixed offers and market-based buying rates</li>
            <li>Daily feeds from your available price sources</li>
            <li>
              Condition settings, quantity limits, cash and store-credit offers
            </li>
            <li>Online customer buylists and a submission dashboard</li>
            <li>Cardmarket CSV, Whatnot CSV and general CSV exports</li>
            <li>Support from the TCGX team</li>
          </ul>
          <a
            href='/features/#compatibility'
            className='text-blue dark:text-blue-light mt-4 inline-flex min-h-11 items-center text-sm font-semibold underline'
          >
            Check price-source and export compatibility
          </a>
          <p className='text-muted-foreground mt-3 text-sm'>
            For staff access or multiple locations,{' '}
            <a
              href='mailto:contact@tcgx.co.uk?subject=TCGX%20store%20subscription'
              className='font-semibold underline'
            >
              confirm your setup with us
            </a>{' '}
            before subscribing.
          </p>
        </aside>
      </section>
      <section
        className='border-border w-full border-y'
        aria-labelledby='player-access-heading'
      >
        <div className='container flex flex-col items-start gap-5 px-4 py-8 sm:flex-row sm:items-center sm:px-10'>
          <CharacterIllustration
            character='pricing-pair'
            className='block w-28 shrink-0 sm:w-40'
            sizes='(min-width: 640px) 160px, 112px'
            decorative
          />
          <div className='min-w-0 grow'>
            <h2 id='player-access-heading' className='mb-2 text-2xl'>
              Selling your cards? Player accounts are free.
            </h2>
            <p>
              Browse stores and offers without signing in. Create a free account
              when you are ready to submit a buylist.
            </p>
          </div>
          <div className='flex shrink-0 flex-col items-start gap-1'>
            <a
              href={STORES_URL}
              className={cn(
                buttonVariants({ variant: 'outline-blue' }),
                'min-h-11 hover:no-underline'
              )}
            >
              Browse stores and offers
            </a>
            <a
              href={REGISTER_URL}
              className='text-blue dark:text-blue-light inline-flex min-h-11 items-center text-sm font-semibold underline'
            >
              Create a free player account
            </a>
          </div>
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
