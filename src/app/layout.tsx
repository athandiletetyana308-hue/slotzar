import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlotZar — WhatsApp Booking & Payments for SA Businesses',
  description: 'Take bookings and collect payment upfront via WhatsApp. No more no-shows. No more chasing payments. Built for South African service businesses.',
  keywords: ['booking', 'WhatsApp', 'South Africa', 'salon', 'barber', 'payments'],
  openGraph: {
    title: 'SlotZar',
    description: 'WhatsApp-native booking + payment collection for SA service businesses',
    url: 'https://slotzar.co.za',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
