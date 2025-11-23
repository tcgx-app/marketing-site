import Link from 'next/link'

export function Footer() {
  const appUrl = 'https://app.tcgx.co.uk'

  return (
    <footer className='bg-muted dark:bg-muted/40 w-full space-y-6 p-10'>
      <div className='flex flex-wrap justify-center gap-4'>
        <Link href={`${appUrl}/faqs`} className='text-xs underline'>
          FAQs
        </Link>
        <Link
          href={`${appUrl}/terms-and-conditions`}
          className='text-xs underline'
        >
          Terms and Conditions
        </Link>
        <Link href={`${appUrl}/privacy-policy`} className='text-xs underline'>
          Privacy Policy
        </Link>
        <Link
          href={`${appUrl}/acceptable-use-policy`}
          className='text-xs underline'
        >
          Acceptable Use Policy
        </Link>
        <Link href={`${appUrl}/cookie-policy`} className='text-xs underline'>
          Cookie Policy
        </Link>
        <Link href={`${appUrl}/disclaimer`} className='text-xs underline'>
          Disclaimer
        </Link>
      </div>
      <p className='flex justify-center text-xs'>
        © TCGX LTD, {new Date().getFullYear()}
      </p>
    </footer>
  )
}
