import Image from 'next/image'

const illustrations = {
  collector: {
    alt: 'A collector in a lilac hoodie sorting sleeved cards beside her purple binder'
  },
  'store-owner': {
    alt: 'A store owner in a green hoodie reviewing his laptop beside a card box'
  },
  'pricing-pair': {
    alt: 'A collector and store owner reviewing a card binder together at a counter'
  }
}

type CharacterIllustrationProps = {
  character: keyof typeof illustrations
  className?: string
  sizes: string
  priority?: boolean
  decorative?: boolean
}

export function CharacterIllustration({
  character,
  className,
  sizes,
  priority = false,
  decorative = false
}: CharacterIllustrationProps) {
  const imagePath = `/assets/images/characters/${character}`

  return (
    <picture className={className}>
      <source
        type='image/webp'
        srcSet={`${imagePath}-480.webp 480w, ${imagePath}-960.webp 960w`}
        sizes={sizes}
      />
      <Image
        src={`${imagePath}-960.webp`}
        alt={decorative ? '' : illustrations[character].alt}
        width={960}
        height={720}
        className='block h-auto w-full'
        priority={priority}
      />
    </picture>
  )
}
