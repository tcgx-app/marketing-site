import Image from 'next/image'

export const Banner = () => {
  return (
    <div className='relative container flex max-w-full justify-center max-sm:px-4'>
      <div className='bg-blue absolute top-6 left-0 flex h-full max-h-30 w-full items-center justify-center sm:top-12 md:max-h-45 lg:top-20 lg:max-h-62.5'>
        <span className='max-w-1/3 text-center text-white md:text-4xl'>
          From binder to cash in a few clicks
        </span>
      </div>
      <div className='z-1 -mt-6 flex w-full justify-between lg:max-w-[1600px]'>
        <div className='max-w-1/3'>
          <Image
            src='/assets/images/tcgx-image-3.png'
            alt='TCGX app screenshot'
            width='500'
            height='500'
            className='w-full'
          />
        </div>
        <div className='mt-16 max-w-1/3 lg:mt-30'>
          <Image
            src='/assets/images/tcgx-image-2.png'
            alt='TCGX app screenshot'
            width='500'
            height='500'
            className='w-full'
          />
        </div>
      </div>
    </div>
  )
}
