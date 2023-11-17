import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee mug',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0"}}>{children}</body>
    </html>
  )
}
