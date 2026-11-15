import Image from 'next/image'

const games = [
  ['Pokémon', 'pokemon'],
  ['Magic: The Gathering', 'mtg'],
  ['One Piece', 'one-piece'],
  ['Disney Lorcana', 'lorcana'],
  ['Yu-Gi-Oh!', 'yugioh'],
  ['Riftbound', 'riftbound']
]

export function SupportedGames() {
  return (
    <section
      className='container w-full space-y-8 px-4 py-12 text-center sm:px-10 sm:py-16'
      aria-labelledby='supported-games'
    >
      <h2 id='supported-games'>Built for the TCGs your customers collect</h2>
      <ul className='grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {games.map(([name, file]) => (
          <li
            key={file}
            className='bg-muted flex min-w-0 items-center justify-center rounded-lg p-5 dark:bg-white'
          >
            <Image
              src={`/assets/images/${file}.png`}
              alt={`${name} logo`}
              width={250}
              height={150}
              className='h-16 w-full object-contain'
            />
          </li>
        ))}
      </ul>
      <p className='text-muted-foreground text-sm'>
        Available products and price sources vary by game.
      </p>
    </section>
  )
}
