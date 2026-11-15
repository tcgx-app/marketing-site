import { CharacterIllustration } from './CharacterIllustration'

export const Banner = () => {
  return (
    <div className='bg-blue w-full'>
      <div className='container grid grid-cols-2 items-end gap-x-4 gap-y-6 px-4 py-8 sm:px-10 md:grid-cols-3 md:items-center'>
        <span className='order-1 col-span-2 text-center text-2xl font-semibold text-white md:order-2 md:col-span-1 md:text-3xl lg:text-4xl'>
          From binder to cash in a few clicks
        </span>
        <CharacterIllustration
          character='collector'
          className='order-2 block w-full min-w-0 md:order-1'
          sizes='(min-width: 1280px) 390px, (min-width: 768px) 33vw, 45vw'
          decorative
        />
        <CharacterIllustration
          character='store-owner'
          className='order-3 block w-full min-w-0'
          sizes='(min-width: 1280px) 390px, (min-width: 768px) 33vw, 45vw'
          decorative
        />
      </div>
    </div>
  )
}
