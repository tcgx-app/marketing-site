import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='mb-4 text-8xl font-bold'>404</h1>
        <h2 className='text-25 flex flex-col items-center font-normal'>
          This page could not be found
        </h2>
      </div>
      <Link href='/' className='button'>
        Return Home
      </Link>
    </main>
  )
}
