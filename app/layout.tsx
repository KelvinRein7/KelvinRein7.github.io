import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kelvin Rein — Portfolio',
  description:
    'Kelvin Rein — Computer Science grad in Ottawa. Data analytics, web development, and AI/ML.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
