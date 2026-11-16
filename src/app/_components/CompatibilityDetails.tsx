// Keep these selectable singles sources aligned with the buylist app's
// src/lib/priceSources.ts registry. Price availability still varies by card.
const singlesSources = [
  ['Pokémon', true, true, true],
  ['Magic: The Gathering', true, false, false],
  ['Yu-Gi-Oh!', true, true, false],
  ['One Piece', true, true, false],
  ['Disney Lorcana', true, true, false],
  ['Riftbound', true, true, false]
] as const

export function CompatibilityDetails() {
  return (
    <section
      id='compatibility'
      className='bg-accent w-full scroll-mt-8'
      aria-labelledby='compatibility-heading'
    >
      <div className='container space-y-6 px-4 py-10 sm:px-10 sm:py-14'>
        <div className='max-w-3xl'>
          <p className='text-blue dark:text-blue-light mb-2 text-sm font-semibold'>
            GAMES, SOURCES & EXPORTS
          </p>
          <h2 id='compatibility-heading'>Check the fit for your catalogue.</h2>
          <p>
            Pricing sources and listing exports are different tools. Market
            feeds refresh daily; a source can be available for a game without
            having a price for every card.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='min-w-0 space-y-3'>
            <h3 className='mb-0 text-xl'>TCGplayer & Cardmarket</h3>
            <p>
              Available reference sources and price metrics depend on the game’s
              catalogue. Check the exact game, printing and product you buy when
              choosing a source.
            </p>
          </div>
          <div className='min-w-0 space-y-3'>
            <h3 className='mb-0 text-xl'>Singles and sealed</h3>
            <p>
              The table below covers singles. Sealed-product coverage differs by
              game and product. Cardmarket UK is available for Pokémon singles
              only.
            </p>
          </div>
        </div>
        <div className='bg-background border-border overflow-hidden rounded-xl border'>
          <div
            className='overflow-x-auto'
            role='region'
            aria-label='Singles price-source availability, scroll horizontally to compare all columns'
            tabIndex={0}
          >
            <table className='w-full min-w-[32rem] text-left text-sm'>
              <caption className='p-4 text-left font-semibold'>
                Additional reference sources for singles
                <span className='text-muted-foreground mt-1 block font-normal sm:hidden'>
                  Swipe to compare all sources →
                </span>
              </caption>
              <thead className='bg-muted border-border border-y'>
                <tr>
                  <th scope='col' className='p-4'>
                    Game
                  </th>
                  <th scope='col' className='p-4'>
                    eBay UK
                    <br />
                    Buy It Now
                  </th>
                  <th scope='col' className='p-4'>
                    eBay UK
                    <br />
                    Sold
                  </th>
                  <th scope='col' className='p-4'>
                    Cardmarket UK
                    <br />
                    (GBP)
                  </th>
                </tr>
              </thead>
              <tbody>
                {singlesSources.map(([game, ...sources]) => (
                  <tr
                    key={game}
                    className='border-border border-b last:border-b-0'
                  >
                    <th scope='row' className='p-4 font-medium'>
                      {game}
                    </th>
                    {sources.map((supported, index) => (
                      <td key={index} className='p-4'>
                        {supported ? 'Yes' : '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='grid gap-5 text-sm md:grid-cols-2'>
          <p className='text-muted-foreground'>
            Yes = selectable for this game’s singles; — = not offered.
            Individual card prices may be unavailable. Buy It Now asking prices
            and completed-sale references are different measures.
          </p>
          <p className='text-muted-foreground'>
            Exports: Cardmarket CSV, Whatnot CSV and general CSV. Destination
            coverage and marketplace identifiers vary; an export does not
            guarantee a marketplace import.
          </p>
        </div>
        <p>
          Need to check a particular game or product?{' '}
          <a
            href='mailto:contact@tcgx.co.uk?subject=TCGX%20catalogue%20compatibility'
            className='text-blue dark:text-blue-light inline-flex min-h-11 items-center font-semibold underline'
          >
            Ask the TCGX team before starting your trial
          </a>
          .
        </p>
      </div>
    </section>
  )
}
