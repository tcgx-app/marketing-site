import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DEMO_URL } from '@/lib/site'

export default function CalendlyButton({ className }: { className?: string }) {
  return (
    <a
      href={DEMO_URL}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        buttonVariants({ variant: 'outline-blue', size: 'lg' }),
        'min-h-11 text-center whitespace-normal hover:no-underline',
        className
      )}
    >
      Book a demo<span className='sr-only'> (opens in a new tab)</span>
    </a>
  )
}
