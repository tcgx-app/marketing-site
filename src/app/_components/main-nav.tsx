'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, UserRound } from 'lucide-react'

import { Button } from '@/_components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/_components/ui/sheet'

import { ThemeSwitcher } from './theme-switcher'
import { Footer } from './footer'

export function MainNav({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const appUrl = 'https://app.tcgx.co.uk'
  const [openSheet, setOpenSheet] = useState(false)

  return (
    <>
      <nav className='bg-accent z-10 hidden items-center gap-4 px-6 sm:py-5 lg:flex lg:w-full'>
        <Link href='/'>
          <Image
            src='/assets/tcgx-black.svg'
            alt='TCGX'
            width='150'
            height='100'
            className='max-w-30 dark:hidden'
          />
          <Image
            src='/assets/tcgx-white.svg'
            alt='TCGX'
            width='150'
            height='100'
            className='hidden max-w-30 dark:block'
          />
        </Link>
        <div className='flex w-full items-center justify-end gap-6'>
          <Link
            href='/how-it-works'
            className='text-foreground hover:bg-muted flex items-center gap-3 rounded-md p-2 transition-colors hover:no-underline'
          >
            <span>How it Works</span>
          </Link>
          <Link
            href='/pricing'
            className='text-foreground hover:bg-muted flex items-center gap-3 rounded-md p-2 transition-colors hover:no-underline'
          >
            <span>Pricing</span>
          </Link>
          <Link
            href='/stores'
            className='text-foreground hover:bg-muted flex items-center gap-3 rounded-md p-2 transition-colors hover:no-underline'
          >
            <span>For Stores</span>
          </Link>
          <Link
            href={`${appUrl}/signin`}
            className='text-foreground hover:bg-muted mx-8 flex items-center gap-3 rounded-md p-2 font-bold transition-colors hover:no-underline'
          >
            <UserRound className='h-5 w-5' />
            <span>Sign in</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className='flex flex-col lg:gap-4 lg:py-0'>
        <header className='bg-background sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b px-4 lg:static lg:hidden lg:h-auto lg:border-0 lg:bg-transparent lg:px-6'>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <Link
              href='/'
              className='flex w-25 shrink-0'
              onClick={() => {
                setOpenSheet(false)
              }}
            >
              <Image
                src='/assets/tcgx-black.svg'
                alt='TCGX'
                width='150'
                height='100'
                className='max-w-25 dark:hidden'
              />
              <Image
                src='/assets/tcgx-white.svg'
                alt='TCGX'
                width='150'
                height='100'
                className='hidden max-w-25 dark:block'
              />
            </Link>
            <div className='flex gap-3'>
              <div className='text-foreground flex items-center gap-1'>
                <ThemeSwitcher />
              </div>

              <SheetTrigger asChild>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-0 lg:hidden'
                >
                  <Menu className='h-5 w-5' />
                  <SheetTitle className='sr-only'>Toggle Menu</SheetTitle>
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent
              side='left'
              className='h-dvh w-dvw overflow-y-scroll border-0 lg:max-w-5'
            >
              <nav className='text-18 flex h-full flex-col gap-6 pt-12 font-medium'>
                <div className='grow space-y-6'>
                  <Link
                    href='/'
                    className='absolute top-6 left-8 w-full'
                    onClick={() => {
                      setOpenSheet(false)
                    }}
                  >
                    <Image
                      src='/assets/tcgx-black.svg'
                      alt='TCGX'
                      width='150'
                      height='100'
                      className='max-w-25 dark:hidden'
                    />
                    <Image
                      src='/assets/tcgx-white.svg'
                      alt='TCGX'
                      width='150'
                      height='100'
                      className='hidden max-w-25 dark:block'
                    />
                  </Link>
                  <Link
                    href='/how-it-works'
                    className='text-foreground flex items-center gap-4 px-2.5'
                    onClick={() => {
                      setOpenSheet(false)
                    }}
                  >
                    How it works
                  </Link>
                  <Link
                    href='/pricing'
                    className='text-foreground flex items-center gap-4 px-2.5'
                    onClick={() => {
                      setOpenSheet(false)
                    }}
                  >
                    Pricing
                  </Link>

                  <Link
                    href='/stores'
                    className='text-foreground hover:bg-muted flex w-full items-center gap-3 rounded-md px-2.5 transition-colors hover:no-underline'
                    onClick={() => {
                      setOpenSheet(false)
                    }}
                  >
                    <span>For Stores</span>
                  </Link>
                </div>
                <div className='space-y-4'>
                  <Link
                    href={`${appUrl}/signin`}
                    className='text-foreground flex items-center gap-4 px-2.5'
                  >
                    <UserRound className='h-5 w-5' />
                    <span>Sign in</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
      {children}
      <Footer />
    </>
  )
}
