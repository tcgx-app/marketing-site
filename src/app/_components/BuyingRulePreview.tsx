import Image from 'next/image'

export function BuyingRulePreview() {
  return (
    <figure className='border-border bg-accent min-w-0 overflow-hidden rounded-2xl border p-4 sm:p-6'>
      <div className='mb-4 flex items-center justify-between gap-3'>
        <p className='font-semibold'>You set the buying rate.</p>
        <span className='text-muted-foreground text-xs'>TCGX pricing demo</span>
      </div>
      <Image
        src='/assets/images/buying-rule-editor.webp'
        alt='TCGX bulk update panel showing a 70% Near Mint buying rate and buying limit controls'
        width={510}
        height={276}
        priority
        className='border-border h-auto w-full rounded-lg border bg-white'
      />
      <div className='bg-background mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-lg p-4 text-center'>
        <div>
          <p className='text-muted-foreground text-xs'>Market reference</p>
          <p className='mt-1 text-2xl font-bold'>£10</p>
        </div>
        <p className='text-muted-foreground text-sm'>× 70%</p>
        <div>
          <p className='text-muted-foreground text-xs'>Your cash offer</p>
          <p className='text-blue dark:text-blue-light mt-1 text-2xl font-bold'>
            £7
          </p>
        </div>
      </div>
      <figcaption className='text-muted-foreground mt-4 text-sm'>
        An illustrative result, not a live card price. Percentage-based offers
        update when new market data arrives.
      </figcaption>
    </figure>
  )
}
