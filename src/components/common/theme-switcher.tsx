'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from '@/_components/ui/dropdown-menu'

import { Moon, Sun } from 'lucide-react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn(
        'sm:hover:bg-muted h-10 w-10 shrink-0 cursor-pointer border-none bg-transparent sm:h-8 sm:w-8'
      )}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant='ghost'
    //       size='icon'
    //       className={cn(
    //         'sm:hover:bg-muted h-10 w-10 shrink-0 cursor-pointer border-none bg-transparent sm:h-8 sm:w-8'
    //       )}
    //     >
    //       <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
    //       <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
    //       <span className='sr-only'>Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent
    //     align='end'
    //     className='bg-muted border-none opacity-100'
    //   >
    //     <DropdownMenuItem
    //       onClick={() => setTheme('light')}
    //       className='cursor-pointer'
    //     >
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem
    //       onClick={() => setTheme('dark')}
    //       className='cursor-pointer'
    //     >
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem
    //       onClick={() => setTheme('system')}
    //       className='cursor-pointer'
    //     >
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
