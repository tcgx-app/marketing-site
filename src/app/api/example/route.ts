// These files must always be called route.ts - use the folder for the name of the route '/api/example'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Example API route' })
}
