'use client'

import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
      <h1>Here is another page</h1>

      <Link href={'/'}>Click here to go back home</Link>
    </main>
  )
}
