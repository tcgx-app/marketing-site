import Image from 'next/image'

const sources = [
  { name: 'TCGplayer', image: 'tcgplayer', url: 'https://www.tcgplayer.com/' },
  {
    name: 'Cardmarket',
    image: 'cardmarket',
    url: 'https://www.cardmarket.com/'
  },
  { name: 'eBay UK', image: 'ebay', url: 'https://www.ebay.co.uk/' }
]

export function DataSources() {
  return (
    <section
      id='data-sources'
      className='bg-accent w-full scroll-mt-24'
      aria-labelledby='data-sources-heading'
    >
      <div className='container space-y-8 px-4 py-12 text-center sm:px-10 sm:py-16'>
        <h2 id='data-sources-heading'>Market data. Your buying rules.</h2>
        <p className='mx-auto max-w-2xl'>
          Choose from the price sources available for your game and products.
          Market feeds refresh daily; you decide what your store offers.
        </p>
        <ul className='mx-auto grid max-w-3xl gap-4 sm:grid-cols-3'>
          {sources.map(source => (
            <li key={source.image}>
              <a
                href={source.url}
                className='flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 text-[#0b0e17]'
              >
                <Image
                  src={`/assets/images/${source.image}.png`}
                  alt=''
                  width={250}
                  height={150}
                  className='h-16 w-full object-contain'
                />
                <span className='font-medium'>{source.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className='text-muted-foreground text-sm'>
          Coverage varies by game, card and source. Data sources and
          listing-export destinations are separate features.
        </p>
      </div>
    </section>
  )
}
