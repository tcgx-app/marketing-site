'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, UserRound } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { SIGN_IN_URL, STORES_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ThemeSwitcher } from './theme-switcher'
import { Footer } from './footer'

const items = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Find a store', href: STORES_URL }
]

function Logo() {
  return (
    <>
      <Image
        src='/assets/tcgx-black.svg'
        alt=''
        width={300}
        height={67}
        loading='eager'
        className='block h-auto w-full dark:hidden'
      />
      <Image
        src='/assets/tcgx-white.svg'
        alt=''
        width={300}
        height={67}
        loading='eager'
        className='hidden h-auto w-full dark:block'
      />
    </>
  )
}

export function MainNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().replace(/\/$/, '') || '/'
  const [open, setOpen] = useState(false)
  return (
    <>
      <a href='#main-content' className='skip-link'>
        Skip to content
      </a>
      <header className='bg-accent border-border border-b'>
        <nav
          aria-label='Main navigation'
          className='container flex min-h-20 items-center justify-between gap-6 px-6 py-4 max-lg:hidden'
        >
          <Link href='/' aria-label='TCGX home' className='block w-30 shrink-0'>
            <Logo />
          </Link>
          <div className='flex items-center gap-6'>
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href.replace(/\/$/, '') ? 'page' : undefined
                }
                className={cn(
                  'hover:border-blue inline-flex min-h-11 items-center border-b-2 border-transparent px-1 hover:no-underline',
                  pathname === item.href.replace(/\/$/, '') && 'border-blue'
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SIGN_IN_URL}
              className={cn(
                buttonVariants({ variant: 'blue' }),
                'min-h-11 hover:no-underline'
              )}
            >
              Sign in
            </a>
            <ThemeSwitcher />
          </div>
        </nav>
        <div className='bg-background flex min-h-16 items-center justify-between gap-3 px-4 py-2 lg:hidden'>
          <Link href='/' aria-label='TCGX home' className='block w-25 shrink-0'>
            <Logo />
          </Link>
          <div className='flex items-center gap-1'>
            <ThemeSwitcher />
            <a
              href={SIGN_IN_URL}
              aria-label='Sign in'
              className='inline-flex h-11 w-11 items-center justify-center'
            >
              <UserRound aria-hidden='true' className='h-5 w-5' />
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size='icon'
                  variant='ghost'
                  aria-label='Open navigation menu'
                  className='h-11 w-11'
                >
                  <Menu aria-hidden='true' className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='h-dvh w-full max-w-full overflow-y-auto border-0 sm:max-w-sm'
              >
                <SheetTitle asChild>
                  <p className='sr-only'>Site navigation</p>
                </SheetTitle>
                <SheetDescription className='sr-only'>
                  Explore TCGX features and pricing, browse stores or sign in.
                </SheetDescription>
                <nav
                  aria-label='Mobile navigation'
                  className='flex min-h-full flex-col gap-6 pt-14'
                >
                  <Link
                    href='/'
                    aria-label='TCGX home'
                    className='block w-25'
                    onClick={() => setOpen(false)}
                  >
                    <Logo />
                  </Link>
                  {items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='inline-flex min-h-11 items-center text-lg font-medium'
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href='mailto:contact@tcgx.co.uk'
                    className='inline-flex min-h-11 items-center'
                  >
                    Contact TCGX
                  </a>
                  <a
                    href={SIGN_IN_URL}
                    className={cn(
                      buttonVariants({ variant: 'blue' }),
                      'mt-auto min-h-11 hover:no-underline'
                    )}
                  >
                    Sign in
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </>
  )
}
