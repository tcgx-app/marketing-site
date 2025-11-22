'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
      <h1>Hello world</h1>

      <Link href={'/dashboard'}>Click here to go to dashboard</Link>
    </main>
  )
}
