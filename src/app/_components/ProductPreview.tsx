import Image from 'next/image'

export function ProductPreview({ priority = false }: { priority?: boolean }) {
  return (
    <picture className='block w-full min-w-0'>
      <source
        type='image/webp'
        srcSet='/assets/images/product-browser-480.webp 480w, /assets/images/product-browser-800.webp 800w, /assets/images/product-browser-1200.webp 1200w'
        sizes='(min-width: 1536px) 640px, (min-width: 1024px) 48vw, calc(100vw - 32px)'
      />
      <Image
        src='/assets/images/product-browser-1200.webp'
        alt='The TCGX product browser showing cards, store offers and quantity controls'
        width={1200}
        height={938}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className='block h-auto w-full rounded-lg shadow-xl'
      />
    </picture>
  )
}
