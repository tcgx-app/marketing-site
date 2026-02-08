'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const openCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/brian-tcgx/tcgx-demo'
    })
  }

  return (
    <>
      <link
        href='https://assets.calendly.com/assets/external/widget.css'
        rel='stylesheet'
      />
      <Button variant='outline-blue' size='lg' onClick={openCalendly}>
        Book a demo
      </Button>
    </>
  )
}
