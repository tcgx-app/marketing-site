import { ArrowDown, ArrowRight } from 'lucide-react'
import { AutoplayVideo } from '@/components/common/autoplay-video'
import { buttonVariants } from '@/components/ui/button'
import { STORE_SETUP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Banner } from '../_components/Banner'
import CalendlyButton from '../_components/Calendly'
import { CompatibilityDetails } from '../_components/CompatibilityDetails'

const pageSections = [
  { number: '01', label: 'Configure your buying rules', href: '#buying-rules' },
  {
    number: '02',
    label: 'Review incoming submissions',
    href: '#submission-review'
  },
  { number: '03', label: 'Prepare listing exports', href: '#listing-exports' }
]

const reviewSteps = [
  {
    title: 'Review the submission',
    description:
      'See the cards, quantities and offered values together. Check the versions and conditions the customer selected before proceeding.'
  },
  {
    title: 'Receive and check the cards',
    description:
      'Follow your store’s process for delivery or drop-off. Check the received cards and discuss any differences with the seller.'
  },
  {
    title: 'Arrange payment with the seller',
    description:
      'Your store handles cash or store credit directly. Keep track of the buylist’s progress and retain a record of the submission.'
  }
]

export default function Features() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex min-w-0 grow flex-col items-center'
    >
      <section
        className='container grid w-full gap-10 px-4 py-10 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16'
        aria-labelledby='features-heading'
      >
        <div className='min-w-0 space-y-6'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            Inside the store workflow
          </p>
          <h1 id='features-heading'>
            From buying rules to stock ready to list.
          </h1>
          <p className='max-w-2xl text-lg'>
            See how TCGX turns your buying policy into customer offers, keeps
            submissions together and prepares accepted items for your listing
            workflow.
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
          <p className='text-muted-foreground max-w-xl text-sm'>
            Then £25/month including VAT. Payment details required. Cancel
            before the trial ends to avoid the monthly charge.
          </p>
        </div>
        <nav
          aria-label='On this page'
          className='border-border min-w-0 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8'
        >
          <p className='text-muted-foreground mb-3 text-sm font-semibold'>
            Explore the workflow
          </p>
          <ol className='divide-border divide-y'>
            {pageSections.map(section => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className='group text-foreground flex min-h-16 items-center gap-4 py-4 hover:no-underline'
                >
                  <span className='text-blue dark:text-blue-light text-sm font-semibold'>
                    {section.number}
                  </span>
                  <span className='grow font-semibold group-hover:underline'>
                    {section.label}
                  </span>
                  <ArrowDown aria-hidden='true' className='h-4 w-4 shrink-0' />
                </a>
              </li>
            ))}
          </ol>
          <a
            href='#compatibility'
            className='text-blue dark:text-blue-light inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline'
          >
            Check games, price sources and exports
            <ArrowRight aria-hidden='true' className='h-4 w-4 shrink-0' />
          </a>
        </nav>
      </section>

      <section
        id='buying-rules'
        className='bg-accent w-full scroll-mt-24'
        aria-labelledby='buying-rules-heading'
      >
        <div className='container space-y-10 px-4 py-12 sm:px-10 sm:py-16'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16'>
            <div className='min-w-0 space-y-5'>
              <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
                01 / Buying rules
              </p>
              <h2 id='buying-rules-heading'>
                Decide what you buy, and how you price it.
              </h2>
              <p>
                Set rules for matching products instead of updating every offer
                individually. Choose fixed amounts or a percentage of a selected
                market reference, with separate rates for cash and store credit.
              </p>
              <p>
                Choose the conditions and quantities you accept alongside your
                prices. Those settings let your catalogue reflect what your
                store wants to buy.
              </p>
            </div>
            <div className='bg-background min-w-0 rounded-xl p-6 sm:p-8'>
              <h3 className='text-xl'>Two ways to set an offer</h3>
              <dl className='divide-border divide-y'>
                <div className='space-y-2 pb-5'>
                  <dt className='font-semibold'>Fixed amount</dt>
                  <dd>
                    Choose the amount you will offer for matching products.
                  </dd>
                </div>
                <div className='space-y-2 py-5'>
                  <dt className='font-semibold'>
                    Percentage of a reference price
                  </dt>
                  <dd>
                    Choose a price source and buying rate. Percentage-based
                    offers use updated reference prices as market feeds refresh
                    daily.
                  </dd>
                </div>
                <div className='space-y-2 pt-5'>
                  <dt className='font-semibold'>Cash and store credit</dt>
                  <dd>
                    Set different offers for each payment option to suit your
                    store’s buying policy.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className='border-border bg-background min-w-0 rounded-xl border p-6 sm:p-8'>
            <div className='mb-5 flex flex-wrap items-baseline justify-between gap-2'>
              <h3 className='mb-0 text-xl'>A rule, worked through</h3>
              <p className='text-muted-foreground text-sm'>
                Illustrative offers only
              </p>
            </div>
            <div className='min-w-0'>
              <table className='w-full table-fixed text-left text-sm sm:text-base'>
                <caption className='sr-only'>
                  Examples of fixed offers and percentage-based offers for cash
                  and store credit
                </caption>
                <thead>
                  <tr className='border-border border-b'>
                    <th
                      scope='col'
                      className='w-1/2 pr-3 pb-4 font-semibold sm:pr-6'
                    >
                      Offer method
                    </th>
                    <th scope='col' className='pr-3 pb-4 font-semibold sm:pr-6'>
                      Cash
                    </th>
                    <th scope='col' className='pb-4 font-semibold'>
                      Store credit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-border border-b align-top'>
                    <th scope='row' className='py-5 pr-3 font-normal sm:pr-6'>
                      Fixed amount
                    </th>
                    <td className='py-5 pr-3 font-semibold sm:pr-6'>£5.00</td>
                    <td className='py-5 font-semibold'>£6.00</td>
                  </tr>
                  <tr className='align-top'>
                    <th scope='row' className='pt-5 pr-3 font-normal sm:pr-6'>
                      Percentage of a £10 reference price
                    </th>
                    <td className='pt-5 pr-3 sm:pr-6'>
                      <span className='font-semibold'>£6.00</span>
                      <span className='text-muted-foreground mt-1 block text-sm'>
                        60% buying rate
                      </span>
                    </td>
                    <td className='pt-5'>
                      <span className='font-semibold'>£7.00</span>
                      <span className='text-muted-foreground mt-1 block text-sm'>
                        70% buying rate
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-muted-foreground mt-6 max-w-3xl text-sm'>
              These are separate examples, not current card valuations or store
              offers. Actual offers depend on the product, source, condition,
              quantity and your settings. Source coverage varies by game and
              product.
            </p>
          </div>

          <figure className='grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-12'>
            <figcaption className='min-w-0 space-y-4'>
              <h3 className='text-2xl'>See buying rules in the dashboard</h3>
              <p>
                Watch the store pricing demonstration to see how buying rates
                and product settings come together.
              </p>
              <p className='text-muted-foreground text-sm'>
                Use the video controls to pause or replay the demonstration.
              </p>
            </figcaption>
            <AutoplayVideo
              src='/assets/videos/store-pricing.mp4'
              poster='/assets/videos/store-pricing-poster.webp'
              label='Product demo: configuring store buying rules'
              className='h-auto w-full min-w-0 rounded-lg shadow-xl'
            />
          </figure>
        </div>
      </section>

      <section
        id='submission-review'
        className='container grid w-full scroll-mt-24 gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16'
        aria-labelledby='submission-review-heading'
      >
        <div className='min-w-0 space-y-5'>
          <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
            02 / Submission review
          </p>
          <h2 id='submission-review-heading'>
            Keep the buylist together while you check the cards.
          </h2>
          <p>
            Customers search your buying catalogue and submit their cards
            online. Your dashboard brings those submissions together for review
            and lets you manage their progress.
          </p>
          <p>
            Use the same system for online buying, your shop counter or an
            event. Your store decides how cards are received, checked and paid
            for.
          </p>
          <div className='border-blue dark:border-blue-light border-l-2 pl-5'>
            <p className='text-muted-foreground text-sm'>
              TCGX provides the buylist platform. Your store arranges payment
              and delivery directly with the seller; TCGX does not process or
              guarantee those payments.
            </p>
          </div>
        </div>
        <ol className='divide-border min-w-0 divide-y'>
          {reviewSteps.map((step, index) => (
            <li
              key={step.title}
              className='flex gap-5 py-6 first:pt-0 last:pb-0'
            >
              <span className='bg-accent text-blue dark:text-blue-light flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold'>
                {index + 1}
              </span>
              <div className='min-w-0 space-y-3'>
                <h3 className='mb-0 text-xl'>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id='listing-exports'
        className='border-border w-full scroll-mt-24 border-y'
        aria-labelledby='listing-exports-heading'
      >
        <div className='container grid gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16'>
          <div className='min-w-0 space-y-5'>
            <p className='text-blue dark:text-blue-light text-sm font-semibold tracking-wide uppercase'>
              03 / Listing exports
            </p>
            <h2 id='listing-exports-heading'>
              Give accepted stock a route into your listing workflow.
            </h2>
            <p>
              Export accepted buylist items as Cardmarket CSV, Whatnot CSV or
              General CSV, then use the file in your listing workflow.
            </p>
          </div>
          <div className='min-w-0 space-y-6 lg:pt-10'>
            <p>
              The right export depends on where you sell and the products you
              are listing. Check the available format and product coverage, then
              review the imported data at the destination before making listings
              live.
            </p>
            <dl className='border-border space-y-5 border-l pl-6'>
              <div className='space-y-2'>
                <dt className='font-semibold'>Start with the accepted items</dt>
                <dd>
                  Carry the items you have reviewed into the next stage of
                  preparing your stock for sale.
                </dd>
              </div>
              <div className='space-y-2'>
                <dt className='font-semibold'>Match the destination</dt>
                <dd>
                  Export formats and product support vary. Check compatibility
                  below when planning your workflow.
                </dd>
              </div>
            </dl>
            <a
              href='#compatibility'
              className='text-blue dark:text-blue-light inline-flex min-h-11 items-center gap-2 font-semibold underline'
            >
              Check compatibility
              <ArrowDown aria-hidden='true' className='h-4 w-4 shrink-0' />
            </a>
          </div>
        </div>
      </section>

      <CompatibilityDetails />
      <Banner />
    </main>
  )
}
