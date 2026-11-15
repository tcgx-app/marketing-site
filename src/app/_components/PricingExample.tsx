export function PricingExample() {
  return (
    <section
      className='container grid w-full gap-8 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center'
      aria-labelledby='pricing-example'
    >
      <div className='min-w-0 space-y-5'>
        <h2 id='pricing-example'>
          One rule. An offer for every matching card.
        </h2>
        <p>
          Set a fixed offer or a percentage of your selected market source.
          Percentage-based offers update as new market data arrives, so you can
          manage your buying rules at scale.
        </p>
        <p>
          You can set different rates for cash and store credit, and control the
          conditions and quantities you accept.
        </p>
      </div>
      <div className='bg-accent min-w-0 rounded-xl p-6 sm:p-8'>
        <h3 className='text-lg'>An example cash-offer rule</h3>
        <dl className='space-y-4'>
          <div className='flex flex-wrap justify-between gap-2 border-b pb-4'>
            <dt>Market reference price</dt>
            <dd className='font-semibold'>£10.00</dd>
          </div>
          <div className='flex flex-wrap justify-between gap-2 border-b pb-4'>
            <dt>Your buying rate</dt>
            <dd className='font-semibold'>60%</dd>
          </div>
          <div className='flex flex-wrap justify-between gap-2'>
            <dt>Your cash offer</dt>
            <dd className='text-blue dark:text-blue-light text-2xl font-bold'>
              £6.00
            </dd>
          </div>
        </dl>
        <p className='text-muted-foreground mt-6 text-sm'>
          Illustrative numbers, not a current card valuation or store offer.
          Actual prices depend on the product, source and your settings.
        </p>
      </div>
    </section>
  )
}
